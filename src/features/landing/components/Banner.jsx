// Header.jsx
import { useEffect, useState } from "react";
import "../../../Assets/css/Banner.css";
import Logo from "../../../Assets/img/Logo.png";
import Bg from "../../../Assets/img/banner.png";
import Bnmobile from "../../../Assets/img/ImagebANNER.png"; // giữ nguyên nếu bạn dùng
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";

// Import menu từ file riêng (sửa đường dẫn cho đúng với project của bạn)
import MobileMenu from "../../../components/common/HeaderMenu";

export default function Header() {
    const [scrollY, setScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Ngăn scroll body khi menu mobile mở
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const scale = Math.max(0.5, 1 - scrollY / 700);
    const opacity = Math.max(0.3, 1 - scrollY / 450);
    const logoStyle = {
        transform: `scale(${scale})`,
        opacity,
    };

    return (
        <>
            <div
                className="Banner"
                style={{ backgroundImage: `url(${Bg})` }}  // giữ nguyên như cũ
            >
                <div className="header-top">
                    <img src={Logo} className="logo" style={logoStyle} alt="Logo" />

                    <div className="header-right">
                        {/* Mobile - giữ nguyên class và cấu trúc cũ */}
                        <div className="mobile-menu">
                            <Button
                                className="menu-btn mobile"
                                shape="circle"
                                icon={menuOpen ? <CloseOutlined /> : <MenuOutlined />}
                                onClick={() => setMenuOpen(!menuOpen)}
                            />
                        </div>

                        {/* Desktop - giữ nguyên class và cấu trúc cũ */}
                        <div className="desktop-menu">
                            <div className="lang">
                                <button className="lang-btn active">VIE</button>
                                <button className="lang-btn">ENG</button>
                            </div>
                            <Button
                                className="menu-btn desktop"
                                shape="circle"
                                icon={<MenuOutlined />}
                                onClick={() => setMenuOpen(!menuOpen)}
                                // Nếu desktop cũng cần menu full → thêm onClick={() => setMenuOpen(true)}
                                // Nhưng theo code cũ thì desktop không toggle menu → để nguyên không onClick
                            />
                        </div>
                    </div>
                </div>

                <div className="hero-content">
                    <h1>
                        <span className="line line1">ĐỒNG HÀNH</span>
                        <br />
                        <span className="line line2">
                            KHỞI <span className="highlight">THỊNH VƯỢNG</span>
                        </span>
                    </h1>
                </div>
            </div>

            {/* Chỉ render menu full khi mở (thường chỉ dùng cho mobile) */}
            <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
}