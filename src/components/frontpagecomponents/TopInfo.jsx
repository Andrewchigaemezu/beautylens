import style from "./TopInfo.module.css";
import locationIcon from "../../assets/icon/location.svg";
import mailIcon from "../../assets/icon/mail.svg";
import phoneIcon from "../../assets/icon/phone.svg";

import P16 from "../../utilities/P16";

function TopInfo() {
  return (
    <div className={style.topinfo}>
      <ul className={style.topinfo_cont}>
        <li>
          <img src={locationIcon} alt="location icon" />
          <P16>No 1 Ogboli road inland town Onitsha</P16>
        </li>
        <li>
          <img src={mailIcon} alt="mail icon" />
          <P16>beautylensbyjoyspark@gmail.com</P16>
        </li>
        <li>
          <img src={phoneIcon} alt="phone icon" />
          <P16>+234 8143875001</P16>
        </li>
      </ul>
    </div>
  );
}

export default TopInfo;
