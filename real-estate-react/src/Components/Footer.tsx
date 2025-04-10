
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
        <Container fluid>
            <Row lg = {4}>
                <Col className = "Col-1">
                    <img src={remaximg} style={{ width: '200px', height: '50px', top: '100px' }}></img>
                </Col>
                <Col className = "Col-2">
                    <p> Links</p>
                    <ul>
                        {links.map((link, index) => (
                        <li key={index}>
                            {link.content}
                        </li>
                        ))}
                    </ul>
                
                </Col>
                <Col className = "Col-3">
                    <p> Simon Kim</p>
                    <ul>
                        {realtor.map((realtor, index) => (
                            <li key={index}>
                                {realtor.content}
                            </li>
                        ))}
                    </ul>
                    
                </Col>
                <Col className = "Col-4">
                    <p> Remax Now</p>
                    <ul>
                        {remax.map((remax, index) => (
                            <li key={index}>
                                {remax.content}
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
            <Row lg= {1}>
                <Col>
                    This is the footer
                
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;