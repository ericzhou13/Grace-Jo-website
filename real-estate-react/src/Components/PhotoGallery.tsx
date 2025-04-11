import { Card, Container, Row, Col } from "react-bootstrap";
import "./PhotoGallery.css"
import img from "../assets/example.jpg";

interface PhotoItem {
    title: string;
    content: string;
};

function PhotoGallery(){
    const cards: PhotoItem[] = [
        { title: "Card 1", content: "This is the content of card 1." },
        { title: "Card 2", content: "This is the content of card 2." },
        { title: "Card 3", content: "This is the content of card 3." },
        { title: "Card 4", content: "This is the content of card 4." },
        { title: "Card 5", content: "This is the content of card 5." },
        { title: "Card 6", content: "This is the content of card 6." },
        { title: "Card 7", content: "This is the content of card 7." },
        { title: "Card 8", content: "This is the content of card 8." }
      ];
    
    return (
        <Container>
        <Row className="row1">
            <h1>
                Photo Gallery
            </h1>
        </Row>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {cards.map((_, index) => (
                <Col key={index} style={{ cursor: "pointer" }}>
                    <Card>
                        <Card.Img variant="top" src={img} alt="Card image" />
                    </Card>
                    
                </Col>
            ))}
        </Row>
      </Container>
    );
};

export default PhotoGallery;