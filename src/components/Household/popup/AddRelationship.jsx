import Styles from "./AddRelationship.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan, faPenToSquare, faAdd } from "@fortawesome/free-solid-svg-icons";
function AddRelationship() {
  let data = [
    {
      id: 1,
      hoten: "Hà Đức Tuấn",
      cccd: "012345678910",
      gioitinh: "Nam",
      diachi: "123 Đường A, quận B, huyện C, tỉnh D",
    },
    {
      id: 1,
      hoten: "Hà Đức Tuấn",
      cccd: "012345678910",
      gioitinh: "Nam",
      diachi: "123 Đường A, quận B, huyện C, tỉnh D",
    },
    {
      id: 1,
      hoten: "Hà Đức Tuấn",
      cccd: "012345678910",
      gioitinh: "Nam",
      diachi: "123 Đường A, quận B, huyện C, tỉnh D",
    },
  ];
  let addPeople = () => {};
  return (
    <div class={Styles.boundary}>
      <div class={Styles.header}>
        <p>Thêm thành viên</p>

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
            Xác nhận{" "}
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
            <th>Quan hệ</th>
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.hoten}</td>
              <td>{item.cccd}</td>
              <td>{item.gioitinh}</td>
              <td>{item.diachi}</td>
              <td>
                <select>
                    <option>Không</option>
                    <option>Bố/Mẹ</option>
                    <option>Vợ/Chồng</option>
                    <option>Con</option>
                </select>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default AddRelationship;
