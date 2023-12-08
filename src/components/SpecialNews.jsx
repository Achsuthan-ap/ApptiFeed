import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
export const SpecialNews = () => {
    const customStyles = {
        paddingLeft: '110px',
      };
    return(
            <>
            <Container style={{ maxWidth: '300px', margin: '20px' }}>
            
            <h4><a style={{ paddingLeft :'30px',paddingRight :'30px', backgroundColor: '#22408c', color: 'white', borderRadius: '5px', fontFamily: 'Arial, sans-serif', height: '4px' }}>Economy News</a>
            </h4>
              <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header><b>Sports</b></Card.Header>
                <Card.Body>
                
                  <Card.Title></Card.Title>
                  <Card.Text>
                  Former South Africa skipper hints at return for T20 World Cup
                  </Card.Text>
                  <b className="ms-5" style={customStyles}>1 hour ago</b>
                </Card.Body>
              </Card>
              <br />
              <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header><b>Politics News</b></Card.Header>
                <Card.Body>
                
                  <Card.Title></Card.Title>
                  <Card.Text>
                  Egyptian Ambassador to Sri Lanka called on the Speaker Mahinda Yapa Abeywardana
                  </Card.Text>
                  <b className="ms-5" style={customStyles}>1 hour ago</b>
                </Card.Body>
              </Card>
              <br />
              <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header><b>Lifestyle News</b></Card.Header>
                <Card.Body>
                
                  <Card.Title></Card.Title>
                  <Card.Text>
                  What happens to your body if you eat spinach every day in winters?
                  </Card.Text>
                  <b className="ms-5" style={customStyles}>1 hour ago</b>
                </Card.Body>
              </Card>
              <br />  
              <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header><b>Politics News</b></Card.Header>
                <Card.Body>
                
                  <Card.Title></Card.Title>
                  <Card.Text>
                  Parliament, which was distant from the people, is now getting closer to the people
                  </Card.Text>
                  <b className="ms-5" style={customStyles}>1 hour ago</b>
                </Card.Body>
              </Card>
              <br />
              <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header><b>Medicine News</b></Card.Header>
                <Card.Body>
                
                  <Card.Title></Card.Title>
                  <Card.Text>
                  Closing Gaps in Asthma Care: World Asthma Day 2022
                  </Card.Text>
                  <b className="ms-5" style={customStyles}>1 hour ago</b>
                </Card.Body>
              </Card>
              <br />
              <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header><b>Economy News</b></Card.Header>
                <Card.Body>
                
                  <Card.Title></Card.Title>
                  <Card.Text>
                  Massive tree crop planting program commences on Thursday
                  </Card.Text>
                  <b className="ms-5" style={customStyles}>1 hour ago</b>
                </Card.Body>
              </Card>
              <br />
              <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header><b>Sports News</b></Card.Header>
                <Card.Body>
                
                  <Card.Title></Card.Title>
                  <Card.Text>
                  Confident in how our game holds up in these conditions - Hazlewood
                  </Card.Text>
                  <b className="ms-5" style={customStyles}>1 hour ago</b>
                </Card.Body>
              </Card>
              <br />

              <h4><a style={{ paddingLeft :'30px',paddingRight :'30px', backgroundColor: '#22408c', color: 'white', borderRadius: '5px', fontFamily: 'Arial, sans-serif', height: '4px' }}>Others</a>
            </h4>
              <Card >
                <Card.Body>
                  <Card.Title>

                  <a href="#">Society news</a><br />
                  <a href="#">Cinema news</a><br />
                  <a href="#">Technology news</a><br />
                  <a href="#">World news </a><br />

                  </Card.Title>


                </Card.Body>
              </Card>
              <br />
            </Container>
            </>
          );
       
};