import Styles from "./MainDB.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
function MainDashBoard() {
    let data = [
        {
          stt: 1,
          name: "Hà Đức Tuấn",
          cccd: "12345678910",
          type: "F1",
        },
      ];
      let addDeclare = () => {};
    
      return (
        <div class={Styles.boundary}>
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
                <th>CCCD</th>
                <th>Phân loại</th>
                <th>Thao tác</th>
              </tr>
              {data.map((item) => (
                <tr>
                  <td>{item.stt}</td>
                  <td>{item.name}</td>
                  <td>{item.cccd}</td>
                  <td>{item.type}</td>
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

export default MainDashBoard;