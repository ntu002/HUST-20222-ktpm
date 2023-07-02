import Styles from "./CovidForm.module.css";
function CovidForm({destroy}) {
    return ( 
        // <div>
        //     <p>CCCD/ CMTND</p>
        //     <p>Ten</p>
        //     <p>Nam sinh</p>
        //     <p>Gioi tinh</p>
        //     <p>Dia chi lien lac</p>
        //     <p>Trieu chung</p>
        //     <p>Trong vong 14 ngay co tiep xuc voi </p>
        //     <p>benh nen</p>
        // </div>

<div class={Styles.boundary}>
<div class={Styles.whiteBoundary}>
  <div class={Styles.header}>
    <p>Khai báo Covid</p>
    <button onClick={destroy}>Hủy</button>
  </div>
  <div class={Styles.main}>
    <div class={Styles.rowCenter}>
      <div class={Styles.column}>
        <label>CCCD/CMND</label>
        <input class={Styles.large} />
      </div>
      <div class={Styles.column}>
        <label>Họ và tên</label>
        <input class={Styles.large} />
      </div>
    </div>
    <div class={Styles.rowCenter}>
      <div class={Styles.column}>
        <label>Năm sinh</label>
        <input class={Styles.large} />
      </div>
      <div class={Styles.column}>
        <label>Giới tính</label>
        <input class={Styles.large} />
      </div>
    </div>
    <div class={Styles.line}>
        <label>Địa chỉ liên lạc</label>
        <input class={Styles.full} />
    </div>
    <div class={Styles.line}>
        <label>Triệu chứng</label>
        <select class={Styles.full}>
            <option>Sốt</option>
            <option>Ho</option>
            <option>Khó thở</option>
            <option>Viêm phổi</option>
            <option>Đau họng</option>
            <option>Sốt</option>
            <option>Mệt mỏi</option>
        </select>
    </div>
    <div class={Styles.line}>
        <label>Trong 14 ngày qua có tiếp xúc với</label>
        <select class={Styles.full}>
            <option>Người bệnh hoặc nghi ngờ, mắc bệnh covid 19</option>
            <option>Người từ nước ngoài có bệnh Covid 19</option>
            <option>Người có biểu hiện(sốt, ho, khó thở, viêm phổi)</option>
        </select>
    </div>
    <div class={Styles.checkdiv}>
       { <label class={Styles.label}>Bệnh nền</label>}
        <div class={Styles.check}>
            <label>Bệnh gan mãn tính</label><input type="checkbox" class={Styles.full}/>
        </div>
        <div class={Styles.check}>
            <label>Bệnh mãu mãn tính</label><input type="checkbox" class={Styles.full}/>
        </div>
        <div class={Styles.check}>
            <label>Bệnh phổi mãn tính</label><input type="checkbox" class={Styles.full}/>
        </div>
        <div class={Styles.check}>
            <label>Bệnh thận mãn tính</label><input type="checkbox" class={Styles.full}/>
        </div>
        <div class={Styles.check}>
            <label>Bệnh tim mạch</label><input type="checkbox" class={Styles.full}/>
        </div>
        <div class={Styles.check}>
            <label>Huyết áp cao</label><input type="checkbox" class={Styles.full}/>
        </div>
        <div class={Styles.check}>
            <label>Suy giảm miễn dịch</label><input type="checkbox" class={Styles.full}/>
        </div>
        <div class={Styles.check}>
            <label>Người nhận ghép tạng, tủy xương</label><input type="checkbox" class={Styles.full}/>
        </div>
        <div class={Styles.check}>
            <label>Tiểu đường</label><input type="checkbox" class={Styles.full}/>
        </div>
        <div class={Styles.check}>
            <label>Ung thư</label><input type="checkbox" class={Styles.full}/>
        </div>
        <div class={Styles.check}>
            <label>Trong thời gian thai kỳ</label><input type="checkbox" class={Styles.full}/>
        </div>
        {/* <input type="radio" class={Styles.full}></input>
        <input type="radio" class={Styles.full}></input>
        <input type="radio" class={Styles.full}></input> */}
      </div>
  </div>
  </div>
    <button class={Styles.btn} onClick={destroy}> Khai báo </button>
</div>
     );
}

export default CovidForm;