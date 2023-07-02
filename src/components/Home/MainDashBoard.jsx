import Styles from "./MainDB.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState,useEffect } from "react";
import CovidForm from "./CovidForm";
function MainDashBoard() {

  // let [data,setData] = useState(null);
  // useEffect(() => {
  //   const ft = async() => {
  //     const response = await fetch('http://localhost:4000/api/info_ca_nhan/');
      
  //     let js = await response.json();
  //     if(response.ok){
  //       setData(js);
  //       console.log(data);
  //     }
  //   }
  //   ft();
  // },[]
  // )
  let [hideForm,setForm] = useState(true);
  let [hide,setHide] = useState(false);

  
  let unHide = () => {
    setForm(true);
    setHide(false);
  }

     let data = [
         {
          id_cong_dan: 1,
           ho_ten: "Hà Đức Tuấn",
           CCCD: "12345678910",
           type: "F1",
         },
       ];
      let addDeclare = () => {
        setForm(false);
        setHide(true);
      };
      let addHousehold = () => {
    
      };
      return (
        <div>
          {(!hideForm ) && <CovidForm destroy = {unHide}></CovidForm>}
          {(!hide) && (<div class={Styles.boundary}>
          <div class={Styles.header}>
            <p>Danh sách khai báo Covid</p>
    
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
              <button class={Styles.btn} onClick={addDeclare}>
                Thêm khai báo +{" "}
              </button>
            </div>
          </div>
          <div>
            <table class={Styles.table}>
              <tr>
                <th>STT </th>
                <th>Họ và Tên</th>
                <th>Thuộc diện</th>
                <th>BHYT</th>
                <th>Thao tác</th>
              </tr>
              {data != null && data.map((item) => (
                <tr>
                  <td>{item.id_cong_dan}</td>
                  <td>{item.ho_ten}</td>
                  <td>{item.CCCD}</td>
                  <td>{item.type} </td>
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
        </div>
        
        )}
</div>
      );
}

export default MainDashBoard;