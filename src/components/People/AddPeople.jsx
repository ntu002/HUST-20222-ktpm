import Styles from "./PeopleDescription.module.css";
import privateStyles from "./AddPeople.module.css";
function AddPeople({destroy}) {
  return (
    <div class={Styles.boundary}>
      <div class={privateStyles.header}>
        <p>Thêm nhân khẩu mới</p>
        <button onClick={destroy}>Hủy</button>
      </div>
      <div class={Styles.main}>
        <div class={Styles.rowCenter}>
          <div class={Styles.column}>
            <label>Họ và tên</label>
            <input class={Styles.large} />
          </div>
          <div class={Styles.column}>
            <label>Tên gọi khác (nếu có)</label>
            <input class={Styles.large} />
          </div>
        </div>
        <div class={Styles.rowLeft}>
          <div class={Styles.column}>
            <label>Ngày sinh</label>
            <input />
          </div>
          <div class={Styles.sex}>
            <label>Giới tính</label>
            <input type="radio" class={Styles.full} /> <p>Nam</p>
            <input type="radio" class={Styles.full} /> <p>Nữ</p>
          </div>
        </div>
        <div class={Styles.rowCenter}>
          <div class={Styles.column}>
            <label>Số CMND/CCCD</label>
            <input class={Styles.large} />
          </div>
        </div>
        <div class={Styles.rowCenter}>
          <div class={Styles.column}>
            <label>Quốc tịch</label>
            <input class={Styles.large} />
          </div>
          <div class={Styles.column}>
            <label>Dân tộc</label>
            <input class={Styles.large} />
          </div>
        </div>
        <div class={Styles.line}>
          <label>Địa chỉ hiện tại</label>
          <input class={Styles.full} />
        </div>
        <div class={Styles.rowCenter}>
          <div class={Styles.column}>
            <label>nghề nghiệp</label>
            <input class={Styles.large} />
          </div>
          <div class={Styles.column}>
            <label>Nơi làm việc</label>
            <input class={Styles.large} />
          </div>
        </div>
        <div class={Styles.rowLeft}>
          <button class={privateStyles.btn} onClick={destroy}>Xác nhận</button>
        </div>
      </div>
    </div>
  );
}

export default AddPeople;
