import { AppContext } from "../context.jsx";

import "../SideBar.css"; // Import custom CSS file for scrollbar styling
import { useEffect } from "react";
import { useContext } from "react";



/**
 * A sidebar that displays all the races withen a selected year, includes results and standings buttons.
 * 
 * @returns Sidebar component, displays on left side of view.
 */
const Standings = (props) => {
  const { raceID } = useContext(AppContext);
  const { selectedRace } = useContext(AppContext);
  const { conStanding, setConStanding } = useContext(AppContext);
  const { driverStanding, setDriverStanding } = useContext(AppContext);
  const { setshowCard } = useContext(AppContext);
  const { setConstID, setDriverID } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await props.supabase
          .from("constructor_standings")
          .select("points, position, wins, constructors(*)")
          .eq("raceId", raceID)
          .order("position", { ascending: true });
        let sortedData = data.sort((a, b) => a.position - b.position);
        setConStanding(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [raceID]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await props.supabase
          .from("driver_standings")
          .select(" points, position, wins ,drivers(*)")
          .eq("raceId", raceID)
          .order("position", { ascending: true });
        setDriverStanding(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [raceID]);

  return (
    <div className="mr-[5%] ml-[2%] flex justify-left h-[83vh] w-[58%] border-2 bg-white shadow-xl rounded-md border-gray-200 px-2">
      <div className="w-full h-full flex flex-col">
        <h1 className="text-3xl pt-2 text-center text-gray-700 uppercase tracking-wider font-semibold mb-2">
          Standings
        </h1>

        <div className=" text-center">After Round {selectedRace.round}</div>
        <div className="flex gap-2 h-full mt-1 overflow-hidden">
          <div className="w-7/12 border-t-2 flex flex-col h-full">
            <h1 className="text-xl pt-1 text-center text-gray-700 uppercase tracking-wider font-semibold mb-2">
              Drivers
            </h1>
            <div className="table-container h-full">
              <table className="w-full">
                <thead className="sticky top-0 bg-gray-200 z-50">
                  <tr>
                    <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                      Pos
                    </th>
                    <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold"></th>
                    <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                      Pts
                    </th>
                    <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                      Wins
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {driverStanding.map((result, index) => (
                    <tr key={index} className="border-b hover:bg-gray-100">
                      <td className="pl-1 py-2">{result.position}</td>
                      <td className="pl-1 py-2">
                        <span className=" underline hover:cursor-pointer hover:text-stone-500"
                          onClick={() => {
                            setshowCard("driver");
                            setDriverID(result.drivers.driverId);
                          }}>
                          {result.drivers.forename +
                            " " +
                            result.drivers.surname}
                        </span>
                      </td>
                      <td className="pl-1 py-2">{result.points}</td>
                      <td className="pl-1 py-2">{result.wins}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-7/12 border-t-2 flex flex-col h-full">
            <h1 className="text-xl pt-1 text-center text-gray-700 uppercase tracking-wider font-semibold mb-2">
              Constructors
            </h1>
            <div className="table-container h-full">
              <table className="w-full">
                <thead className="sticky top-0 bg-gray-200 z-50">
                  <tr>
                    <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                      Pos
                    </th>
                    <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold"></th>
                    <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                      Pts
                    </th>
                    <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                      Wins
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {conStanding.map((result, index) => (
                    <tr key={index} className="border-b hover:bg-gray-100">
                      <td className="pl-1 py-2">{result.position}</td>
                      <td className="pl-1 py-2">
                        <span
                          className=" underline hover:cursor-pointer hover:text-stone-500"
                          onClick={() => {
                            setshowCard("contructor");
                            setConstID(result.constructors.constructorId);
                          }}
                        >
                          {result.constructors.name}
                        </span>
                      </td>
                      <td className="pl-1 py-2">{result.points}</td>
                      <td className="pl-1 py-2">{result.wins}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standings;
