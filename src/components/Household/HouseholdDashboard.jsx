import Styles from "./HHDashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import AddHouseHold from "./AddHouseHold";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState,useEffect } from "react";
function HouseholdDashboard() {
  let [data,setData] = useState(null);
  let [hideForm,setForm] = useState(true);
  let [hide,setHide] = useState(false);
  useEffect(() => {
    const ft = async() => {
      const response = await fetch('http://localhost:4000/api/housing/ho_khau/');
      
      let js = await response.json();
      if(response.ok){
        setData(js);
        console.log(data);
      }
    }
    ft();
  },[]
  )
  
  let addHousehold = () => {
    setForm(false);
    setHide(true);
  };
  let unHide = () => {
    setForm(true);
    setHide(false);
  }
  return (
    
   <div>
  {(!hideForm ) && <AddHouseHold destroy = {unHide}></AddHouseHold>}
  
   {(!hide) && ( <div class={Styles.boundary}>
     
     <div class={Styles.header}> 
       <p>Danh sách hộ khẩu</p>

       <div>
         <div class={Styles.searchbar}>
           <input
             class={Styles.search}
             type="search"
             placeholder=" Tìm kiếm"
           />
           <i class={Styles.icon}>
             <FontAwesomeIcon icon={faSearch} />
           </i>
         </div>
         <button class={Styles.btn} onClick={addHousehold}>
           Thêm hộ khẩu +{" "}
         </button>
       </div>
     </div>
     <div>
       <table class={Styles.table}>
         <tr>
           <th>Mã hộ </th>
           <th>Chủ hộ</th>
           <th>Địa chỉ</th>
           <th>Thao tác</th>
         </tr>
         {data != null &&data.map((item) => (
           <tr>
             <td>{item.nha[0].id_nha}</td>
             <td>{item.cong_dan[0].ho_ten}</td>
             <td>{item.nha[0].dia_chi}</td>
             <td>
               <i class={Styles.font}>
                 <FontAwesomeIcon icon={faPenToSquare} />
               </i>
               &emsp;
               <i class={Styles.font}>
                 <FontAwesomeIcon icon={faTrashCan} />
               </i>
             </td>
           </tr>
         ))}
       </table>
     </div>
   </div>)}
    </div>
  );
}

export default HouseholdDashboard;
