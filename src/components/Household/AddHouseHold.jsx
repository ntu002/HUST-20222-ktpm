import Styles from "./HouseHoldDescription.module.css";
import privateStyles from "./AddHouseHold.module.css";
function AddHouseHold({destroy}) {
    let members = [
        {
          name: "Hà Đức Tuấn",
          cccd:"12345678910",
          birth: "10/2/2001",
          relationship: "Con",
        },
        {
          name: "Hà Thị Lan",
          cccd:"12345678910",
          birth: "20/2/2004",
          relationship: "Con",
        },
        {
          name: "Nguyễn Thị An",
          cccd:"12345678910",
          birth: "10/10/1975",
          relationship: "Vợ",
        },
        
      ];
  return (
    <div class={Styles.boundary}>
    <div class={Styles.whiteBoundary}>
      <div class={privateStyles.header}>
        <p>Thêm hộ khẩu mới</p>
        <button onClick={destroy}>Hủy</button>
      </div>
      <div class={Styles.main}>
        <div class={Styles.rowCenter}>
          <div class={Styles.column}>
            <label>Mã hộ khẩu</label>
            <input class={Styles.large} />
          </div>
          <div class={Styles.column}>
            <label>Địa chỉ</label>
            <input class={Styles.large} />
          </div>
        </div>
        <div class={Styles.rowCenter}>
          <div class={Styles.column}>
            <label>Họ tên chủ hộ</label>
            <input class={Styles.large} />
          </div>
          <div class={Styles.column}>
            <label>Số CMND/CCCD của chủ hộ</label>
            <input class={Styles.large} />
          </div>
        </div>
      </div>
      </div>
      <div class = {Styles.member}>
        <div class = {Styles.header}>
          <h2>Các thành viên trong hộ</h2>
        </div>
        <table class={Styles.table}>
          <tr>
            <th>Họ và tên </th>
            <th>CCCD</th>
            <th>Ngày sinh</th>
            <th>Quan hệ với chủ hộ </th>
          </tr>
          {members.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.cccd}</td>
              <td>{item.birth}</td>
              <td>{item.relationship}</td>
            </tr>
          ))}
        </table>
        <button class={privateStyles.btn}>Thêm thành viên</button>
        </div>  
        <button class={privateStyles.btn} onClick={destroy}> Thêm </button>
    </div>
  );
}

export default AddHouseHold;
