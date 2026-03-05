import "../../../Assets/css/life.css";
import life from "../../../Assets/img/life.png";
import life_icon from "../../../Assets/img/life_Vector.png";
import life_icon2 from "../../../Assets/img/life_Switch.png";
function Life() {
    return (
        <section className="life">
            <div className="life-header">
                <p className="life-sub">• SỨ MỆNH •</p>

                <h2 className="life-title">
                    Mang lại cuộc sống <span className="red">tốt đẹp hơn</span>
                    <br />
                    cho những người đồng hành
                </h2>
            </div>

            <div className="life-wrapper">

                <div className="life-left">
                    <div className="life-item">
                        <div className="life-content">
                            <div className="life-icon-box">
                                <img className="life-imagetop life-imagetop_genaral" src={life_icon} alt="" />
                                <img className="life-imagebt life-imagetop_genaral" src={life_icon2} alt="" />
                            </div>

                        </div>
                        <h4>VỚI CÁN BỘ NHÂN VIÊN</h4>
                        <p>Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá, phát triển, khẳng định giá trị bản thân</p>
                    </div>

                    <div className="life-item">
                        <div className="life-content">
                            <div className="life-icon-box">
                                <img className="life-imagetop life-imagetop_genaral" src={life_icon} alt="" />
                                <img className="life-imagebt life-imagetop_genaral" src={life_icon2} alt="" />
                            </div>

                        </div>
                        <h4>VỚI KHÁCH HÀNG</h4>
                        <p>Cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang đến cho khách hàng những trải nghiệm tốt nhất</p>
                    </div>

                    <div className="life-item">
                        <div className="life-content">
                            <div className="life-icon-box">
                                <img className="life-imagetop life-imagetop_genaral" src={life_icon} alt="" />
                                <img className="life-imagebt life-imagetop_genaral" src={life_icon2} alt="" />
                            </div>

                        </div>
                        <h4>VỚI ĐỐI TÁC</h4>
                        <p>Tin tưởng và muốn hợp tác dài lâu trên nền tảng của sự phát triển bền vững và hướng tới những giá trị tốt đẹp</p>
                    </div>

                    <div className="life-item">
                        <div className="life-content">
                            <div className="life-icon-box">
                                <img className="life-imagetop life-imagetop_genaral" src={life_icon} alt="" />
                                <img className="life-imagebt life-imagetop_genaral" src={life_icon2} alt="" />
                            </div>

                        </div>
                        <h4>VỚI CỘNG ĐỒNG</h4>
                        <p>Hài hòa lợi ích doanh nghiệp với lợi ích xã hội đóng góp tích cực cộng đồng </p>
                    </div>
                </div>

                <div className="life-right">
                    <img src={life} alt="" />
                </div>

            </div>
        </section>
    );
}

export default Life;