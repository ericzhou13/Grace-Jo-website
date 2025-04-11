
import {Container, Row, Col, Card } from "react-bootstrap";
import "./ExtraInfo.css"

function ExtraInfo(){
    const infoButtons = [
        { text: '클로징 비용', subtext: 'Closing Cost' },
        { text: '타운 재산세', subtext: 'Property Tax' },
        { text: '주택유형', subtext: 'Types of Houses' },
        { text: '레노베이션', subtext: 'Renovation' },
        { text: '부동산사전', subtext: 'R/E Dictionary' },
        { text: '듀플렉스', subtext: 'Duplex' },
      ];
    
      const newsItems = [
        { title: '뉴저지 타운 CO', date: '2024.11.07' },
        { title: '좋은 리얼터 찾는 방법', date: '2024.11.07' },
        { title: '부동산 투자 전략', date: '2024.11.07' },
        { title: '1031 EXCHANGE', date: '2024.11.07' },
        { title: '홈 인스펙션의 중요성', date: '2024.11.07' },
      ];
    
      const links = [
        { text: '뉴저지 부동산이야기 유튜브', subtext: "Simon's Youtube Channel" },
        { text: '전기/가스/수도 회사 정보', subtext: 'Utility Companies' },
        { text: '모기지 계산기', subtext: 'Mortgage Calculator' },
      ];
    
      return (
        <Container fluid className="p-4" style={{ backgroundColor: '#E0F0FF', minHeight: '100vh' }}>
          <Row lg={3}>
            <Col>
                <Container className="Container-1">
                    <Row lg={2}>
                    {infoButtons.map((button, index) => (
                        <Card key={index} className="card1 mb-3 rounded-0">
                            <Card.Body>
                                <Card.Title>{button.text}</Card.Title>
                                <Card.Text>{button.subtext}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                    </Row>
                    
                </Container>
            </Col>
            <Col>
                <Container className="Container-2">
                    <Card className="card2 rounded-0">
                        <Card.Body>
                            <Card.Title>Real Estate News</Card.Title>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                {newsItems.map((item, index) => (
                                <li key={index} className="mb-2">
                                    {item.title} - {item.date}
                                </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Container>
            </Col>
            <Col>
                <Container className="Container-3">
                    <Card>
                        <Card.Body>
                            <Card.Title>Real Estate News</Card.Title>
                            {links.map((link, index) => (
                                <Card key={index} className="card3 mb-3 rounded-0">
                                    <Card.Body>
                                        <Card.Title>{link.text}</Card.Title>
                                        <Card.Text>{link.subtext}</Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Card.Body>
                    </Card>
                </Container>
            </Col>
          </Row>
        </Container>
      );
    };

export default ExtraInfo;