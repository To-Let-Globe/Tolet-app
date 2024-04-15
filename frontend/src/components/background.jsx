import "../style/background.css"
// ------------Home Img-------------
// import home1 from "../assets/image/home/home1.svg"
// import home2 from "../assets/image/home/home2.svg"
// import home3 from "../assets/image/home/home3.svg"
// import home4 from "../assets/image/home/home4.svg"
// import home5 from "../assets/image/home/home5.svg"
// import home6 from "../assets/image/home/home6.svg"
// import home7 from "../assets/image/home/home7.svg"
// import home8 from "../assets/image/home/home8.svg"
// import home9 from "../assets/image/home/home9.svg"
// import home10 from "../assets/image/home/home10.svg"
// import home11 from "../assets/image/home/home11.svg"
// import home12 from "../assets/image/home/home12.svg"
// import home13 from "../assets/image/home/home13.svg"
import { Container } from "react-bootstrap"

// -----------Birds Img------------
import bird1 from "../assets/image/birds/bird1.svg";
import bird2 from "../assets/image/birds/bird2.svg";

// ---------- Background Img----------
import bg1 from "../assets/image/background/bg1.svg";
import bg2 from "../assets/image/background/bg2.svg";

export const Images =() =>{
    return(
        <Container>

            {/* -----------------Top Component----------------- */}
            <div className="image-container-1">
                
                <div className="top-img">
                    <div className="bg-img back">
                        <img src={bg2} alt=""  className="bg-2"/>
                        <div className="front">
                            <img src={bg1} alt=""  className="bg-1"/>
                        </div>
                    </div>
                    <div className="bird-img">
                        <img src={bird1} alt="Home Img" className="bird-1" />
                        <img src={bird2} alt="Home Img" className="bird-2" />
                    </div>
                    {/* <div className="home-img">
                        <img src={home1} alt="Home Img" className="thome-1" />
                        <img src={home2} alt="Home Img" className="thome-2" />
                        <img src={home3} alt="Home Img" className="thome-3" />
                        <img src={home4} alt="Home Img" className="thome-4" />
                        <img src={home5} alt="Home Img" className="thome-5" />
                        <img src={home6} alt="Home Img" className="thome-6" />
                        <img src={home7} alt="Home Img" className="thome-7" />
                        <img src={home8} alt="Home Img" className="thome-8" />
                        <img src={home9} alt="Home Img" className="thome-9" />
                        <img src={home10} alt="Home Img" className="thome-10" />
                        <img src={home11} alt="Home Img" className="thome-11" />
                        <img src={home12} alt="Home Img" className="thome-12" />
                        <img src={home13} alt="Home Img" className="thome-13" />
                    </div> */}
                </div>
            </div>


            {/* -----------Bottom components--------------- */}
            {/* <div className="image-container-2">
                <div className="top-img">
                    <img src={home1} alt="Home Img" className="thome-1" />
                    <img src={home2} alt="Home Img" className="thome-2" />
                    <img src={home3} alt="Home Img" className="thome-3" />
                    <img src={home4} alt="Home Img" className="thome-4" />
                    <img src={home5} alt="Home Img" className="thome-5" />
                    <img src={home6} alt="Home Img" className="thome-6" />
                    <img src={home7} alt="Home Img" className="thome-7" />
                    <img src={home8} alt="Home Img" className="thome-8" />
                    <img src={home9} alt="Home Img" className="thome-9" />
                    <img src={home10} alt="Home Img" className="thome-10" />
                    <img src={home11} alt="Home Img" className="thome-11" />
                    <img src={home12} alt="Home Img" className="thome-12" />
                    <img src={home13} alt="Home Img" className="thome-13" />
                </div>
            </div> */}
        </Container>
    )
}