import Header from "../components/Header"
import NavBar from "../components/NavBar"
import "../Classes.css"
import AOS from "aos"
import { useEffect } from "react"
import Class from "../components/Classes/Class"
import Footer from "../components/Footer"


const Classes = () => {

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div>
            <NavBar active="Classes" />
            <div className="container-all">
                <div className="first-header">
                    <Header title="OUR CLASSES" data="no" />
                </div>
                <Class />
                <Footer />
            </div>
        </div >
    )
}

export default Classes