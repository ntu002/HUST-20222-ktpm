import Styles from "./Sidebar.module.css";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faGear, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import logo from "./logo.png";
function Sidebar({onClick,role}) {
    //handleClick(event){
    //    this.setState({
    //        value: event.target.id,
    //    })
    //}
    
    console.log(onClick);
    
        return (
            <div class = {Styles.menu}>
                <div class={Styles.brand}>
                    <img src={logo} alt="Logo" />
                    <label>Quản Lý Dân Cư</label>
                </div>
                <ul>
                {(role === "CovidKhaiBao"||role === "Admin") && <li><a id ="Home" onClick={() => onClick("Home")} ><i><FontAwesomeIcon icon={faHouse} /></i><span> Trang Chủ </span></a></li>}
          {(role === "Admin") && <li ><a id = "HouseHold" onClick={() => onClick("HouseHold")} ><i><FontAwesomeIcon icon={faPeopleGroup} /></i>
                    <span>Quản Lý Hộ Khẩu</span></a> </li>}
          {(role === "Admin") &&<li><a id = "People" onClick={() => onClick("People")}><i><FontAwesomeIcon icon={faPerson} /></i><span>Quản Lý Nhân Khẩu</span></a></li>}
         
          {(role === "CovidKhaiBao"|| role === "Admin") &&<li><a id = "account" onClick={() => onClick("account")} ><i><FontAwesomeIcon icon={faGear} /></i><span>Tài Khoản</span></a></li>} 
                    
                    
                    
                    
                    
                </ul>
            </div>
        )
    
   
}
export default Sidebar;
