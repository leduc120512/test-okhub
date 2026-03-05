// Header.jsx
import { useEffect, useState } from "react";
import "../../../Assets/css/Banner.css";
import Logo from "../../../Assets/img/Logo.png";
import Bg from "../../../Assets/img/banner.png";
import Bnmobile from "../../../Assets/img/ImagebANNER.png"
import { MenuOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function Header() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Optional: limit how small the logo can get
    const scale = Math.max(0.5, 1 - scrollY / 700);
    const opacity = Math.max(0.3, 1 - scrollY / 450);

    const logoStyle = {
        transform: `scale(${scale})`,
        opacity,
    };

    return (
        <div
            className="Banner"

        >
            <div className="header-top">
                <img src={Logo} className="logo" style={logoStyle} alt="Logo" />

                <div className="header-right">
                    {/* Mobile */}
                    <div className="mobile-menu">
                        <Button
                            className="menu-btn mobile"
                            shape="circle"
                            icon={<MenuOutlined />}
                        />
                    </div>

                    {/* Desktop */}
                    <div className="desktop-menu">
                        <div className="lang">
                            <button className="lang-btn active">VIE</button>
                            <button className="lang-btn">ENG</button>
                        </div>

                        <Button
                            className="menu-btn desktop"
                            shape="circle"
                            icon={<MenuOutlined />}
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
    );
}