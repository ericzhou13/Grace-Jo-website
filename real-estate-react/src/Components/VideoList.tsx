import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./VideoList.css"

interface CardItem {
  title: string;
  content: string;
  YoutubeURL: string;
}

const VideoList: React.FC = () => {
  const cards: CardItem[] = [
    { title: "Card 1", content: "This is the content of card 1.", YoutubeURL: "https://www.youtube.com/embed/ZqOPh-QZl7Y?si=dUGAcvCkUCkVRsNz" },
    { title: "Card 2", content: "This is the content of card 2.", YoutubeURL: "https://www.youtube.com/embed/ZqOPh-QZl7Y?si=dUGAcvCkUCkVRsNz" },
    { title: "Card 3", content: "This is the content of card 3.", YoutubeURL: "https://www.youtube.com/embed/ZqOPh-QZl7Y?si=dUGAcvCkUCkVRsNz" },
    { title: "Card 4", content: "This is the content of card 4.", YoutubeURL: "https://www.youtube.com/embed/ZqOPh-QZl7Y?si=dUGAcvCkUCkVRsNz" },
    { title: "Card 5", content: "This is the content of card 5.", YoutubeURL: "https://www.youtube.com/embed/ZqOPh-QZl7Y?si=dUGAcvCkUCkVRsNz" },
    { title: "Card 6", content: "This is the content of card 6.", YoutubeURL: "https://www.youtube.com/embed/ZqOPh-QZl7Y?si=dUGAcvCkUCkVRsNz" },
  ];

  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
          {cards.map((card, index) => (
              <Col key={index}>
                  <Card>
                    <div className="ratio ratio-16x9">
                      <iframe 
                          src={card.YoutubeURL} 
                          title={card.title} 
                          allowFullScreen
                      />
                    </div>
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.content}</Card.Text>
                    </Card.Body>
                  </Card>
              </Col>
          ))}
      </Row>
    </Container>
      
    
  );
};

/* {cards.map((card, index) => (
        <ListGroup.Item key={index} className="VideoCard">
          <Card >
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.content}</Card.Text>
            </Card.Body>
          </Card>
        </ListGroup.Item>
      ))}*/
export default VideoList;