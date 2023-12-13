import React from 'react';
import "./layout.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
export default function Sports() {
    const sportsNews = [
        {
            id: 1,
            heading: 'Sri Lanka edge out Afghanistan in low-scoring thriller',
            content: ' This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            image: 'https://bmkltsly13vb.compat.objectstorage.ap-singapore-1.oraclecloud.com/cdn.sg.dailymirror.lk/assets/uploads/image_b2ec3f586d.jpg',
        },
        {
            id: 2,
            heading: 'Wade guides Australia to series-clinching win',
            content: 'Australia were made to work hard in chasing a modest target of 125 but the steady hands of Matthew Wade took them to a series-clinching win in the second T20I against Sri Lanka at the R Premadasa Stadium yesterday.',
            image: 'https://bmkltsly13vb.compat.objectstorage.ap-singapore-1.oraclecloud.com/cdn.sg.dailymirror.lk/assets/uploads/image_80ea81f0aa.jpg',
        },
        {
            id: 3,
            heading: 'Shanaka backs world-class bowling attack to succeed against World Champions',
            content: "Sri Lanka's T20 captain Dasun Shanaka believes his team's world-class bowling line-up can rein in the World Cup-winning Australian batting line-up, starting with the first T20 International at the R. Premada Stadium today.",
            image: 'https://bmkltsly13vb.compat.objectstorage.ap-singapore-1.oraclecloud.com/cdn.sg.dailymirror.lk/assets/uploads/image_b2cdd8cbed.jpg',
        },
        {
            id: 4,
            heading: 'Confident in how our game holds up in these conditions - Hazlewood',
            content: 'Australian fast-bowler Josh Hazlewood said that his team will come into their multi-format tour of Sri Lanka carrying significantly more confidence in handling sub-continental conditions than was pres',
            image: 'https://bmkltsly13vb.compat.objectstorage.ap-singapore-1.oraclecloud.com/cdn.sg.dailymirror.lk/assets/uploads/image_8886c6ae16.jpg',
        },
    ]
    return (
        <div>
            <br />
            <Card.Title className="h4WithBorder" >Sports News</Card.Title><br/>
            <Card>
                <Card.Body>
                    <Row xs={1} md={1} className="g-4">
                        {sportsNews.map((news) =>
                            <Col key={news.id}>
                                <Link to={`/sports-news/${news.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="article-item">
                                                <img src={news.image} />
                                                <h3>
                                                    <p><b>{news.heading}</b></p>
                                                    <p>{news.content}</p>
                                                    <div class="article-footer">
                                                        <div class="feed-category">

                                                        </div>
                                                        <span><i class="bi bi-clock"></i>  Before 29 min</span>
                                                    </div>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        )}
                    </Row>
                </Card.Body>
            </Card>


            <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>

        </div>
    );
};

