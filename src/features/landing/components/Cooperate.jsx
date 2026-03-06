
import { useState, useEffect, useRef } from "react";
import "../../../Assets/css/PartnerSection.css";

/* PERSON IMAGE */
import person1 from "../../../Assets/img/Avatar.png";
import person2 from "../../../Assets/img/doitac2.png";
import person3 from "../../../Assets/img/Avatar.png";

/* AVATAR */
import avatar1 from "../../../Assets/img/Avatar.png";
import avatar2 from "../../../Assets/img/Doi-tac_Base.webp";
import avatar3 from "../../../Assets/img/Avatar.png";

/* LOGO */
import logo1 from "../../../Assets/img/logo_partner/guidlines-logo-BDF.png";
import logo2 from "../../../Assets/img/logo_partner/guidlines-logo-BDF1.png";
import logo3 from "../../../Assets/img/logo_partner/guidlines-logo-BDF2.png";
import logo4 from "../../../Assets/img/logo_partner/Logo-Base.webp";
import logo5 from "../../../Assets/img/logo_partner/Logo-Cong-ty-Co-phan-Chung-khoan-Ky-Thuong.png";
import logo6 from "../../../Assets/img/logo_partner/logo-faros.png";
import logo7 from "../../../Assets/img/logo_partner/logo-faros (1).png";
import logo8 from "../../../Assets/img/logo_partner/Logo-VNDIRECT.png";
import logo9 from "../../../Assets/img/logo_partner/Logo_ODDO.webp";
import logo10 from "../../../Assets/img/logo_partner/section-doi-tac-tieu-bieu-item-3.png";
import logo11 from "../../../Assets/img/logo_partner/Vietcaplink.png";
import logo12 from "../../../Assets/img/logo_partner/WATG.png";

function PartnerSection() {

    const ref = useRef(null);

    const partners = [
        {
            avatar: avatar1,
            image: person1,
            text: `Chúng tôi thực sự hứng khởi khi đồng hành cùng Ami&M bởi ở đây có
một đội ngũ nhân sự không chỉ giàu kinh nghiệm trong lĩnh vực
ngân hàng – tài chính mà quan trọng hơn là đầy nhiệt tâm với
mong muốn đóng góp vào sự phát triển chung của quá trình giáo
dục định hướng thế hệ trẻ.`,
            name: "TS. Đinh Thanh Vân",
            role: "Phó Tổng Giám Đốc Ngân hàng – Tiến sĩ Kinh tế"
        },
        {
            avatar: avatar2,
            image: person2,
            text: `Ami&M mang lại một góc nhìn rất mới về giáo dục định hướng.
    Tôi đánh giá cao cách đội ngũ xây dựng chương trình giúp các bạn
trẻ hiểu rõ hơn về con đường nghề nghiệp.`,
            name: "Nguyễn Minh Đức",
            role: "Giám đốc phát triển doanh nghiệp"
        },
        {
            avatar: avatar3,
            image: person3,
            text: `Chúng tôi tin rằng việc kết nối giữa doanh nghiệp và giáo dục
là chìa khóa giúp thế hệ trẻ phát triển toàn diện trong tương lai.`,
            name: "Trần Hoàng Anh",
            role: "Chuyên gia chiến lược"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [show, setShow] = useState(false);

    const changePartner = (index) => {

        if (index === activeIndex) return;

        setFade(false);

        setTimeout(() => {
            setActiveIndex(index);
            setFade(true);
        }, 200);
    };

    /* detect scroll tới section */

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                setShow(entry.isIntersecting);
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };

    }, []);

    /* auto change partner */

    useEffect(() => {

        if (!show) return;

        const interval = setInterval(() => {

            const next = (activeIndex + 1) % partners.length;

            changePartner(next);

        }, 3000);

        return () => clearInterval(interval);

    }, [show, activeIndex]);

    const active = partners[activeIndex];

    return (
        <div>

            <section ref={ref} className="partner-section">

                <div className="partner-container">

                    {/* LEFT */}

                    <div className={`partner-left ${fade ? "fade-in" : "fade-out"}`}>

                        <p className="partner-sub">• HỢP TÁC VỮNG BỀN</p>

                        <p className="partner-text">{active.text}</p>

                        <h4 className="partner-name">{active.name}</h4>

                        <p className="partner-role">{active.role}</p>

                        <div className="partner-avatars">

                            {partners.map((item, index) => (
                                <img
                                    key={index}
                                    src={item.avatar}
                                    alt=""
                                    onClick={() => changePartner(index)}
                                    className={activeIndex === index ? "active" : ""}
                                />
                            ))}

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className={`partner-right ${fade ? "fade-in" : "fade-out"}`}>

                        <div className="partner-image">
                            <img src={active.image} alt="" />
                        </div>

                    </div>

                </div>

            </section>

            {/* PARTNER LOGO */}

            <div className="partner-logo-wrapper">

                <div className="partner-logo-title">
                    <p>• ĐỐI TÁC TIÊU BIỂU</p>
                    <h3>ĐỒNG HÀNH CÙNG AMI&M</h3>
                </div>

                <div className="partner-logos">

                    <div className="partner-logo-track">

                        {[logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12,
                        logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12]
                        .map((logo,index)=>(
                            <img key={index} src={logo} alt=""/>
                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default PartnerSection;

