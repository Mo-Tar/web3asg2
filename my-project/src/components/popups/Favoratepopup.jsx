import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../context.jsx";
import "../../SideBar.css";



/**
 * A favorite card that displays all the users favorates, possitioned ontop the page in the middle and blurs background.
 * 
 * @returns a forground card that displays favorate info
 */
const FavoritePopup = (props) => {
    const { favoriteData, setFavoriteData } = useContext(AppContext);
    const { setshowCard } = useContext(AppContext);

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-filter backdrop-blur-lg">
            <div className="max-h-[785vh] max-w-[45%] min-w-[500px] border-2 bg-white shadow-xl rounded-md border-gray-200 p-4 relative">
                <div className="mb-4 flex justify-between">
                    <span className="text-3xl font-bold">Favorites</span>
                    <div className="flex w-full h-full justify-end gap-6">
                        <button
                            type="button"
                            className="max-h-[40px] h-1/2 flex items-center bg-gray-200 hover:bg-gray-400 text-black border-2 border-black py-2 px-2 rounded focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                            onClick={() => {
                                setFavoriteData({});
                            }}>
                            Remove All
                        </button>
                        <button
                            type="button"
                            className="text-red-600 text-3xl font-bold hover:text-red-700 focus:outline-none"
                            onClick={() => {
                                setshowCard(false);
                            }}>
                            &times;
                        </button>
                    </div>
                </div>
                <div className="table-container h-full flex gap-4">

                    <table className="w-full">
                        <thead className="sticky top-0 bg-gray-200 z-50">
                            <tr>
                                <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                                    Drivers
                                </th>
                            </tr>
                        </thead>
                        <tbody className=" justify-items-tops">
                            {favoriteData.drivers != null ? Array.from(new Set(favoriteData.drivers)).map((fav, index) => (
                                <tr
                                    key={index}
                                    className="border-b hover:bg-gray-100">
                                    <td className="pl-1 py-2">{fav}</td>
                                </tr>
                            )) : <tr></tr>}
                        </tbody>
                    </table>


                    <table className="w-full">
                        <thead className="sticky top-0 bg-gray-200 z-50">
                            <tr>
                                <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                                    constructors
                                </th>
                            </tr>
                        </thead>
                        <tbody className=" justify-items-tops">
                            {favoriteData.constructors != null ? Array.from(new Set(favoriteData.constructors)).map((fav, index) => (
                                <tr
                                    key={index}
                                    className="border-b hover:bg-gray-100">
                                    <td className="pl-1 py-2">{fav}</td>
                                </tr>
                            )) : <tr></tr>}
                        </tbody>
                    </table>


                    <table className="w-full">
                        <thead className="sticky top-0 bg-gray-200 z-50">
                            <tr>
                                <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                                    Circuits
                                </th>
                            </tr>
                        </thead>
                        <tbody className=" justify-items-tops">
                            {favoriteData.circuits != null ? Array.from(new Set(favoriteData.circuits)).map((fav, index) => (
                                <tr
                                    key={index}
                                    className="border-b hover:bg-gray-100">
                                    <td className="pl-1 py-2">{fav}</td>
                                </tr>
                            )) : <tr></tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FavoritePopup;
