// MobileMenu.jsx (giữ nguyên hoặc chỉnh nhẹ)
import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Logo from "../../Assets/img/Logo.png"; // điều chỉnh path

// Ví dụ trong MobileMenu.jsx hoặc HeaderMenu.jsx
export default function MobileMenu({ isOpen, onClose }) {
    return (
        <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
            <div className="menu-content">
                <div className="menu-header">
                    <img src={Logo} alt="Logo" className="menu-logo" />
                    <Button shape="circle" icon={<CloseOutlined />} onClick={onClose} />
                </div>

                <nav className="menu-nav">
                    <a href="#home" onClick={onClose}>Trang chủ</a>
                    <a href="#about" onClick={onClose}>Giới thiệu</a>
                    <a href="#services" onClick={onClose}>Dịch vụ</a>
                    <a href="#projects" onClick={onClose}>Dự án</a>
                    <a href="#contact" onClick={onClose}>Liên hệ</a>
                </nav>

                <div className="menu-lang">
                    <button className="lang-btn active">VIE</button>
                    <button className="lang-btn">ENG</button>
                </div>
            </div>
        </div>
    );
}