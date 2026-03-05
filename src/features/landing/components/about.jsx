import "../../../Assets/css/About.css";
import abdk from "../../../Assets/img/abdk.png";
import aboutmobile from "../../../Assets/img/aboutmobile.png";

function About() {
    return (
        <section
            className="about"
            style={{
                "--bg-desktop": `url(${abdk})`,
                "--bg-mobile": `url(${aboutmobile})`,
            }}
        >
            <div className="about-overlay"></div>

            <div className="about-content">
                <p className="about-sub">
                    • CÔNG TY CỔ PHẦN TẬP ĐOÀN AMIM VIỆT NAM
                </p>

                <h1 className="about-title">
                    KHỞI NGUỒN TỪ <br />
                    TÌNH BẰNG HỮU
                </h1>

                <p className="about-desc">
                    Bắt đầu từ năm 2005 – thời điểm những người bạn cùng
                    chung chí hướng chia sẻ những ý tưởng đầu tiên...
                </p>

                <button className="about-btn">
                    HÀNH TRÌNH CỦA AMIM →
                </button>
            </div>
        </section>
    );
}

export default About;