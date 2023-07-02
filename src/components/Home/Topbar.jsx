import Styles from "./Topbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faBell } from "@fortawesome/free-solid-svg-icons";
function Topbar({name}){
    return ( 
        <div class={Styles.topbar}>
            <div class={Styles.menu}>
                <i><FontAwesomeIcon icon={faBell} /></i>
                <i><FontAwesomeIcon icon={faEnvelope} /></i>
                <i><FontAwesomeIcon icon={faUser} /></i>
                <span>{name}</span>
            </div>
        </div>
     );
}

export default Topbar;