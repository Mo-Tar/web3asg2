import { useState, useContext } from "react";
import "./App.css";
import Login from './components/LoginPage.jsx';
import { AppContext } from "./context.jsx";
import SideBar from "./components/RacesSideBar.jsx";
import HomeView1 from "./components/HomeView1.jsx";


/** 
* Check login state and directs to dashboard or login depending on state
*
* @return login or dashboard component
*/
function App(props) {
  const { isLoggedIn } = useContext(AppContext)

  if (isLoggedIn) {
    return (
      <HomeView1 supabase={props.supabase} />
    );
  }
  else {
    return (
      <>
        <Login supabase={props.supabase} />
      </>
    );
  }

}

export default App;
