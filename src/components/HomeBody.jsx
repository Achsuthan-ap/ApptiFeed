import * as React from 'react';
//import "./index.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

export default function HomeBody() {
    const newsData = [
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
            content:"Sri Lanka's T20 captain Dasun Shanaka believes his team's world-class bowling line-up can rein in the World Cup-winning Australian batting line-up, starting with the first T20 International at the R. Premada Stadium today.",
            image: 'https://bmkltsly13vb.compat.objectstorage.ap-singapore-1.oraclecloud.com/cdn.sg.dailymirror.lk/assets/uploads/image_b2cdd8cbed.jpg',
        },
        {
            id: 4,
            heading: 'Confident in how our game holds up in these conditions - Hazlewood',
            content: 'Australian fast-bowler Josh Hazlewood said that his team will come into their multi-format tour of Sri Lanka carrying significantly more confidence in handling sub-continental conditions than was pres',
            image: 'https://bmkltsly13vb.compat.objectstorage.ap-singapore-1.oraclecloud.com/cdn.sg.dailymirror.lk/assets/uploads/image_8886c6ae16.jpg',
        },
        // Add more news articles as needed
    ];

    const cardStyle = {
        height: '500px',
        overflow: 'auto',
        overflowx: 'hidden',
    };
    /* Optional: Maintain aspect ratio and cover the container */
    return (
        <>
            <br />
            <Container style={{ maxWidth: '1000px' }}>
                <Card style={cardStyle}>
                    <Card.Body style={{ backgroundColor: '#22408c', color: 'white', borderRadius: '5px', fontFamily: 'Arial, sans-serif' }}>Sports News</Card.Body>
                    {/* Scrolling Content */}
                    <div style={{ overflowY: 'auto', maxHeight: '400px' }}>
                        <Row xs={1} md={2} className="g-4">
                            {newsData.map((news) => (
                                <Col key={news.id}>
                                    <Link to={`/news/${news.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Card>
                                            <Card.Img variant="top" className="custom-height-image" src={news.image} />
                                            <Card.Body>
                                                <Card.Title>{news.heading}</Card.Title>
                                                <Card.Text>{news.content}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>))}
                        </Row>
                    </div>
                    <div className='text-right'>
                        <a className="rsb-sections" style={{ marginLeft: '800px' }}>Read More</a>
                    </div>
                </Card>
            </Container>
            <br />
            <Container style={{ maxWidth: '1000px' }}>
                <Card style={cardStyle}>
                    <Card.Body style={{ backgroundColor: '#22408c', color: 'white', borderRadius: '5px', fontFamily: 'Arial, sans-serif' }}>Politics News</Card.Body>
                    {/* Scrolling Content */}
                    <div style={{ overflowY: 'auto', maxHeight: '400px' }}>
                        <Row xs={1} md={2} className="g-4">
                            <Col>
                                <Card>
                                    <Card.Img variant="top" className="custom-height-image" src="https://www.news.lk/media/k2/items/cache/0cc7fcc9adfae7221d21ec88750c5bb0_XL.jpg" />
                                    <Card.Body>
                                        <Card.Title>Parliament, which was distant from the people, is now getting closer to the people</Card.Title>
                                        <Card.Text>The inaugural session of the student Parliament of Kolonnawa Balika Vidyalaya was held on 30.11.2023 in a ceremonial manner under the patronage of Mrs. Kushani Rohanadeera, Secretary General of Parliament of Sri Lanka.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" className="custom-height-image" src="https://www.news.lk/media/k2/items/cache/60aa04508cd0d3f755627f543b797073_XL.jpg" />
                                    <Card.Body>
                                        <Card.Title>Co-opted members nominated to consider private members’ bills</Card.Title>
                                        <Card.Text>
                                            Speaker Hon. Mahinda Yapa Abeywardena announced in the Parliament today (05) that in terms of Standing Order 113(2), he has nominated the following Co-opted Members to serve in the Legislative Standing Committee for the consideration of the “Sahana Community Development Foundation (Incorporation) Bill”.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" className="custom-height-image" src="https://www.news.lk/media/k2/items/cache/027a96a32c92c624712dea145988b86b_XL.jpg" />
                                    <Card.Body>
                                        <Card.Title>Egyptian Ambassador to Sri Lanka called on the Speaker Mahinda Yapa Abeywardana</Card.Title>
                                        <Card.Text>
                                            Discussions were held between the Speaker and the Ambassador regarding the 66 years of bilateral relations between Egypt and Sri Lanka. Thus, attention was paid to the issue of a commemorative stamp and the re-establishment of the Sri Lanka-Egypt Parliamentary Friendship Association in line with the 66 th anniversary.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" className="custom-height-image" src="https://www.news.lk/media/k2/items/cache/17963ebcb634f05ab94ba3dccd8ebbd9_XL.jpg" />
                                    <Card.Body>
                                        <Card.Title>President Ranil Wickremesinghe and the US Special Presidential Envoy on Climate Change John Kerry Discuss Collaborative Climate Initiatives</Card.Title>
                                        <Card.Text>
                                            President Ranil Wickremesinghe engaged in a crucial conversation today (04) with US Special Presidential Envoy on Climate Change, John Kerry, emphasizing Sri Lanka’s commitment to combatting climate change through innovative initiatives.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>

                    <div className='text-right'>
                        <a className="rsb-sections" style={{ marginLeft: '800px' }}>Read More</a>
                    </div>
                </Card>
            </Container>
            <br />

            <Container style={{ maxWidth: '1000px' }}>
                <Card style={cardStyle}>
                    <Card.Body style={{ backgroundColor: '#22408c', color: 'white', borderRadius: '5px', fontFamily: 'Arial, sans-serif' }}>Medicine News</Card.Body>
                    {/* Scrolling Content */}
                    <div style={{ overflowY: 'auto', maxHeight: '400px' }}>
                        <Row xs={1} md={2} className="g-4">
                            <Col>
                                <Card>
                                    <Card.Img variant="top" className="custom-height-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdn_1JooQ_n3DYpmXdC-7CdGVsGaymugSPbA&usqp=CAU" />
                                    <Card.Body>
                                        <Card.Title>Impact of Covid-19 on dementia patients</Card.Title>
                                        <Card.Text>
                                            Ever thought how Covid 19 could have an impact on the lives of Dementia patients? Today’s Health Capsule is dedicated to the topic on Dementia and how Covid 19 could have an impact on Dementia patients. Addressing the topic, Consultant Neurologist Dr. Padma S. Gunaratne said, “Dementia is a failure in cognitive function particularly of the memory in an individual, to an extent that it impedes their day to day work”.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" className="custom-height-image" src="https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.dailymirror.lk/assets/uploads/image_432439a54f.jpg" />
                                    <Card.Body>
                                        <Card.Title>Prioritising treatment and obtaining promising results</Card.Title>
                                        <Card.Text>
                                            Hemophilia is an inherited bleeding disorder in which blood does not clot properly. This can lead to spontaneous bleeding and bleeding following injuries or surgery. .
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" className="custom-height-image" src="https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.dailymirror.lk/assets/uploads/image_7fe0239a9d.jpg" />
                                    <Card.Body>
                                        <Card.Title>A breakthrough in Hemo-Oncology
                                            CAR T-Cell Therapy</Card.Title>
                                        <Card.Text>
                                            Dr. Colin Philipps Diong, Senior Consultant Hematologist at the Parkway Cancer Center Singapore, together with Dr. Ang Peng Tiam, Consultant Medical Oncologist describe CAR T-Cell as a revolutionary therapy in the field of hemo-oncology.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" className="custom-height-image" src="https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.dailymirror.lk/assets/uploads/image_298bbe6d96.jpg" />
                                    <Card.Body>
                                        <Card.Title>Closing Gaps in Asthma Care: World Asthma Day 2022</Card.Title>
                                        <Card.Text>World Asthma Day (WAD) is held annually, in the month of May to raise awareness of asthma. The WAD campaign is organized each year by the Global Initiative for Asthma (GINA), a World Health Organization collaborative entity founded in 1993. World Asthma Day was first held in 1998 and has grown each year since. Asthma awareness-raising activities take place in countries all over the world on this day. </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>

                    <div className='text-right'>
                        <a className="rsb-sections" style={{ marginLeft: '800px' }}>Read More</a>
                    </div>
                </Card>
            </Container>
            <br />

            <Container style={{ maxWidth: '1000px' }}>
                <Card style={cardStyle}>
                    <Card.Body style={{ backgroundColor: '#22408c', color: 'white', borderRadius: '5px', fontFamily: 'Arial, sans-serif', height: '4px' }}>Economy News</Card.Body>
                    {/* Scrolling Content */}
                    <div style={{ overflowY: 'auto', maxHeight: '400px' }}>
                        <Row xs={1} md={2} className="g-4">
                            <Col>
                                <Card>
                                    <Card.Img variant="top" className="custom-height-image" src="https://www.news.lk/media/k2/items/cache/d0cafeb661ccd81d57c34d635e8c827b_XL.jpg" />
                                    <Card.Body>
                                        <Card.Title>The Central Bank of Sri Lanka Eases Monetary Policy Further to Support Economic Activity amidst the Spread of the COVID-19 Pandemic</Card.Title>
                                        <Card.Text>
                                            Sri Lanka’s economic growth, which has remained subdued for an extended period of time until end 2019, has begun to turnaround as a result of fiscal and monetary stimulus and the return of business confidence after the presidential election. However, it has increasingly become evident that domestic economic activity during the year 2020 would continue to be affected through various channels by the spread of the pandemic.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" className="custom-height-image" src="https://www.news.lk/media/k2/items/cache/73a126261ba35589396f9936ca056a3b_XL.jpg" />
                                    <Card.Body>
                                        <Card.Title>Invest your dollars here now, MP Bandula tells investors</Card.Title>
                                        <Card.Text>
                                            Parliamentarian Bandula Gunawardena urged all who maintained local and foreign dollar accounts to invest their dollars in the country as the rupee value will rise.Gunawardena requested the people, who maintain foreign and local dollar accounts to invest their money in the country, otherwise they will incur losses in the future.They will incur losses if they keep their dollar monies in local and foreign accounts any further hoping the rupee value will depreciate further, he added.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" className="custom-height-image" src="https://www.news.lk/media/k2/items/cache/85ee3a564383ac1c2435ca42d482e245_XL.jpg" />
                                    <Card.Body>
                                        <Card.Title>CB assures timely repayment of maturing bonds</Card.Title>
                                        <Card.Text>
                                            The Central Bank of Sri Lanka yesterday assured the investors that Sri Lanka would meet the maturing international sovereign bond (ISB) obligations worth of US $ 1.5 in January and April next year, despite the current political crisis.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" className="custom-height-image" src="https://www.news.lk/media/k2/items/cache/c182405aa039cd9d03b9fdf594b4d19d_XL.jpg" />
                                    <Card.Body>
                                        <Card.Title>Massive tree crop planting program commences on Thursday</Card.Title>
                                        <Card.Text>
                                            The Ministry of Agriculture commences Island wide massive crop tree planting program including planting 500,000 Jack trees on next Thursday (8th) Minister of Agriculture Mahinda Amaraweera dis closed yesterday.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>

                    <div className='text-right'>
                        <a className="rsb-sections" style={{ marginLeft: '800px' }}>Read More</a>
                    </div>
                </Card>
            </Container>
            <br />
        </>
    );
}
