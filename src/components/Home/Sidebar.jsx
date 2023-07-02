import Styles from "./Sidebar.module.css";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faGear, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import logo from "./logo.png";
function Sidebar() {
<<<<<<< Updated upstream
    
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
                <div class={Styles.brand}>
                    <img src={logo} alt="Logo" />
                    <label>Quản Lý Dân Cư</label>
                </div>
                <ul>
                    <li><a id ="Home" /*onClick={handleClick}*/ ><i><FontAwesomeIcon icon={faHouse} /></i><span> Trang Chủ </span></a></li>
                    <li ><a id = "Househole" onClick={handleClick} ><i><FontAwesomeIcon icon={faPeopleGroup} /></i>
                    <span>Quản Lý Hộ Khẩu</span></a> </li>
                    <li><a id = "People" /*onClick={this.handleClick}*/><i><FontAwesomeIcon icon={faPerson} /></i><span>Quản Lý Nhân Khẩu</span></a></li>
                    <li><a id = "Meeting" /*onClick={this.handleClick}*/><i><FontAwesomeIcon icon={faCalendar} /></i><span>Quản Lý Cuộc Họp</span></a></li>
                    <li><a id = "account" /*onClick={this.handleClick}*/ ><i><FontAwesomeIcon icon={faGear} /></i><span>Tài Khoản</span></a></li>
                </ul>
            </div>
        )
    
   
=======
  //handleClick(event){
  //    this.setState({
  //        value: event.target.id,
  //    })
  //}

  const [Target, setTarget] = useState("Home");
  const handleClick = (event) => {
    event.preventDefault();
    setTarget(event.Target.id);
    alert(event.Target.id);
  };
  return (
    <div class={Styles.menu}>
      <label>Quản Lý Dân Cư</label>
      <ul>
        <li>
          <a id="Home" /*onClick={handleClick}*/>Trang Chủ</a>
        </li>
        <li>
          <a id="Househole" onClick={handleClick}>
            Quản Lý Hộ Khẩu
          </a>{" "}
        </li>
        <li>
          <a id="People" /*onClick={this.handleClick}*/>Quản Lý Nhân Khẩu</a>
        </li>
        <li>
          <a id="Meeting" /*onClick={this.handleClick}*/>Quản Lý Cuộc Họp</a>
        </li>
        <li>
          <a id="account" /*onClick={this.handleClick}*/>Tài Khoản</a>
        </li>
      </ul>
    </div>
  );
>>>>>>> Stashed changes
}
export default Sidebar;
