import { useEffect, useRef, useState } from "react";
import "../../../Assets/css/About.css";
import abdk from "../../../Assets/img/abdk.png";
import aboutmobile from "../../../Assets/img/aboutmobile.png";
import RippleButton from "../../../components/common/Button";

function About() {

    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const [offset, setOffset] = useState(0);
    const lastScroll = useRef(0);

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
    useEffect(() => {
        const handleScroll = () => {
            let move = window.scrollY * 0.05;

            // giới hạn 20px
            if (move > 150) move = 150;

            setOffset(move);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            let diff = currentScroll - lastScroll.current;

            setOffset((prev) => {
                let next = prev + diff * 0.2;

                // giới hạn ±30px
                if (next > 50) next = 50;
                if (next < -50) next = -50;

                return next;
            });

            lastScroll.current = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
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
            {/* content */}


            <div
                className="about-circle-ov about-circle-ov-red"
                style={{ transform: `translateY(${offset}px)` }}
            />

            <div
                className="about-circle-ov about-circle-ov-yellow"
                style={{ transform: `translateY(${offset}px)` }}
            />

            <div
                className="about-circle-ov about-circle-ov-blur"
                style={{ transform: `translateY(${offset}px)` }}
            />

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

                <RippleButton className="about-btn">
                    HÀNH TRÌNH CỦA AMIM →
                </RippleButton>

            </div>

        </section>
    );
}

export default About;