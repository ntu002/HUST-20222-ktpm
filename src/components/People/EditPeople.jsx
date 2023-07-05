import Styles from "./PeopleDescription.module.css";
import privateStyles from "./AddPeople.module.css";
import { useState, useEffect } from "react";
function EditPeople({destroy, targetId}) {
   let [people, setPeople] = useState(null);
     useEffect(() => {
       const ft = async() => {
         const response = await fetch('http://localhost:4000/api/cong_dan/'+targetId);

         let js = await response.json();
         console.log(js);
          setPeople(js);
         if(response.ok){
          // console.log(people[0].ho_ten
          //   );
          console.log(people);
         }
       }
       ft();
     },[]
     )
   
   
  // if(targetId != null)console.log(targetId);
  // let birth = new Date(people[0].ngay_sinh);
  return (
    <div>
    {/* {(people != null) && ( <div class={Styles.boundary}>
      <div class={Styles.header}>
        {(<h2>{people.ho_ten}</h2>)}
       <h2>{people[0].ho_ten}</h2>
        <button onClick={destroy}> Hủy</button>
      </div>
      <div class={Styles.main}>
        <div class={Styles.rowCenter}>
          <div class={Styles.column}>
            <label>Họ và tên</label>
            <input class={Styles.large} value= {(people != null)? people[0].ho_ten:""} />
          </div>
          <div class={Styles.column}>
            <label>Tên gọi khác (nếu có)</label>
            <input class={Styles.large} value={(people != null)? people[0].ho_ten_khac:""}/>
          </div>
        </div>
        <div class={Styles.rowLeft}>
          <div class={Styles.column}>
            <label>Ngày sinh</label>

            <input value={birth.getDay()+"/"+birth.getMonth()+"/"+birth.getFullYear()}/>
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
            <input class={Styles.large} value={(people != null)? people[0].CCCD:""}/>
          </div>
          <div class={Styles.column}>
            <label>Số hộ chiếu</label>
            <input class={Styles.large} value="Không có"/>
          </div>
        </div>
        <div class={Styles.rowCenter}>
          <div class={Styles.column}>
            <label>Quê quán</label>
            <input class={Styles.large} value="Xóm 1, Vĩnh Thanh, Đông Anh, Hà Nội"/>
          </div>
          <div class={Styles.column}>
            <label>Quốc tịch</label>
            <input class={Styles.small} value={(people != null)? people[0].quoc_tich:""}/>
          </div>
          <div class={Styles.column}>
            <label>Dân tộc</label>
            <input class={Styles.small} value={(people != null)? people[0].dan_toc:""}/>
          </div>
          <div class={Styles.column}>
            <label>Tôn giáo</label>
            <input class={Styles.smedium} value = "Không"/>
          </div>
        </div>
      
        <div class={Styles.rowCenter}>
          <div class={Styles.column}>
            <label>Trình độ học vấn</label>
            <input class={Styles.small} value = "12/12"/>
          </div>
          <div class={Styles.column}>
            <label>nghề nghiệp</label>
            <input class={Styles.medium} value={(people != null)? people[0].nghe_nghiep:""}/>
          </div>
          <div class={Styles.column}>
            <label>Nơi làm việc</label>
            <input class={Styles.large} value = "72 LandMark, Nam Từ Liêm, Hà Nội"/>
          </div>
        </div>
        <div class={Styles.rowLeft}>
          <button class={privateStyles.btn} onClick={destroy}>Xác nhận</button>
        </div>
      </div>
    </div>)} */}
    </div>
  );
}

export default EditPeople;
