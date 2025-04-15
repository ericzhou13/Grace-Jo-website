
import {Container, Row, Col, Card, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <Container fluid className="main-container p-4" style={{ backgroundColor: '#E0F0FF', height: '800px', paddingTop: "10%" }}>
          <Row lg={5}>
            <Col></Col>
            <Col>
                <Container className="Container-1">
                    <Row lg={3}>
                        {infoButtons.map((button, index) => (
                            <Card key={index} className="card1 mb-3 rounded-0" style={{ height: '100px', width: '160px' }}>
                                <Card.Body>
                                    <Card.Title style={{fontFamily: 'sans-serif', fontSize: '18px', color: 'darkblue' }}>{button.text}</Card.Title>
                                    <Card.Text style={{fontFamily: 'sans-serif', fontSize: '16px' }}>{button.subtext}</Card.Text>
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
                            <Table  hover>
                                
                                <tbody>
                                    {newsItems.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.title}</td>
                                        <td>{item.date}</td>
                                    </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Container>
            </Col>
            <Col>
                <Container className="Container-3">
                    {links.map((link, index) => (
                        <Card key={index} className="card3 mb-3 rounded-0">
                            <Card.Body>
                                <Card.Title style={{fontFamily: 'sans-serif', fontSize: '18px', color: 'darkblue' }}>{link.text}</Card.Title>
                                <Card.Text style={{fontFamily: 'sans-serif', fontSize: '16px'}}>{link.subtext}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Container>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      );
    };

export default ExtraInfo;