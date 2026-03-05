import { useState } from "react";
import "../../../Assets/css/Detail.css";

import detail_one from "../../../Assets/img/detail_one.png";
import detail_two from "../../../Assets/img/detail_two.png";
import defaultImg from "../../../Assets/img/logo-blue.svg";
import detailbackground from "../../../Assets/img/detailbackground.png";

function Investment() {

    const [image, setImage] = useState(detail_one);
    const [active, setActive] = useState("training");
    return (
        <section
            className="investment"
            style={{ backgroundImage: `url(${detailbackground})` }}
        >

            {/* LEFT */}
            <div className="investment-left">

                <p className="title-sub">• HỆ SINH THÁI AMI&M</p>

                <h2 className="title">
                    Ami&M là đối tác tư vấn –
                    <span className="red"> đầu tư bền vững</span>,
                    phát triển dịch vụ cao cấp
                    và <span className="blue">nâng tầm giáo dục trải nghiệm.</span>
                </h2>

                <p className="desc">
                    Với hệ sinh thái tối ưu, Ami&M truyền cảm hứng kiến tạo
                    sự thịnh vượng đích thực cho những Người đồng hành
                    và vun đắp di sản xứng tầm cho thế hệ tương lai.
                </p>

                <div className="left-image">
                    <img src={detail_two} alt="" />
                </div>

            </div>


            {/* RIGHT */}
            <div className="investment-right">

                <div className="main-circle">

                    <img src={image} alt="" />

                    <div className="circle-content">

                        <img className="circle-logo" src={defaultImg} />

                        <h3>Ami&M</h3>

                        <p className="circle-sub">Training</p>

                        <p className="circle-desc">
                            CUNG CẤP DỊCH VỤ <br/>
                            QUẢN LÝ & KHAI THÁC TÀI SẢN, <br/>
                            CHUỖI CƠ SỞ LƯU TRÚ.
                        </p>

                        <button className="circle-btn-more">
                            Tìm hiểu thêm →
                        </button>

                    </div>

                </div>

                {/* circle logo */}
                <div className="circle-group">

                    <div
                        className={`circle-btn ${active === "training" ? "active" : ""}`}
                        onClick={() => {
                            setImage(detail_one);
                            setActive("training");
                        }}
                    >
                        <img src={defaultImg} alt="" />
                        <div>
                            <p className="text-btn-detail">Training</p>
                        </div>
                    </div>

                    <div
                        className={`circle-btn ${active === "investment" ? "active" : ""}`}
                        onClick={() => {
                            setImage(detail_two);
                            setActive("investment");
                        }}
                    >
                        <img src={defaultImg} alt="" />
                        <div>
                            <p className="text-btn-detail">Investment</p>
                        </div>
                    </div>

                    <div
                        className={`circle-btn ${active === "wealth" ? "active" : ""}`}
                        onClick={() => {
                            setImage(detail_one);
                            setActive("wealth");
                        }}
                    >
                        <img src={defaultImg} alt="" />
                        <div>
                            <p className="text-btn-detail">Wealth Management</p>
                        </div>
                    </div>

                    <div
                        className={`circle-btn ${active === "consulting" ? "active" : ""}`}
                        onClick={() => {
                            setImage(detail_two);
                            setActive("consulting");
                        }}
                    >
                        <img src={defaultImg} alt="" />
                        <div>
                            <p className="text-btn-detail">Consulting</p>
                        </div>
                    </div>

                    <div
                        className={`circle-btn ${active === "hospitality" ? "active" : ""}`}
                        onClick={() => {
                            setImage(detail_one);
                            setActive("hospitality");
                        }}
                    >
                        <img src={defaultImg} alt="" />
                        <div>
                            <p className="text-btn-detail">Hospitality</p>
                        </div>
                    </div>

                </div>


            </div>

        </section>
    );
}

export default Investment;