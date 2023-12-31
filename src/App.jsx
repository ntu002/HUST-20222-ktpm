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
import AddHouseHold from "./components/Household/AddHouseHold";
function App() {
  const [isLogin, setLogined] = useState(false);
  const [target, setTarget] = useState("Home");
  
  let SetTarget = (name) => {
   
    setTarget(name);
  }
  let LogOut = (e) => {
    setLogined(false);
  }
  let LoginSet = (e) => {
    setLogined(true);
  }
  let logOut = (e) => {
    setLogined(false);
  }
  if(!isLogin){
    return (<Login onClick={LoginSet}></Login>);
  }
  else{
   
    return(
      
      <div>
        <div class={Styles.right}>
          <Topbar name={"Trần Nhật Hóa"}></Topbar>
          <div class={Styles.main}>
          {(target === "People") && <PeopleDashboard></PeopleDashboard>}
          {(target === "HouseHold") && <HouseholdDashboard></HouseholdDashboard>}
          {(target === "Absent") && <AbsentDashboard></AbsentDashboard>}
          {(target === "Resident") && <ResidentDashboard></ResidentDashboard>}
          {(target === "Home") &&<MainDashBoard></MainDashBoard>}
          </div>
        </div>
        <div class={Styles.left}>
          <Sidebar role ="Admin" onClick = {SetTarget} logOut={logOut}></Sidebar>
        </div>
      </div> 
      );
  }
  
}

export default App;
