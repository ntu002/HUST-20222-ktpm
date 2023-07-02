import Styles from "./Sidebar.module.css";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faGear, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import logo from "./logo.png";
<<<<<<< HEAD
function Sidebar() {    
    const [Target,setTarget] = useState("Home");
    const handleClick = (event) => {
        event.preventDefault();
        setTarget(event.Target.id);
        alert(event.Target.id);
    }
=======
function Sidebar({onClick}) {
    //handleClick(event){
    //    this.setState({
    //        value: event.target.id,
    //    })
    //}
    
    console.log(onClick);
    
>>>>>>> 3a8e7d94fdd15529b6fe1550fb9de5307ef6b270
        return (
            <div class = {Styles.menu}>
                <div class={Styles.brand}>
                    <img src={logo} alt="Logo" />
                    <label>Quản Lý Dân Cư</label>
                </div>
                <ul>
                    <li><a id ="Home" onClick={() => onClick("Home")} ><i><FontAwesomeIcon icon={faHouse} /></i><span> Trang Chủ </span></a></li>
                    <li ><a id = "HouseHold" onClick={() => onClick("HouseHold")} ><i><FontAwesomeIcon icon={faPeopleGroup} /></i>
                    <span>Quản Lý Hộ Khẩu</span></a> </li>
                    <li><a id = "People" onClick={() => onClick("People")}><i><FontAwesomeIcon icon={faPerson} /></i><span>Quản Lý Nhân Khẩu</span></a></li>
                    <li><a id = "Meeting" onClick={() => onClick("Meeting")}><i><FontAwesomeIcon icon={faCalendar} /></i><span>Quản Lý Cuộc Họp</span></a></li>
                    <li><a id = "account" onClick={() => onClick("account")} ><i><FontAwesomeIcon icon={faGear} /></i><span>Tài Khoản</span></a></li>
                </ul>
            </div>
        )
    
   
}
export default Sidebar;
