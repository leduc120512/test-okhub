import { useEffect, useState } from "react";
import "../../../Assets/css/Banner.css";
import Logo from "../../../Assets/img/Logo.png";
import Bg from "../../../Assets/img/banner.png";
import Bnmobile from "../../../Assets/img/ImagebANNER.png"; // giữ nguyên nếu bạn dùng
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import MenuOverlay from "../../../components/common/HeaderMenu";
export default function Header() {
    const [scrollY, setScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        // cleanup khi component unmount
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const scale = Math.max(0.5, 1 - scrollY / 700);
    const opacity = Math.max(0.3, 1 - scrollY / 450);

    return (
        <>
            <div className="Banner" style={{ backgroundImage: `url(${Bg})` }}>
                <div className="header-top">
                    <img
                        src={Logo}
                        className="logo"
                        style={{ transform: `scale(${scale})`, opacity }}
                        alt="Logo"
                    />
                    <div className="header-right">
                        {/* Mobile */}
                        <div className="mobile-menu">
                            <Button
                                className="menu-btn mobile"
                                shape="circle"
                                icon={menuOpen ? <CloseOutlined /> : <MenuOutlined />}
                                onClick={() => setMenuOpen(!menuOpen)}
                            />
                        </div>

                        {/* Desktop */}
                        <div className="desktop-menu">
                            <div className="lang">
                                <button className="lang-btn active">VIE</button>
                                <button className="lang-btn">ENG</button>
                            </div>

                            {/* Quan trọng: thêm onClick để toggle menu */}
                            <div onClick={() => setMenuOpen(true)} className="dk_menu">
                                <p> Menu </p>
                                <Button
                                    className="btn_suggest"
                                    shape="circle"
                                    icon={<MenuOutlined />}
                                       // ← mở menu
                                    // Nếu muốn nút desktop cũng toggle (đóng khi click lần nữa) thì dùng:
                                    // onClick={() => setMenuOpen(!menuOpen)}
                                />
                            </div>

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

            {/* Menu chỉ render khi mở */}
            <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
}