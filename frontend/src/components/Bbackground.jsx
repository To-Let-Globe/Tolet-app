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


// ---------- Background Img----------
// import bg1 from "../assets/image/background/bg1.svg";
// import bg2 from "../assets/image/background/bg2.svg";

export const BottomImages =() =>{
    return(
        <Container className="b-background">

            {/* -----------Bottom components--------------- */}
            <div className="image-container-2">
                <div className="bottom-img">
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
                    {/* -----------Hand Images----------- */}
                        <img src={hand} alt="" className="hand" />

                    
                </div>
            </div>
        </Container>
    )
}