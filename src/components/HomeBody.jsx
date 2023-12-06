import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function HomeBody() {
    const cardStyle = {
        height: '400px', 
        overflow: 'auto', 
      };
  return (
    <Container style={{ maxWidth: '700px', margin: '20px' }}>
        <Card style={cardStyle}>
        <Card.Body style={{ backgroundColor: '#22408c', color: 'white', borderRadius: '5px', fontFamily: 'Arial, sans-serif' }}>
            World News
        </Card.Body>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                    <Card.Img variant="top" src="https://media.tenor.com/4JMNsx_YlgYAAAAd/gopi-sudhakar-sudhakar.gif" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                    <Card.Img variant="top" src="https://media.tenor.com/J3Xm44gwZn8AAAAC/gopi-sudhakar.gif" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                    <Card.Img variant="top" src="https://media.tenor.com/m-pMFk4eV00AAAAM/mulikuran-gopi.gif" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                    <Card.Img variant="top" src="https://media.tenor.com/bX-qr0fvyu4AAAAC/starring-gopi.gif" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <h3>Read More</h3>
        </Card>
    </Container>
  );
}
