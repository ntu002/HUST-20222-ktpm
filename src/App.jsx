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
import AddHouseHold from "./components/Household/AddHouseHold";
=======

>>>>>>> 3a8e7d94fdd15529b6fe1550fb9de5307ef6b270
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
<<<<<<< HEAD
            <AddHouseHold></AddHouseHold>
=======
          
          {(target === "People") && <PeopleDashboard></PeopleDashboard>}
          {(target === "HouseHold") && <HouseholdDashboard></HouseholdDashboard>}
>>>>>>> 3a8e7d94fdd15529b6fe1550fb9de5307ef6b270
          </div>
        </div>
        <div class={Styles.left}>
          <Sidebar onClick = {SetTarget}></Sidebar>
        </div>
      </div> 
      );
  }
<<<<<<< HEAD
=======
  
>>>>>>> 3a8e7d94fdd15529b6fe1550fb9de5307ef6b270
}

export default App;
