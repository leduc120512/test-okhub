import { useEffect, useState } from "react";
import "../../../Assets/css/Banner.css";

import Bg from "../../../Assets/img/banner.png";
import Header from "../../../components/layout/header";

export default function Banner() {

    const [scrollY, setScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const scale = Math.min(1.2, 0.8 + scrollY / 700);
    const opacity = Math.max(1, 1 - scrollY / 450);

    return (
        <div className="Banner" style={{ backgroundImage: `url(${Bg})` }}>
<div className='bong_banner'>

</div>
            <Header
                scale={scale}
                opacity={opacity}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />

            <div className="hero-content">
                <h1>
                    <span className="line line1">ĐỒNG HÀNH</span>
                    <br />
                    <span className="line line2">
                        KHỞI THỊNH VƯỢNG
                    </span>
                </h1>
            </div>

        </div>
    );
}