import { useEffect, useRef, useState } from "react";
import "../../../Assets/css/About.css";
import abdk from "../../../Assets/img/abdk.png";
import aboutmobile from "../../../Assets/img/aboutmobile.png";

function About() {

    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();

    }, []);

    return (
        <section
            ref={ref}
            className={`about ${visible ? "show" : ""}`}
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
                    Bắt đầu từ năm 2005 – thời điểm những người bạn cùng chung chí hướng chia sẻ những ý tưởng đầu tiên về AMITICAS, cùng nhau nỗ lực không ngừng nghỉ để đến 9.9.2019, Ami&M chính thức đi vào hoạt động.    </p>

                <p className="about-desc">
                    Tại Ami&M, chúng tôi được sống và làm việc hết mình!
                    Được gắn bó và kết nối cũng những người bằng hữu mà chúng tôi gọi là ANH EM - AM, được bứt phá các giới hạn bản thân để phát triển, thoả sức thử thách và gắn bó nhiệt thành để cùng nhau kiến tạo các giá trị mà mình tin tưởng.   </p>

                <button className="about-btn">
                    HÀNH TRÌNH CỦA AMIM →
                </button>

            </div>

        </section>
    );
}

export default About;