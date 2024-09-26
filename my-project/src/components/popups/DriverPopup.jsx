import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../context.jsx";



/**
 * A Driver card that displays the selected drivers info, possitioned ontop the page in the middle and blurs background.
 * 
 * @returns a forground card that displays driver info
 */
const DriverPopup = (props) => {
    const { driverID, setDriverID } = useContext(AppContext);
    const { driverData, setDriverDaTa } = useContext(AppContext);
    const { setshowCard } = useContext(AppContext);
    const { favoriteData, setFavoriteData } = useContext(AppContext);

    // get driver info and save to context
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await props.supabase
                    .from("drivers")
                    .select("*")
                    .eq("driverId", driverID);
                setDriverDaTa(data[0]);
                if (error) {
                    throw error;
                }
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };
        fetchData();
    }, [driverID]);

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-filter backdrop-blur-lg">
            <div className="max-h-[785vh] max-w-[45%] min-w-[500px] border-2 bg-white shadow-xl rounded-md border-gray-200 p-4 relative">
                <div className="mb-4 flex justify-between">
                    <span className="text-3xl font-bold">Driver Details</span>
                    <button
                        type="button"
                        className="text-red-600 text-3xl font-bold hover:text-red-700 focus:outline-none"
                        onClick={() => {
                            setDriverDaTa([]);
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
                            <td className="text-lg">{driverData.forename} {driverData.surname}</td>
                        </tr>
                        <tr key={3}>
                            <td className="text-lg font-semibold">DOB:</td>
                            <td className="text-lg">{driverData.dob}</td>
                        </tr>
                        <tr key={4}>
                            <td className="text-lg font-semibold">Nationality:</td>
                            <td className="text-lg">{driverData.nationality}</td>
                        </tr>
                        <tr key={5}>
                            <td className="text-lg font-semibold">URL:</td>
                            <td className="text-lg">
                                <a
                                    href={driverData.url}
                                    className="text-blue-600 hover:underline"
                                >
                                    {driverData.url != null ? "Wiki" : ""}
                                </a>
                            </td>
                        </tr>


                        <tr>
                            <td colSpan="2" className="text-center py-4">
                                <button
                                    type="button"
                                    className="max-h-[40px] h-1/2 flex items-center bg-gray-200 hover:bg-gray-400 text-black border-2 border-black py-2 px-2 rounded focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                                    onClick={() => {
                                        let name = driverData.forename + " " + driverData.surname;
                                        let newfav = favoriteData;
                                        if (newfav.drivers == null) {
                                            newfav.drivers = [name]
                                        } else {
                                            newfav.drivers = [name, ...newfav.drivers]
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
        </div >
    );
};

export default DriverPopup;
