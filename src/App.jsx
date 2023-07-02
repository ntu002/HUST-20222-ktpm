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
function App() {
  return(
  <div>
    <div class={Styles.right}>
      <Topbar></Topbar>
      <div class={Styles.main}>
        <PeopleDashboard></PeopleDashboard>
      </div>
    </div>
    <div class={Styles.left}>
      <Sidebar></Sidebar>
    </div>
  </div> 
  );
}

export default App;
