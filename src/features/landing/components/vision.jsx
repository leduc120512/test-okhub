import "../../../Assets/css/vision.css";
import visionLt from "../../../Assets/img/visionLt.png";
import visionMobile from "../../../Assets/img/aboutmobile.png";

function Vision() {
    return (
        <section
            className="vision"
            style={{
                "--bg-desktop": `url(${visionLt})`,
                "--bg-mobile": `url(${visionMobile})`,
            }}
        >
            <div className="vision-content">
                <p className="vision-sub">• TẦM NHÌN •</p>

                <h2 className="vision-title">
                    Ami&M xây dựng <span className="blue">hệ sinh thái đa ngành{" "}
                    phát triển nhanh và bền vững</span> trên hành
                    trình kiến tạo sự thịnh vượng đích thực!
                </h2>
            </div>
        </section>
    );
}

export default Vision;