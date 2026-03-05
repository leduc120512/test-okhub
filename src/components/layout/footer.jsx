import "../../Assets/css/Footer.css";
 import logo from "../../Assets/img/Logo.png";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* LEFT */}
                <div className="footer-left">

                    {/* LOGO */}
                    <div className="footer-logo">
                         <img src={logo} alt="" />

                    </div>

                    <p className="footer-slogan">
                        Creating true prosperity together
                    </p>

                    {/* SUBSCRIBE */}
                    <div className="footer-subscribe">

                        <p className="subscribe-title">
                            ĐĂNG KÝ NHẬN THÔNG TIN TỪ AMI&M
                        </p>

                        <div className="subscribe-box">

                            <input
                                type="email"
                                placeholder="Nhập Email của bạn"
                            />

                            <button>Đăng ký</button>

                        </div>

                    </div>

                </div>


                {/* MENU */}
                <div className="footer-col">

                    <h4>KHÁM PHÁ</h4>

                    <ul>
                        <li>Trang chủ</li>
                        <li>Giới thiệu</li>
                        <li>Từ điển Ami&M</li>
                        <li>Tuyển dụng</li>
                        <li>Tin tức</li>
                    </ul>

                </div>


                {/* SOCIAL */}
                <div className="footer-col">

                    <h4>MẠNG XÃ HỘI</h4>

                    <ul>
                        <li>LinkedIn</li>
                        <li>Facebook</li>
                        <li>Youtube</li>
                    </ul>

                </div>


                {/* CONTACT */}
                <div className="footer-col">

                    <h4>LIÊN HỆ</h4>

                    <ul className="footer-contact">
                        <li>
                            <span>Địa chỉ</span>
                            Số 14 phố Đỗ Hành, phường Nguyễn Du,
                            quận Hai Bà Trưng, thành phố Hà Nội
                        </li>

                        <li>
                            <span>Điện thoại</span>
                            (+84) 243 201 2889
                        </li>

                        <li>
                            <span>Email</span>
                            info@amigroup.com.vn
                        </li>

                        <li>
                            <span>Website</span>
                            amigroup.com.vn
                        </li>

                    </ul>

                </div>

            </div>


            {/* BOTTOM */}
            <div className="footer-bottom">

                <p>Copyright 2024 @Ami&M. All rights reserved.</p>

                <p>Design by OKHUB Agency.</p>

            </div>

        </footer>
    );
}

export default Footer;