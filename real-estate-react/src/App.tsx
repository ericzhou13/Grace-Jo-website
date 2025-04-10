
import Header from "./Components/Header"
import VideoList from "./Components/VideoList"
import LearnMore from "./Components/LearnMore";
import PhotoGallery from "./Components/PhotoGallery";
import Reviews from "./Components/Reviews";
import Consultation from "./Components/Consultation";
import ExtraInfo from "./Components/ExtraInfo";
import Footer from "./Components/Footer";
// import AlignmentExample from "./Components/AlignmentExample"
// import MyNavbar from "./Components/Navigation";
// import { Container, Row, Col } from "react-bootstrap";
import "./App.css"

function App(){
    return (
        <div className="test">

            <div className="Header"><Header></Header></div>
            <div className="VideoList"><VideoList></VideoList></div>
            <div className="LearnMore"><LearnMore></LearnMore></div>
            <div className="PhotoGallery"><PhotoGallery ></PhotoGallery></div>
            <div className="Reviews"><Reviews></Reviews></div>
            <div className="Consultation"><Consultation></Consultation></div>
            <div className="Footer"><Footer></Footer></div>
            <div className="ExtraInfo"><ExtraInfo></ExtraInfo></div>
        </div>
                
    );
}

export default App;

{/* <div className="test">
            <div className = "Header">   
                <Header />
            </div>
            <div className = "MyNavBar"> 
                <MyNavbar />
            </div>
        </div> */}