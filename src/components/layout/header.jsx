import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState, useEffect } from "react";
import Logo from "../../Assets/img/Logo.png";
import MenuOverlay from "../common/HeaderMenu";
import "../../Assets/css/Header.css";

export default function Header({ scale, opacity, menuOpen, setMenuOpen }) {

    const [isVisible, setIsVisible] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    // animation khi load trang
    useEffect(() => {
        const timer = setTimeout(() => {
            setMounted(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    // logic scroll
    useEffect(() => {

        let ticking = false;

        const controlHeader = () => {

            if (!ticking) {

                window.requestAnimationFrame(() => {

                    const currentScrollY = window.scrollY;

                    if (currentScrollY > lastScrollY && currentScrollY > 120) {
                        setIsVisible(false); // scroll xuống
                    } else {
                        setIsVisible(true); // scroll lên
                    }

                    setLastScrollY(currentScrollY);
                    ticking = false;

                });

                ticking = true;
            }
        };

        window.addEventListener("scroll", controlHeader, { passive: true });

        return () => {
            window.removeEventListener("scroll", controlHeader);
        };

    }, [lastScrollY]);

    return (
        <>
            <div
                className={`header-top 
                ${mounted ? "mounted" : ""} 
                ${isVisible ? "visible" : "hidden"}`}
            >

                {/* Logo */}
                <img
                    src={Logo}
                    className="logo"
                    style={{
                        transform: `scale(${scale})`,
                        opacity: opacity
                    }}
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

                        <div
                            className="dk_menu"
                            onClick={() => setMenuOpen(true)}
                        >
                            <p>Menu</p>
                            <Button
                                className="btn_suggest"
                                shape="circle"
                                icon={<MenuOutlined />}
                            />
                        </div>

                    </div>

                </div>
            </div>

            <MenuOverlay
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
            />
        </>
    );
}