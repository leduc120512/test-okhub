import { useState } from "react";
import "../../../Assets/css/NewsSection.css";

import bg from "../../../Assets/img/newhotbg.png";

import news1 from "../../../Assets/img/new1.png";
import news2 from "../../../Assets/img/new1.png";
import news3 from "../../../Assets/img/new1.png";
import people from "../../../Assets/img/people.png";
function NewsSection() {

    const news = [
        {
            image: news1,
            title: "20/10 Tràn ngập tiếng cười ấm áp tại văn phòng Ami&M",
            date: "24/12/2023"
        },
        {
            image: news2,
            title: "Ami&M tổ chức hội thảo phát triển kỹ năng cho sinh viên",
            date: "20/12/2023"
        },
        {
            image: news3,
            title: "Ami&M mở rộng hợp tác cùng nhiều đối tác chiến lược",
            date: "18/12/2023"
        },
        {
            image: news1,
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
        <div>


        <section
            className="news-section"
            style={{ backgroundImage: `url(${bg})` }}
        >

            {/* overlay */}
            <div className="news-overlay"></div>

            <div className="news-container">

                {/* LEFT */}
                <div className="news-left">

                    <p className="news-sub">• DANH SÁCH TIN TỨC</p>

                    <h2 className="news-title">
                        Có gì mới <br /> tại Ami&M?
                    </h2>

                    <p className="news-desc">
                        Ami&M, viết tắt của Amity and More Tình bằng hữu
                        và hơn thế nữa chính là cái tên và cũng là sự
                        khẳng định cho tôn chỉ mà chúng tôi luôn tâm niệm.
                    </p>

                    <button className="news-btn">
                        Xem tất cả →
                    </button>

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

                                </div>

                                <div className="news-content">

                                    <h4>{item.title}</h4>

                                    <p>{item.date}</p>

                                </div>

                            </div>
                        ))}

                    </div>

                    <button className="news-arrow right" onClick={nextSlide}>
                        ›

                    </button>

                </div>

            </div>

        </section>
            <section
                className="career-section"
                style={{ backgroundImage: `url(${people})` }}
            >
                <div className="career-content">

                    <p className="career-sub">• ĐỒNG HÀNH TIẾN BƯỚC •</p>

                    <h2 className="career-title">
                        Chào đón bạn trở thành <br />
                        <span>Người đồng hành tiếp theo!</span>
                    </h2>

                    <p className="career-desc">
                        Bạn thích một môi trường làm việc năng động, sáng tạo và gắn kết?
                        Hãy ứng tuyển để trở thành thành viên trong gia đình Ami&M!
                    </p>

                    <button className="career-btn">
                        Cơ hội việc làm →
                    </button>

                </div>
            </section>
        </div>
    );
}

export default NewsSection;