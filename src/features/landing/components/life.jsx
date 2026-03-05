import { useEffect, useRef, useState } from "react";
import "../../../Assets/css/life.css";

// Các ảnh theo thứ tự (đúng 4 ảnh cho 4 mục)
import life1 from "../../../Assets/img/life.png";               // nhân viên
import life2 from "../../../Assets/img/Su-menh-voi-khach-hang.webp"; // khách hàng
          // cộng đồng (thay bằng ảnh thật)
import life_icon from "../../../Assets/img/life_Vector.png";
import life_icon2 from "../../../Assets/img/life_Switch.png";

const images = [life1, life2, life1, life2];

function Life() {
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);
    const [show, setShow] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    // 1. Fade-in toàn section khi scroll vào
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShow(true);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // 2. Theo dõi từng item → cập nhật ảnh khi item vào vùng nhìn
    useEffect(() => {
        if (!show) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.dataset.index);
                        setActiveIndex(index); // chỉ cập nhật khi item thực sự vào viewport
                    }
                });
            },
            {
                // Quan trọng: điều chỉnh để cảm giác tự nhiên hơn
                threshold: [0.4, 0.6, 0.8], // kích hoạt ở nhiều mức
                rootMargin: "-20% 0px -40% 0px", // ưu tiên item nằm gần giữa màn hình
            }
        );

        itemsRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [show]);

    return (
        <section ref={sectionRef} className={`life ${show ? "show" : ""}`}>
            <div className="life-header">
                <p className="life-sub">• SỨ MỆNH •</p>
                <h2 className="life-title">
                    Mang lại cuộc sống <span className="red">tốt đẹp hơn</span>
                    <br />
                    cho những người đồng hành
                </h2>
                {/* Nếu bạn muốn thêm step indicator ở header thì để đây */}

            </div>

            <div className="life-wrapper">
                {/* Cột trái - các mục */}
                <div className="life-left">
                    {[
                        {
                            title: "VỚI CÁN BỘ NHÂN VIÊN",
                            desc: "Cảm thấy gắn kết, được tôn trọng và phát triển cùng công ty.",
                        },
                        {
                            title: "VỚI KHÁCH HÀNG",
                            desc: "Cung cấp các sản phẩm, dịch vụ chất lượng cao với trải nghiệm tốt nhất.",
                        },
                        {
                            title: "VỚI ĐỐI TÁC",
                            desc: "Xây dựng mối quan hệ tin cậy, cùng phát triển bền vững.",
                        },
                        {
                            title: "VỚI CỘNG ĐỒNG",
                            desc: "Hài hòa lợi ích doanh nghiệp và trách nhiệm xã hội.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="life-item"
                            data-index={index}
                            ref={(el) => (itemsRef.current[index] = el)}
                        >
                            <div className="life-content">
                                {/* Nếu muốn step nhỏ ở mỗi item thì để đây, còn không thì xóa */}


                                <div className="life-icon-box">
                                    <img className="life-imagetop" src={life_icon} alt="" />
                                    <img className="life-imagebt" src={life_icon2} alt="" />
                                </div>
                            </div>

                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Cột phải - ảnh lớn thay đổi theo activeIndex */}
                <div className="life-right">
                    <img
                        src={images[activeIndex]}
                        alt={`Sứ mệnh ${activeIndex + 1}`}
                        className="life-main-image"
                    />
                </div>
            </div>
        </section>
    );
}

export default Life;