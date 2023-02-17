import phone from "../images/phone.png"
import mail from "../images/email.png"
import clock from "../images/clock.png"
import pin from "../images/pin.png"
import instagram from "../images/instagram-footer.png"
import { useEffect } from "react"


const Footer = () => {



    const copyright = String.fromCodePoint(0x00A9);


    return (
        <div className="footer">
            <div className="footer-details">
                <div className="footer-detail">
                    <div className="title"><h6>Design & <br />Development</h6></div>
                    <div className="detail">
                        <p className="detail-detail">
                            <img className="detail-img" src={phone} />
                            +20126603488
                        </p>
                        <p className="detail-detail">
                            <img className="detail-img" src={mail} />
                            ziyadazab36@gmail.com
                        </p>
                    </div>
                </div>
                <div className="footer-detail">
                    <div className="title"><h6>Business <br />Hours</h6></div>
                    <div className="detail">
                        <p className="detail-detail">
                            <img className="detail-img" src={clock} />
                            Everyday from 6AM till 12AM
                        </p>

                    </div>
                </div>
                <div className="footer-detail">
                    <div className="title"><h6>Our <br />Address</h6></div>
                    <div className="detail">
                        <p className="detail-detail">
                            <img className="detail-img" src={pin} />
                            Egypt,  Giza, 6th of October City, <br />2nd District, Kafrawy Axis, <br />Square Mall, 2nd Floor
                        </p>

                    </div>
                </div>
                <div className="footer-detail">
                    <div className="title"><h6>Contact<br />Us</h6></div>
                    <div className="detail">
                        <p className="detail-detail">
                            <img className="detail-img" src={phone} />
                            +01050006974
                        </p>
                        <p className="detail-detail">

                            <img className="detail-img" src={instagram} />
                            <a href="https://instagram.com/evolutionfitnesseg" target="_blank" rel="noreferrer noopener">
                                evolutionfitnesseg
                            </a>
                        </p>

                    </div>
                </div>
            </div>
            <hr></hr>

            <div className="footer-end">

                {`${copyright}`} 2023 Ziyad Ashraf<br /> Evolution Fitness Egypt <br />All rights reserved. <br />

            </div>

        </div >
    )


}

export default Footer