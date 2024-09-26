import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../context.jsx";

const ConstructorPopup = (props) => {
    const { constID } = useContext(AppContext);
    const { constData, setConstDaTa } = useContext(AppContext);
    const { setshowCard } = useContext(AppContext);
    const { favoriteData, setFavoriteData } = useContext(AppContext);




    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await props.supabase
                    .from("constructors")
                    .select("*")
                    .eq("constructorId", constID);
                if (error) {
                    throw error;
                }

                setConstDaTa(data[0]);
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };
        fetchData();
    }, [constID]);

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-filter backdrop-blur-lg">
            <div className="max-h-[75vh] max-w-[45%] min-w-[500px] border-2 bg-white shadow-xl rounded-md border-gray-200 p-4 relative">
                <div className="mb-4 flex justify-between">
                    <span className="text-3xl font-bold">Constructor Details</span>
                    <button
                        type="button"
                        className="text-red-600 text-3xl font-bold hover:text-red-700 focus:outline-none"
                        onClick={() => {
                            setConstDaTa([]);
                            setshowCard(false);
                        }}
                    >
                        &times;
                    </button>
                </div>
                <table className="w-full">
                    <tbody>
                        <tr key={1}>
                            <td className="text-lg font-semibold">Name:</td>
                            <td className="text-lg">{constData.name}</td>
                        </tr>
                        <tr key={2}>
                            <td className="text-lg font-semibold">Nationality:</td>
                            <td className="text-lg">{constData.nationality}</td>
                        </tr>
                        <tr key={3}>
                            <td className="text-lg font-semibold">URL:</td>
                            <td className="text-lg">
                                <a
                                    href={constData.url}
                                    className="text-blue-600 hover:underline"
                                >
                                    {constData.url != null ? "Wiki" : ""}
                                </a>
                            </td>
                        </tr>


                        <tr>
                            <td colSpan="2" className="text-center py-4">
                                <button
                                    type="button"
                                    className="max-h-[40px] h-1/2 flex items-center bg-gray-200 hover:bg-gray-400 text-black border-2 border-black py-2 px-2 rounded focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                                    onClick={() => {
                                        let name = constData.name;
                                        let newfav = favoriteData;
                                        if (newfav.constructors == null) {
                                            newfav.constructors = [name]
                                        } else {
                                            newfav.constructors = [name, ...newfav.constructors]
                                        }
                                        setFavoriteData(newfav);
                                    }}>
                                    Favorite
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="text-center">
                                <div className="min-h-60  bg-gray-300 rounded-lg mt-8 flex justify-center items-center">
                                    <span className="text-lg font-semibold">Image</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ConstructorPopup;
