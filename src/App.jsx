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
import HouseHoldDescription from "./components/Household/HouseholdDescription";
import AddRelationship from "./components/Household/popup/AddRelationship";
import AddHouseHold from "./components/Household/AddHouseHold";
import EditHouseHold from "./components/Household/EditHouseHold";
import CovidForm from "./components/Home/CovidForm";
import { useState } from "react";
function App() {
  const [isLogin, setLogined] = useState(false);
  const [target, setTarget] = useState("HouseHold");
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
          {/* <HouseHoldDescription></HouseHoldDescription>           */}
          {/* {(target === "People") && <PeopleDashboard></PeopleDashboard>} */}
          {/* {(target === "HouseHold") && <HouseholdDashboard></HouseholdDashboard>} */}
          {/* <AddHouseHold></AddHouseHold> */}
          {/* <EditHouseHold></EditHouseHold> */}
          <CovidForm></CovidForm>
          </div>
        </div>
        <div class={Styles.left}>
          <Sidebar onClick = {SetTarget}></Sidebar>
        </div>
      </div> 
      );
  }
  
}

export default App;
