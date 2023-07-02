import Styles from "./HHDashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
function HouseholdDashboard() {
  let data = [
    {
      maho: 1,
      chuho: "Hà Đức Tuấn",
      diachi: "123 đường A, quận B, huyện C, tỉnh D",
    },
  ];
  let addHousehold = () => {};
  return (
    <div class={Styles.boundary}>
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
          {data.map((item) => (
            <tr>
              <td>{item.maho}</td>
              <td>{item.chuho}</td>
              <td>{item.diachi}</td>
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
  );
}

export default HouseholdDashboard;
