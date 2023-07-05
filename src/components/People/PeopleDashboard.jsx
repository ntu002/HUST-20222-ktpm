import Styles from "./PDashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import AddPeople from "./AddPeople";
import EditPeople from "./EditPeople";
function PeopleDashboard() {
  let [hideForm,setForm] = useState(true);
  let [hide,setHide] = useState(false);
  let [data,setData] = useState(null);
  let [search,setSearch] = useState("");
  let [EditHide,setEdit] = useState(true);
  let [targetId,setTarget] = useState(-1);
  let [load, setLoad] = useState(1);
  let ft = async() => {
    const response = await fetch('http://localhost:4000/api/cong_dan/housingInfo');
    let js = await response.json();
    if(response.ok){
      setData(js);
      
      console.log(data);
    }
  }
    useEffect(() => {
      console.log(hide);
      if(hide === true){
        return;
      }
      ft();
    },[]
    )
    let del  = async(i) => {
      const response = await fetch('http://localhost:4000/api/cong_dan/' + i, {method: 'DELETE'});
      console.log(response);
      
      
      if(response.status == 200){
        ft();
      }
    }
  
  // let data = [
  //   {
  //     id_cong_dan: 1,
  //     ho_ten: "Hà Đức Tuấn",
  //     CCCD: "012345678910",
  //     gioi_tinh: "Nam",
  //     quoc_tich: "123 Đường A, quận B, huyện C, tỉnh D",
  //   },
  //   {
  //     id_cong_dan: 1,
  //     ho_ten: "Hà Đức Tuấn",
  //     CCCD: "012345678910",
  //     gioi_tinh: "Nam",
  //     quoc_tich: "123 Đường A, quận B, huyện C, tỉnh D",
  //   },
  //   {
  //     id_cong_dan: 1,
  //     ho_ten: "Hà Đức Tuấn",
  //     CCCD: "012345678910",
  //     gioi_tinh: "Nam",
  //     quoc_tich: "123 Đường A, quận B, huyện C, tỉnh D",
  //   },
  // ];

  // Add Form Controller
  let addPeople = () => {
    setForm(false);
    setHide(true);
  };
  
  let unHide = () => {
    setForm(true);
    setHide(false);
  }
  // Edit Form Controller
  let EditUnHide = (i) => {
    setEdit(false);
    setHide(true);
    setTarget(i);
    console.log("oke");
  }
  let Delete = (i) => {
    setTarget(i);
    del();
  }
  let EditHideSetting = () => {
    setEdit(true);
    setHide(false);
  }
  // Search Controller
  let SearchChange = () => {

  }
  let index = 0;
  return (
    <div>
      {(!hideForm ) && <AddPeople destroy = {unHide}></AddPeople>}
      {(!EditHide) && <EditPeople destroy = {EditHideSetting} targetId={targetId}></EditPeople>}
      {(!hide) && (      <div class={Styles.boundary}>
      <div class={Styles.header}>
        <p>Danh sách nhân khẩu</p>

        <div>
          <div class={Styles.searchbar}>
            <input
              class={Styles.search}
              type="search"
              placeholder=" Tìm kiếm"
              onChange={SearchChange}
            />
            <i class={Styles.icon}>
              <FontAwesomeIcon icon={faSearch} />
            </i>
          </div>
          <button class={Styles.btn} onClick={addPeople}>
            Thêm nhân khẩu +{" "}
          </button>
        </div>
      </div>
      <div class={Styles.main}>
        <table class={Styles.table}>
          <tr>
            <th>Id </th>
            <th>Họ tên</th>
            <th>Mã CMT/CCCD</th>
            <th>Giới tính</th>
            <th>Địa chỉ</th>
            <th>Thao tác</th>
          </tr>
          {data != null && data.map((item) => {
            index++;
            return(
            
            <tr>
              <td>{index}</td>
              <td>{item.ho_ten}</td>
              <td>{item.CCCD}</td>
              <td>{item.gioi_tinh}</td>
              <td>{(item.info_ho_khau.length == 0)? "vô gia cư":(item.info_ho_khau[0].nha[0].dia_chi)}</td>
              <td>
                <i class={Styles.font} onClick={(i) => EditUnHide(item.id_cong_dan)}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </i>
                &emsp;
                
                {(item.info_ho_khau.length == 0 || item.info_ho_khau[0].la_chu_ho == false) && <i class={Styles.font} onClick={(i) => del(item.id_cong_dan)}>
                              <FontAwesomeIcon icon={faTrashCan} />
                </i>}
              </td>
            </tr>
          )})}
        </table>
        <div class={Styles.chooseBox}>
          <div class={Styles.searchBySex}>
            <p>Giới tính</p>
            <select class="input" id="SoNha-start">
              <option value="" selected>
                Nữ
              </option>
              <option value="" selected>
                Nam
              </option>
            </select>
          </div>
          <div class={Styles.searchByAge}>
            <p>Độ tuổi</p>
            <span>Từ</span>
            <input type="number" />
            <FontAwesomeIcon icon={faArrowRight} />
            <input type="number" />
          </div>
          <div class={Styles.searchByBornYear}>
            <p>Năm sinh</p>
            <span>Từ</span>
            <input type="number" />
            <FontAwesomeIcon icon={faArrowRight} />
            <input type="number" />
          </div>
        </div>
      </div>
    </div>)}

    </div>
    
  );
}

export default PeopleDashboard;
