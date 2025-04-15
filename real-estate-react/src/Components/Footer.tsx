
import {Container, Row, Col } from "react-bootstrap";
import "./Footer.css"
import remaximg from "../assets/remaxnow.png"
interface information {
    content: string;
};


function Footer(){
    const links: information[] = [
        {content: "Closing Cost" },
        {content: "Property Tax" },
        {content: "Types of Houses" },
        {content: "Renovation" },
        {content: "Dictionary" },
        {content: "Utility Companies" },
        {content: "Duplex" },
        {content: "Real Estate News" },
    ];

    const realtor: information[] = [
        {content: "Simon Kim" },
        {content: "Real Estate License # 1757040" },
        {content: "201-981-7007" },
        {content: "realtor7007@gmail.com" },
        {content: "Katalk: realtor7007" },
    ]

    const remax: information[] = [
        {content: "Real Estate License#: 2438921" },
        {content: "201-891-8000" },
        {content: "460 Bergen Blvd. Suite 120" },
        {content: "Palisades Park, NJ 07650"},
    ]

    return (
        <Container fluid style={{backgroundColor: "grey"}}>
            <Row lg = {6} style={{height: "350px"}}>
                <Col>
                </Col>
                <Col className = "Col-1">
                    <img src={remaximg} style={{ width: '250px', height: '40px'}}></img>
                </Col>
                <Col className = "Col-2">
                    <p style={{fontSize: "19px", fontFamily: "sans-serif"}}> Links</p>
                    <ul>
                        {links.map((link, index) => (
                        <li key={index} style={{fontSize: "16px", fontFamily: "sans-serif"}}>
                            {link.content}
                        </li>
                        ))}
                    </ul>
                
                </Col>
                <Col className = "Col-3">
                    <p style={{fontSize: "19px", fontFamily: "sans-serif"}}> Simon Kim</p>
                    <ul>
                        {realtor.map((realtor, index) => (
                            <li key={index} style={{fontSize: "16px", fontFamily: "sans-serif"}}>
                                {realtor.content}
                            </li>
                        ))}
                    </ul>
                    
                </Col>
                <Col className = "Col-4">
                    <p style={{fontSize: "19px", fontFamily: "sans-serif"}}> Remax Now</p>
                    <ul>
                        {remax.map((remax, index) => (
                            <li key={index} style={{fontSize: "16px", fontFamily: "sans-serif"}}>
                                {remax.content}
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
            <Row lg= {1} style={{backgroundColor: "black", color: "white", paddingLeft: "300px"}}>
                © 2025 NJSTREET. All Rights Reserved.
            </Row>
        </Container>
    );
};

export default Footer;