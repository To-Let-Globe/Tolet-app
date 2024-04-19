import "../style/background.css"

import { Container } from "react-bootstrap"
// import { HomeImg } from "./homeImg";
// -----------Birds Img------------
import bird1 from "../assets/image/birds/bird1.svg";
import bird2 from "../assets/image/birds/bird2.svg";

// -----------Cloud IMG------------
import cloud1 from "../assets/image/cloud/cloud1.svg";
import cloud2 from "../assets/image/cloud/cloud2.svg";
import cloud3 from "../assets/image/cloud/cloud3.svg";


//------------Hand IMG--------------
import hand from "../assets/image/hand/hand.svg";

// ------------Home Img-------------
import chimney1 from "../assets/image/home/chimney-front.svg"
import wall1 from "../assets/image/home/wall-1.svg"
import wall2 from "../assets/image/home/wall-2.svg"
import roof1 from "../assets/image/home/roof.svg"
import roof2 from "../assets/image/home/roof-top.svg"
// import home6 from "../assets/image/home/home6.svg"
// import home7 from "../assets/image/home/home7.svg"
// import home8 from "../assets/image/home/home8.svg"
// import home9 from "../assets/image/home/home9.svg"
// import home10 from "../assets/image/home/home10.svg"
// import home11 from "../assets/image/home/home11.svg"
// import home12 from "../assets/image/home/home12.svg"
// import home13 from "../assets/image/home/home13.svg"

// ---------- Background Img----------
// import bg1 from "../assets/image/background/bg1.svg";
// import bg2 from "../assets/image/background/bg2.svg";

export const BottomImages =() =>{
    return(
        <Container className="b-background">

            {/* -----------Bottom components--------------- */}
            <div className="image-container-2">
                {/* <div className="bottom-img"> */}
                    {/* <div className="bg-img back">
                        <img src={bg2} alt=""  className="bg-2"/>
                        <div className="front">
                            <img src={bg1} alt=""  className="bg-1"/>
                        </div>
                    </div> */}

                     
                    {/* ---------- Birds Image ---------- */}
                        <img src={bird1} alt="Home Img" className="bird-1" />
                        <img src={bird2} alt="Home Img" className="bird-2" />

                    {/* -----------Cloud Images---------- */}
                        <img src={cloud1} alt="" className="cloud-1" />
                        <img src={cloud2} alt="" className="cloud-2" />
                        <img src={cloud3} alt="" className="cloud-3" />

                    {/* ----------Home Images------------ */}
                        <img src={wall1} alt="" className="wall-1" />
                        <img src={wall2} alt="" className="wall-2" />
                        <img src={roof1} alt="" className="roof-1" />
                        <img src={roof2} alt="" className="roof-2" />
                    
                    {/* -----------Hand Images----------- */}
                        <img src={hand} alt="" className="hand" />

                    
                </div>
            {/* </div> */}
        </Container>
    )
}