import Styles from "./HouseHoldDescription.module.css";
import privateStyles from "./AddHouseHold.module.css";
function AddHouseHold() {
  return (
    <div class={Styles.boundary}>
    <div class={Styles.whiteBoundary}>
      <div class={privateStyles.header}>
        <p>Thêm hộ khẩu mới</p>
        <button>Hủy</button>
      </div>
      <div class={Styles.main}>
        <div class={Styles.rowCenter}>
          <div class={Styles.column}>
            <label>Mã hộ khẩu</label>
            <input class={Styles.large} />
          </div>
          <div class={Styles.column}>
            <label>Mã khu vực</label>
            <input class={Styles.large} />
          </div>
        </div>
        <div class={Styles.rowLeft}>
          <div class={Styles.column}>
            <label>Địa chỉ</label>
            <input class={Styles.large}/>
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
    </div>
  );
}

export default AddHouseHold;
