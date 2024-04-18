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



// ---------- Background Img----------
// import bg1 from "../assets/image/background/bg1.svg";
// import bg2 from "../assets/image/background/bg2.svg";

export const TopImages =() =>{
    return(
        <Container>

            {/* -----------------Top Component----------------- */}
            <div className="image-container-1">
                
                <div className="top-img">
                        {/* <img src={bg2} alt=""  className="Tbg-2"/> */}
        
                            {/* <img src={bg1} alt=""  className="Tbg-1"/> */}
                        

                    {/* ---------- Birds Image ---------- */}
                    
                        <img src={bird1} alt="Home Img" className="Tbird-1" />
                        <img src={bird2} alt="Home Img" className="Tbird-2" />

                    {/* -----------Cloud Images---------- */}
                    
                        <img src={cloud1} alt="" className="Tcloud-1" />
                        <img src={cloud2} alt="" className="Tcloud-2" />
                        <img src={cloud3} alt="" className="Tcloud-3" />

                    {/* -----------Hand Images----------- */}
    
                       
                    




                    
                </div>
            </div>


       </Container>
    )
}