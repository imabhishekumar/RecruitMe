import { Col, Container, Row } from "react-bootstrap";
import intro from '../assets/intro.jpg';
import { BsCheck2Circle } from "react-icons/bs";

export default function Intro(){
    return(
        <>
            <div className="who_we_are">
                <Container>
                    <Row>
                        <Col lg={6} md={12}>
                            <div>
                                <img src={intro} />
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div id="div2">
                                <p id="para1">Who we are</p>
                                <p id="para2">Excellent IT services for<span> Hire talents.</span></p>
                                <p className="para3">We are proud to offer top range of comprehensive employment services such as payroll and benefits administration, HR management, and assistance with employer compliance.</p>
                                <Row className="values">
                                    <Col md={12} className="d-flex align-items-center">
                                        <div><BsCheck2Circle className="check-icon"/> </div>
                                        <div>
                                            <p>Our Philosophy</p>
                                            <p>Unlocking Human Potential: Empowering Minds, Embracing Futures.</p>
                                        </div>
                                    </Col>
                                    <Col md={12} className="d-flex align-items-center">
                                        <div><BsCheck2Circle className="check-icon"/> </div>
                                        <div>
                                            <p>Our Resources</p>
                                            <p>Find Your Perfect Fit: Embrace New Horizons with Our Recruitment Startup!</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}