import { useEffect, useRef, useState } from "react";
import "../../../Assets/css/Imprint.css";
import life_icon from "../../../Assets/img/life_Switch.png";
import life_icon2 from "../../../Assets/img/life_Vector.png";
import Life from "../../../Assets/img/life.png";

function Imprint() {
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);
    const [show, setShow] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const progress = Math.min(
                Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
                1
            );

            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const stats = [
        { number: "686 tỷ", label: "Tổng tài sản và Vốn chủ sở hữu" },
        { number: "93,9 tỷ", label: "Doanh thu thuần" },
        { number: "24,6 tỷ", label: "Lợi nhuận gộp" },
        { number: "20+", label: "Dự án trọng điểm" },
        { number: "03 văn phòng", label: "Trên các tỉnh thành" },
    ];

    // fade section khi scroll tới
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShow(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    // detect item active khi scroll
    useEffect(() => {
        if (!show) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.dataset.index);
                        setActiveIndex(index);
                    }
                });
            },
            {
                rootMargin: "-45% 0px -45% 0px",
                threshold: 0,
            }
        );

        itemsRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [show]);

    return (
        <section
            ref={sectionRef}
            className={`imprint-section ${show ? "show" : ""}`}
        >
            <div className="imprint-container">

                {/* LEFT */}
                <div className="imprint-left">
                    <p className="imprint-sub">• TỪNG BƯỚC PHÁT TRIỂN</p>

                    <h2 className="imprint-title">
                        Dấu ấn <span>Ami&M</span>
                    </h2>

                    <p className="imprint-desc">
                        Những con số chỉ là một phần của câu chuyện,
                        ý nghĩa thực sự là những dấu ấn sâu đậm về sự đổi mới.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="imprint-right">
                    <div className="imprint-scroll">

                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className={`imprint-item ${activeIndex === index ? "active" : ""}`}
                                data-index={index}
                                ref={(el) => (itemsRef.current[index] = el)}
                            >
                                <div className="life-icon-box">
                                    <img className="life-imagetop" src={life_icon} alt="" />
                                    <img className="life-imagebt" src={life_icon2} alt="" />
                                </div>

                                <div className="imprint-info">
                                    <h3>{item.number}</h3>
                                    <p>{item.label}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>

            {/* Friendship section */}
            <div className="friendship">
                <img src={Life} alt="Background" className="friendship-bg" />

                <div className="friendship-overlay" />

                <div className="friendship-content">
                    <p className="friendship-text">
                        “Tình bằng hữu, sự chính trực và tinh thần tự nâng tầm
                        luôn được nên tinh thần của một tổ chức không ngừng
                        <br />
                        <span
                            className="quote-highlight"
                            data-text="học tập để kiến tạo giá trị.”"
                            style={{ "--progress": scrollProgress }}
                        >
    học tập để kiến tạo giá trị.”
</span>
                    </p>
                </div>
            </div>

        </section>
    );
}

export default Imprint;