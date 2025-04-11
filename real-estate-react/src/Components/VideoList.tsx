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
    { title: "Example Card", content: "Example Video", YoutubeURL: "https://www.youtube.com/embed/a3ICNMQW7Ok?si=VTHbDfANCfi7ifEx" },
    { title: "Example Card", content: "Example Video", YoutubeURL: "https://www.youtube.com/embed/a3ICNMQW7Ok?si=VTHbDfANCfi7ifEx" },
    { title: "Example Card", content: "Example Video", YoutubeURL: "https://www.youtube.com/embed/a3ICNMQW7Ok?si=VTHbDfANCfi7ifEx" },
    { title: "Example Card", content: "Example Video", YoutubeURL: "https://www.youtube.com/embed/a3ICNMQW7Ok?si=VTHbDfANCfi7ifEx" },
    { title: "Example Card", content: "Example Video", YoutubeURL: "https://www.youtube.com/embed/a3ICNMQW7Ok?si=VTHbDfANCfi7ifEx" },
    { title: "Example Card", content: "Example Video", YoutubeURL: "https://www.youtube.com/embed/a3ICNMQW7Ok?si=VTHbDfANCfi7ifEx" },
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