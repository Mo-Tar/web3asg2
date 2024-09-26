import { useState, createContext } from 'react';

export const AppContext = createContext();

export const TheContext = ({ children }) => {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [raceData, setraceData] = useState([]);
  const [selectedRace, setSelectedRace] = useState([]);
  const [raceID, setraceID] = useState([]);
  const [seasonData, setSeasonData] = useState([]);
  const [conStanding, setConStanding] = useState([]);
  const [driverStanding, setDriverStanding] = useState([]);
  const [qData, setQData] = useState([]);
  const [year, setYear] = useState(2023);
  const [showResult, setShowResult] = useState(false);
  const [showStanding, setShowStanding] = useState(false);
  const [showCard, setshowCard] = useState(false);
  const [resultData, setRData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [constID, setConstID] = useState([]);
  const [driverID, setDriverID] = useState([]);
  const [circuitID, setcircuitID] = useState([]);
  const [constData, setConstDaTa] = useState([]);
  const [driverData, setDriverDaTa] = useState([]);
  const [favoriteData, setFavoriteData] = useState({});



  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, raceData, favoriteData, setFavoriteData, driverID, driverData, setDriverDaTa, setDriverID, setraceData, circuitID, setcircuitID, year, setYear, seasonData, setSeasonData, conStanding, driverStanding, setDriverStanding, setConStanding, qData, setQData, raceID, setraceID, selectedRace, setSelectedRace, showResult, setShowResult, showCard, setshowCard, resultData, setRData, showStanding, setShowStanding, isLoading, setIsLoading, constID, setConstID, constData, setConstDaTa }}>
      {children}
    </AppContext.Provider>
  )

}