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
<<<<<<< HEAD
import HouseHoldDescription from "./components/Household/HouseholdDescription";
import AddRelationship from "./components/Household/popup/AddRelationship";
import AddHouseHold from "./components/Household/AddHouseHold";
import EditHouseHold from "./components/Household/EditHouseHold";
import CovidForm from "./components/Home/CovidForm";
=======
import MainDashBoard from "./components/Home/MainDashBoard";
>>>>>>> 389036c7bc3e40317a83a4f914b3861bfad65b2f
import { useState } from "react";
function App() {
  const [isLogin, setLogined] = useState(false);
  const [target, setTarget] = useState("");
  
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
<<<<<<< HEAD
          {/* <HouseHoldDescription></HouseHoldDescription>           */}
          {/* {(target === "People") && <PeopleDashboard></PeopleDashboard>} */}
          {/* {(target === "HouseHold") && <HouseholdDashboard></HouseholdDashboard>} */}
          {/* <AddHouseHold></AddHouseHold> */}
          {/* <EditHouseHold></EditHouseHold> */}
          <CovidForm></CovidForm>
=======

            
          
          {(target === "People") && <PeopleDashboard></PeopleDashboard>}
          {(target === "HouseHold") && <HouseholdDashboard></HouseholdDashboard>}
          {(target === "Home") &&<HouseholdDashboard></HouseholdDashboard>}
          {(target === "Meeting") &&  <MainDashBoard></MainDashBoard>}
          {(target === "Account") && <HouseholdDashboard></HouseholdDashboard>} 


>>>>>>> 389036c7bc3e40317a83a4f914b3861bfad65b2f
          </div>
        </div>
        <div class={Styles.left}>
          <Sidebar role ="Admin" onClick = {SetTarget}></Sidebar>
        </div>
      </div> 
      );
  }
  
}

export default App;
