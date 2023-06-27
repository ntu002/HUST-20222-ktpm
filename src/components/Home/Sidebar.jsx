import Styles from "./Sidebar.module.css";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Sidebar() {
    
    //handleClick(event){
    //    this.setState({
    //        value: event.target.id,
    //    })
    //}
    
    const [Target,setTarget] = useState("Home");
    const handleClick = (event) => {
        event.preventDefault();
        setTarget(event.Target.id);
        alert(event.Target.id);
    }
        return (
            <div class = {Styles.menu}>
                <label>Quản Lý Dân Cư</label>
                <ul>
                    <li><a id ="Home" /*onClick={handleClick}*/ >Trang Chủ</a></li>
                    <li ><a id = "Househole" onClick={handleClick} >
                    Quản Lý Hộ Khẩu</a> </li>
                    <li><a id = "People" /*onClick={this.handleClick}*/>Quản Lý Nhân Khẩu</a></li>
                    <li><a id = "Meeting" /*onClick={this.handleClick}*/>Quản Lý Cuộc Họp</a></li>
                    <li><a id = "account" /*onClick={this.handleClick}*/ >Tài Khoản</a></li>
                </ul>
            </div>
        )
    
   
}
export default Sidebar;