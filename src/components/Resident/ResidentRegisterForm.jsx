import Styles from "./ResidentRegisterForm.module.css";
function ResidentRegisterForm() {
  return (
    <div class={Styles.boundary}>
      <div class={Styles.header}>
        <p>Đăng ký tạm trú</p>
        <button>Hủy</button>
      </div>
      <div class={Styles.main}>
        <div class={Styles.rowCenter}>
          <div class={Styles.column}>
            <label>Họ và tên</label>
            <input class={Styles.large} />
          </div>
          <div class={Styles.column}>
            <label>Số CMND/CCCD</label>
            <input class={Styles.large} />
          </div>
        </div>
        <div class={Styles.line}>
          <label>Địa chỉ đăng ký tạm trú</label>
          <input />
        </div>
        <div class={Styles.rowCenter}>
          <div class={Styles.column}>
            <label>Từ ngày</label>
            <input class={Styles.large} />
          </div>
          <div class={Styles.column}>
            <label>Đến ngày</label>
            <input class={Styles.large} />
          </div>
        </div>
        <div class={Styles.line}>
          <label>Lý do</label>
          <textarea></textarea>
        </div>
      </div>
      <button class={Styles.btn}>Xác nhận</button>
    </div>
  );
}

export default ResidentRegisterForm;
