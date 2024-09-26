import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../context.jsx";



/**
 * The header component, contains a year selector, header text, favorate button, and about button.
 * 
 * @returns Header component, displays at top of view
 */
const Header = (props) => {
    const { setYear } = useContext(AppContext);
    const { seasonData, setSeasonData } = useContext(AppContext);
    const { setShowResult } = useContext(AppContext);
    const { setShowStanding } = useContext(AppContext);
    const { setIsLoading } = useContext(AppContext);
    const { setshowCard } = useContext(AppContext);
    const { favoriteData } = useContext(AppContext);

    // change state and close other views when changing year
    const handleChange = (e) => {
        setYear(e.target.value);
        setShowResult(false);
        setShowStanding(false);
    };

    // get all the year
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await props.supabase
                    .from("seasons")
                    .select("*")
                    .gte("year", 2000)
                    .lte("year", 2023)
                    .order("year", { ascending: false });

                if (error) {
                    throw error;
                }

                setSeasonData(data);
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="h-[16vh] w-screen flex justify-center items-center">
            <div className="border-2 bg-white shadow-xl rounded-md border-gray-200 px-2 w-[90%] h-[80%] flex justify-between items-center text-xl">
                <div className="w-1/5 pl-6">
                    <label htmlFor="year">Season: </label>
                    <select
                        name="year"
                        className="w-1/3 border-2 border-gray-400 rounded"
                        onChange={handleChange}
                    >
                        {seasonData.map((season, index) => (
                            <option key={index} value={season.year}>{season.year}</option>
                        ))}
                    </select>
                </div>
                <div className="flex font-bold text-2xl">F1 Dashboard</div>
                <div className="w-1/5 flex justify-center items-center gap-6">
                    <button
                        type="button"
                        className={(Object.keys(favoriteData).length != 0) ? "bg-gray-600 hover:bg-yellow-600 text-white py-2 px-5 rounded-full focus:outline-none transition duration-300 ease-in-out transform hover:scale-105" :
                            "bg-gray-600 text-white py-2 px-5 rounded-full"}


                        onClick={() => {
                            if (Object.keys(favoriteData).length != 0) {
                                setshowCard("favorite");
                            }
                        }}>
                        Favorites
                    </button>
                    <button
                        type="button"
                        className=" bg-gray-600 hover:bg-blue-600 text-white py-2 px-5 rounded-full focus:outline-none transition duration-300 ease-in-out transform hover:scale-105" onClick={() => {
                            setshowCard("about");
                        }}
                    >
                        About
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
