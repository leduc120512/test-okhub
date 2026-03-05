
import "../../Assets/css/MenuOverlay.css";

import img1 from "../../Assets/img/IMGMENUOUTLINE.jpg";
import img2 from "../../Assets/img/MENOUTLINE2.webp";
import logo from "../../Assets/img/Logo.png";

function MenuOverlay({ isOpen, onClose }) {
    return (
        <div className={`menu-overlay ${isOpen ? "open" : ""}`}>

            {/* TOP */}
            <div className="menu-header">

                <div className="menu-logo_ist">
                     <img src={logo} alt="" />

                </div>

                <div className="menu-close" onClick={onClose}>
                    ✕
                </div>

            </div>


            <div className="menu-container">

                {/* LEFT */}
                <div className="menu-left">

                    <p className="menu-small">MENU</p>

                    <ul className="menu-list">

                        <li>
                            <span className="menu-number">01/</span>
                            <span className="menu-text">Về Chúng Tôi</span>
                        </li>

                        <li>
                            <span className="menu-number">02/</span>
                            <span className="menu-text">Từ Điển Ami</span>
                        </li>

                        <li>
                            <span className="menu-number">03/</span>
                            <span className="menu-text">Cơ Hội Nghề Nghiệp</span>
                        </li>

                        <li>
                            <span className="menu-number">04/</span>
                            <span className="menu-text">Tin Tức</span>
                        </li>

                    </ul>


                    {/* CONTACT */}
                    <div className="menu-contact">

                        <p>📍 Địa chỉ: Số 14 phố Đỗ Hành, phường Nguyễn Du,
                            quận Hai Bà Trưng, thành phố Hà Nội
                        </p>

                        <p>📞 Liên hệ hotline: (+84) 243 201 2889</p>

                        <p>✉ Email: info@amigroup.com.vn</p>

                    </div>


                    <div className="menu-lang">
                        <span className="active">VIE</span>
                        <span>ENG</span>
                    </div>

                </div>


                {/* RIGHT */}
                <div className="menu-right">

                    <div className="menu-circle-btn">
                        <span>↗</span>
                        <p>Kết Nối Với<br/>Ami&M</p>
                    </div>



                </div>

            </div>

        </div>
    );
}

export default MenuOverlay;

