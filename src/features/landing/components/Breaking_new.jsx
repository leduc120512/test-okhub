import { useEffect, useRef, useState } from "react";
import "../../../Assets/css/NewsSection.css";

import news1 from "../../../Assets/img/logo_partner/partner.png";
import news2 from "../../../Assets/img/logo_partner/partner2.png";
import news3 from "../../../Assets/img/logo_partner/partner.png";
import people from "../../../Assets/img/divwow.png";
import RippleButton from "../../../components/common/Button";

import Mask_group from "../../../Assets/img/Mask_group.png";
import Ellipse from "../../../Assets/img/Ellipse 2133.png";

function NewsSection() {

    const newsRef = useRef(null);
    const careerRef = useRef(null);

    const [showNews, setShowNews] = useState(false);
    const [showCareer, setShowCareer] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {

                    if (entry.target === newsRef.current && entry.isIntersecting) {
                        setShowNews(true);
                    }

                    if (entry.target === careerRef.current && entry.isIntersecting) {
                        setShowCareer(true);
                    }

                });
            },
            { threshold: 0.3 }
        );

        if (newsRef.current) observer.observe(newsRef.current);
        if (careerRef.current) observer.observe(careerRef.current);

        return () => observer.disconnect();

    }, []);

    const news = [
        {
            image: news1,
detail :"Hoạt động nội bộ tăng cường văn hóa doanh nghiệp",
            title: "20/10 Tràn ngập tiếng cười ấm áp tại văn phòng Ami&M",
            date: "24/12/2023"
        },
        {
            image: news2,
            detail :"Hoạt động nội bộ tăng cường văn hóa doanh nghiệp",
            title: "Ami&M tổ chức hội thảo phát triển kỹ năng cho sinh viên",
            date: "20/12/2023"
        },
        {
            image: news3,
            detail :"Hoạt động nội bộ tăng cường văn hóa doanh nghiệp",
            title: "Ami&M mở rộng hợp tác cùng nhiều đối tác chiến lược",
            date: "18/12/2023"
        },
        {
            image: news1,
            detail :"Ami&M tổ chức hội thảo phát triển kỹ năng cho sinh viên",
            title: "Hoạt động nội bộ tăng cường văn hóa doanh nghiệp",
            date: "10/12/2023"
        }
    ];

    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        if (index < news.length - 3) {
            setIndex(index + 1);
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <div className="about_new_section">

            {/* NEWS SECTION */}

            <section className="news-section">

                <div className="layout2"></div>

                <div className="news-container">

                    {/* LEFT */}

                    <div
                        className={`news-left ${showNews ? "show" : ""}`}
                        ref={newsRef}
                    >

                        <p className="news-sub">• DANH SÁCH TIN TỨC</p>

                        <h2 className="news-title">
                            Có gì mới <br /> tại Ami&M?
                        </h2>

                        <h2 className="news-title diss">
                            Có gì mới tại Ami&M?
                        </h2>

                        <p className="news-desc">
                            Ami&M, viết tắt của Amity and More Tình bằng hữu
                            và hơn thế nữa chính là cái tên và cũng là sự
                            khẳng định cho tôn chỉ mà chúng tôi luôn tâm niệm.
                        </p>

                        <RippleButton  className="news-btn desktop-btn">
                            Xem tất cả →
                        </RippleButton>

                    </div>

                    {/* RIGHT */}

                    <div className="news-right">

                        <button className="news-arrow left" onClick={prevSlide}>
                            ‹
                        </button>

                        <div className="news-slider">

                            {news.slice(index, index + 3).map((item, i) => (

                                <div className="news-card" key={i}>

                                    <div className="news-image">

                                        <img src={item.image} alt="" />

                                        <span className="news-tag">
                                            Nổi bật
                                        </span>

                                        <span className="news-tag_detail">
                                            Xem chi tiết ↗
                                        </span>

                                    </div>

                                    <div className="news-content">

                                        <h4>{item.title}</h4>

                                        <h5 className='p-sold lt'>{item.detail}</h5>
<div className='description-details'>
    <p className='p-date'>{item.date}</p>

    <p className='p-sold p-date'>Xem thêm↗</p>
</div>


                                    </div>

                                </div>

                            ))}

                        </div>

                        <button className="news-arrow right" onClick={nextSlide}>
                            ›
                        </button>

                    </div>

                    <RippleButton className="news-btn mobile-btn">
                        Xem tất cả →
                    </RippleButton>

                </div>
                <img className='news-btn-mask mark'  src={Mask_group} />
                <img className='absolute news-btn-Ellipse'  src={Ellipse} />
            </section>


            {/* CAREER SECTION */}

            <section
                className="career-section"
                style={{ backgroundImage: `url(${people})` }}
            >

                <div
                    ref={careerRef}
                    className={`career-content ${showCareer ? "show" : ""}`}
                >

                    <p className="career-sub">• ĐỒNG HÀNH TIẾN BƯỚC •</p>

                    <h2 className="career-title">
                        Chào đón bạn trở thành <br />
                        <span>Người đồng hành tiếp theo!</span>
                    </h2>

                    <p className="career-desc">
                        Bạn thích một môi trường làm việc năng động, sáng tạo và gắn kết?
                        Hãy ứng tuyển để trở thành thành viên trong gia đình Ami&M!
                    </p>

                    <RippleButton className="career-btn">
                        Cơ hội việc làm →
                    </RippleButton>

                </div>

            </section>

        </div>
    );
}

export default NewsSection;