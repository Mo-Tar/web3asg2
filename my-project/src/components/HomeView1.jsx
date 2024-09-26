import React from 'react'
import { useContext } from "react";
import { AppContext } from "../context.jsx";
import SideBar from './RacesSideBar.jsx';
import Header from './Header.jsx';
import Results from './Results.jsx';
import Standings from './Standings.jsx';
import DriverPopup from './popups/DriverPopup.jsx';
import ContructorPopup from './popups/ContructorPopup.jsx';
import CircuitPopup from './popups/CircuitPopup.jsx';
import FavoritePopup from './popups/Favoratepopup.jsx';
import AboutPopup from './popups/AboutPopup.jsx';




/** 
* The F1 dashboard main view, uses context to determine what cards to display.
*
* @return A dashboard full of F1 related components
*/
export const HomeView1 = (props) => {
  const { showResult, showStanding, showCard } = useContext(AppContext);


  // conditonal rendering
  const displayMainCard = () => {
    if (showResult) return <Results supabase={props.supabase} />
    else if (showStanding) return <Standings supabase={props.supabase} />
  }

  // conditonal rendering, this is not ideal should be using a switch just short on time
  const displayMiniCard = () => {
    if (showCard == false) return
    else if (showCard == "favorite") return <FavoritePopup supabase={props.supabase} />
    else if (showCard == "circuit") return <CircuitPopup supabase={props.supabase} />
    else if (showCard == "driver") return <DriverPopup supabase={props.supabase} />
    else if (showCard == "contructor") return <ContructorPopup supabase={props.supabase} />
    else if (showCard == "about") return <AboutPopup />
  }


  return (
    <div className="flex flex-wrap bg-cover bg-[url('/assets/bgg.jpg')]">
      <Header supabase={props.supabase} />
      <SideBar supabase={props.supabase} />
      {displayMainCard()}
      {displayMiniCard()}
    </div>
  );

}

export default HomeView1;