
import { useState } from "react";
import "../../../Assets/css/PartnerSection.css";

import person1 from "../../../Assets/img/Avatar.png";
import person2 from "../../../Assets/img/Avatar.png";
import person3 from "../../../Assets/img/Avatar.png";

import avatar1 from "../../../Assets/img/Avatar.png";
import avatar2 from "../../../Assets/img/Avatar.png";
import avatar3 from "../../../Assets/img/Avatar.png";
import Video from "../../../Assets/img/Rectangle34625733.png";

// import quote from "../../../Assets/img/quote.png";

/* IMPORT LOGO */
import logo1 from "../../../Assets/img/Logo.png";
import logo2 from "../../../Assets/img/Logo.png";
import logo3 from "../../../Assets/img/Logo.png";
import logo4 from "../../../Assets/img/Logo.png";
import logo5 from "../../../Assets/img/Logo.png";
import logo6 from "../../../Assets/img/Logo.png";

function PartnerSection() {

  const [activeImage, setActiveImage] = useState(person1);

  return (<div>


    <section className="partner-section">

      {/* gradient wave */}
      <div className="partner-wave"></div>

      <div className="partner-container">

        {/* LEFT */}
        <div className="partner-left">

          <p className="partner-sub">• HỢP TÁC VỮNG BỀN</p>

          <p className="partner-text">
            Chúng tôi thực sự hứng khởi khi đồng hành cùng Ami&M bởi ở đây có
            một đội ngũ nhân sự không chỉ giàu kinh nghiệm trong lĩnh vực
            ngân hàng – tài chính mà quan trọng hơn là đầy nhiệt tâm với
            mong muốn đóng góp vào sự phát triển chung của quá trình giáo
            dục định hướng thế hệ trẻ.
          </p>

          <h4 className="partner-name">
            TS. Đinh Thanh Vân
          </h4>

          <p className="partner-role">
            Phó Tổng Giám Đốc Ngân hàng – Tiến sĩ Kinh tế
          </p>

          {/* avatars */}
          <div className="partner-avatars">

            <img
              src={avatar1}
              onClick={() => setActiveImage(person1)}
              alt=""
            />

            <img
              src={avatar2}
              onClick={() => setActiveImage(person2)}
              alt=""
            />

            <img
              src={avatar3}
              onClick={() => setActiveImage(person3)}
              alt=""
            />

          </div>

        </div>


        {/* RIGHT */}
        <div className="partner-right">

          <div className="partner-image">
            <img src={activeImage} alt="" />
          </div>

          <div className="partner-quote">
            {/*<img src={quote} alt="" />*/}
          </div>

        </div>

      </div>




    </section>
          {/* PARTNER LOGOS */}
          <div className="partner-logo-wrapper">

              <div className="partner-logo-title">
                  <p>• ĐỐI TÁC TIÊU BIỂU</p>
                  <h3>ĐỒNG HÀNH CÙNG AMI&M</h3>
              </div>

              <div className="partner-logos">
                  <div className="partner-logo-track">

                      <img src={logo1} alt="" />
                      <img src={logo2} alt="" />
                      <img src={logo3} alt="" />
                      <img src={logo4} alt="" />
                      <img src={logo5} alt="" />
                      <img src={logo6} alt="" />

                      {/* duplicate để chạy mượt */}
                      <img src={logo1} alt="" />
                      <img src={logo2} alt="" />
                      <img src={logo3} alt="" />
                      <img src={logo4} alt="" />
                      <img src={logo5} alt="" />
                      <img src={logo6} alt="" />

                  </div>
              </div>

          </div>
      <img className='video_list' src={Video} />
      </div>
  );
}

export default PartnerSection;

