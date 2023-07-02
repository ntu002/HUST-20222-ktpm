import Styles from "./PDashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
function PeopleDashboard() {
  let [data,setData] = useState(null);
  useEffect(() => {
    const ft = async() => {
      const response = await fetch('http://localhost:4000/api/cong_dan/');
      
      let js = await response.json();
      if(response.ok){
        setData(js);
        console.log(data);
      }
    }
    ft();
  },[]
  )
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
  let addPeople = () => {};

  return (
    <div class={Styles.boundary}>
      <div class={Styles.header}>
        <p>Danh sách nhân khẩu</p>

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
          {data != null && data.map((item) => (
            <tr>
              <td>{item.id_cong_dan}</td>
              <td>{item.ho_ten}</td>
              <td>{item.CCCD}</td>
              <td>{item.gioi_tinh}</td>
              <td>{item.quoc_tich}</td>
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
    </div>
  );
}

export default PeopleDashboard;
