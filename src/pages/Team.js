import Footer from "../components/Footer"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Staff from "../components/Circles"
import Splash from "../images/SplashRotated.png"


import "../Team.css"
import Trainer from "../components/Team/Trainer"

const Team = () => {
    return (
        <div>

            <NavBar active="Team" />
            <div className="container-all">
                <div className="trainer-container">
                    <Header title="OUR TRAINERS" data="no" />
                    <Trainer />
                </div>
                <div className="staff-container">

                    <Header title="OUR STAFF" data="no" />
                    <Staff nameClass="circle-name-home" ppClass="pps-home-circles" type="staff" />


                </div>
                <div className="bottom-decorations">
                    <img src={Splash} />
                </div>
                <Footer />

            </div>


        </div>
    )
}

export default Team