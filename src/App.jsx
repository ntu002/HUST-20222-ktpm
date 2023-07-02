import HouseholdDashboard from "./components/Household/HouseholdDashboard";
import Login from "./components/Login/Login";
import PeopleDashboard from "./components/People/PeopleDashboard";
import AbsentDashboard from "./components/Absent/AbsentDashboard";
import ResidentDashboard from "./components/Resident/ResidentDashboard";
import PeopleDescription from "./components/People/PeopleDescription";
import ResidentRegisterForm from "./components/Resident/ResidentRegisterForm";
import AddPeople from "./components/People/AddPeople";
import EditPeople from "./components/People/EditPeople";
import Sidebar from "./components/Home/Sidebar";
import Topbar from "./components/Home/Topbar";
import Styles from "./App.module.css";

import MainDashBoard from "./components/Home/MainDashBoard";
import { useState } from "react";
function App() {
  const [isLogin, setLogined] = useState(false);
  const [target, setTarget] = useState("Home");
  
  let SetTarget = (name) => {
   
    setTarget(name);
  }
  let LoginSet = (e) => {
    setLogined(true);
  }
  if(!isLogin){
    return (<Login onClick={LoginSet}></Login>);
  }
  else{
   
    return(
      
      <div>
        <div class={Styles.right}>
          <Topbar ></Topbar>
          <div class={Styles.main}>


            
          
          {(target === "People") && <PeopleDashboard></PeopleDashboard>}
          {(target === "HouseHold") && <HouseholdDashboard></HouseholdDashboard>}
          {(target === "Home") &&<MainDashBoard></MainDashBoard>}
          
          {(target === "Account") && <HouseholdDashboard></HouseholdDashboard>} 



          </div>
        </div>
        <div class={Styles.left}>
          <Sidebar role ="Admin" /*"CovidKhaiBao"*/ onClick = {SetTarget}></Sidebar>
        </div>
      </div> 
      );
  }
  
}

export default App;
