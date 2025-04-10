import {Container, Row, Col, Button, Image} from "react-bootstrap";
import {useState} from 'react';
import MyNavbar from "./Navigation"
import 'bootstrap/dist/css/bootstrap.min.css';

import korean_flag from "../assets/koreanflag.svg"
import american_flag from "../assets/AmericanFlag.png"
import remaxnow from "../assets/remaxnow.png"
import "./Header.css";
import "./Navigation.css"

function Header() {
  const [LanguageSetting, setLanguageSetting] = useState("English");
  

  return (
      <Container fluid>
        <Row className="English-Or-Korean-Row">
            <Button className="Korean-Button" active={LanguageSetting === "Korean"} onClick={() => setLanguageSetting("Korean")}>
              <Image src={korean_flag} />
              Korean
            </Button>
            <Button className ="English-Button" active={LanguageSetting === "English"} onClick={() => setLanguageSetting("English")}>
              <Image src={american_flag} />
              English
            </Button>
          
          
        </Row>
        <Row className="Header-Information-Row">
          <Col className="Header-Information-Row-Col1">
            <div className="Header-Information-Row-Div1">
              Simon Kim
            </div>
            <div className="Header-Information-Row-Div2">
              NJ LICENSED BROKER
            </div>
            <div className="Header-Information-Row-Div3">
              201.981.7007
            </div>
          </Col>
          <Col className="Header-Information-Row-Col2">
            <Image className="Header-Information-Row-Img1" src={remaxnow} width={300} height={36}/>
            <p className="Header-Information-Row-p1">Nobody in the world sells more real estate than Remax</p>
          </Col>
          <Col className="Header-Information-Row-Col3">
            <Button className="Header-Information-Row-Col3-Button1">
              Online Consultation
            </Button>
            <Button className="Header-Information-Row-Col3-Button2">
              Sold by Simon
            </Button>
            <Button className="Header-Information-Row-Col3-Button3">
              Real Estate News
            </Button>
          </Col>
        </Row>
      <Row>
        <MyNavbar></MyNavbar>
      </Row>
      </Container>
  );
}

export default Header;

{/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}