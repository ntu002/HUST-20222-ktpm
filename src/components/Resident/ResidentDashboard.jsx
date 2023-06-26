import Styles from "./ResidentDashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
function ResidentDashboard() {
  let data = [{
    id:1,
    hoten: "Hà Đức Tuấn",
    cccd: "012345678910",
    gioitinh: "Nam",
    diachi: "123 đường A, quận B, huyện C, tỉnh D",
    tungay: "10-10-2021",
    denngay: "10-11-2021"
  }]
  let addResident = ()=>{

  }
  
  return (
    <div class={Styles.boundary}>
      <div class={Styles.header}>
        <p>Danh sách nhân khẩu tạm trú</p>
        
        <div>
          <div class={Styles.searchbar}>
            <input class={Styles.search} type="search" placeholder=" Tìm kiếm" />
            <i class={Styles.icon}><FontAwesomeIcon icon={faSearch} /></i>
          </div>
          <button class={Styles.btn} onClick={addResident}>Thêm nhân khẩu tạm trú + </button>
        </div>
      </div>
      <div>
        <table class={Styles.table}>
          <tr>
            <th>Id</th>
            <th>Họ tên</th>
            <th>Mã CMT/CCCD</th>
            <th>Giới tính</th>
            <th>Địa chỉ</th>
            <th>Từ ngày</th>
            <th>Đến ngày</th>
          </tr>
          {
            data.map(item=>(
              <tr>
            <td>{item.id}</td>
            <td>{item.hoten}</td>
            <td>{item.cccd}</td>
            <td>{item.gioitinh}</td>
            <td>{item.diachi}</td>
            <td>{item.tungay}</td>
            <td>{item.denngay}</td>
          </tr>
            ))
          }
        </table>
      </div>
    </div>
  );
}

export default ResidentDashboard;
