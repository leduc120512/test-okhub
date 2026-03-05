import "../../../Assets/css/Imprint.css";
import life_icon from "../../../Assets/img/life_Switch.png";
import life_icon2 from "../../../Assets/img/life_Vector.png";
import Life from "../../../Assets/img/life.png";

function Imprint() {
    const stats = [
        { number: "686 tỷ", label: "Tổng tài sản và Vốn chủ sở hữu" },
        { number: "93,9 tỷ", label: "Doanh thu thuần" },
        { number: "24,6 tỷ", label: "Lợi nhuận gộp" },
        { number: "20+", label: "Dự án trọng điểm" },
        { number: "03 văn phòng", label: "Trên các tỉnh thành" },
    ];

    return (
        <section className="imprint-section">
            <div className="imprint-container">
                {/* LEFT - Sticky heading */}
                <div className="imprint-left">
                    <p className="imprint-sub">• TỪNG BƯỚC PHÁT TRIỂN</p>
                    <h2 className="imprint-title">
                        Dấu ấn <span>Ami&M</span>
                    </h2>
                    <p className="imprint-desc">
                        Những con số chỉ là một phần của câu chuyện, ý nghĩa thực sự là những dấu ấn sâu đậm về sự đổi mới.
                    </p>
                </div>

                {/* RIGHT - Scrollable stats */}
                <div className="imprint-right">
                    <div className="imprint-scroll">
                        {stats.map((item, index) => (
                            <div key={index} className="imprint-item">
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

            {/* Friendship section - luôn hiển thị sau container */}
            <div className="friendship">
                <img src={Life} alt="Background" className="friendship-bg" />
                <div className="friendship-overlay" />
                <div className="friendship-content">
                    <p className="friendship-text">
                        “Tình bằng hữu, sự chính trực và tinh thần tự nâng tầm luôn được nên tinh thần của một tổ chức không ngừng học tập để kiến tạo giá trị.”
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Imprint;