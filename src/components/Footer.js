import { Col, Row, Navbar } from "react-bootstrap";
import { FaFacebookSquare, FaTwitterSquare,FaLinkedin,FaInstagramSquare } from 'react-icons/fa'

export default function Footer(){
    return(
        <>
            <div className="footer">
                <Row>
                    <Col xs={12} sm={6} lg={3}>
                        <div id="footer-intro">
                            <Navbar.Brand href="#home">recurit<span className='dot'></span>me</Navbar.Brand>
                            <p> the future of recruitment! At RecruitMe, we are revolutionizing the way organizations connect with top talent and job seekers find their dream careers. Our innovative recruiting website is designed to streamline the hiring process, making it faster, more efficient, and ultimately more successful for both employers and candidates.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <div>
                            <p className="footer-header">INFORMATION</p>
                            <ul>
                                <li>About Us</li>
                                <li>Departments</li>
                                <li>Our Employees</li>
                                <li>What's new ?</li>
                                <li>Customer Review</li>
                                <li>Contact Us</li>
                                <li>Terms of use</li>
                                <li>Privacy Policy</li>
                            </ul>

                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <div>
                        <p className="footer-header">CANDIDATES</p>
                            <ul>
                                <li>Candidate Profile</li>
                                <li>Sign Up</li>
                                <li>Career</li>
                                <li>What's new ?</li>
                                <li>FAQ</li>
                                <li>We are hiring!</li>
                                <li>Why RecruitMe</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <div>
                            <p className="footer-header ">FOLLOW US ON</p>
                            <a href="#facebook"><FaFacebookSquare className="footer-icons"/></a>
                            <a href="#twitter"><FaTwitterSquare className="footer-icons"/></a>
                            <a href="#linedin"><FaLinkedin className="footer-icons"/></a>
                            <a href="#instagram"><FaInstagramSquare className="footer-icons"/></a>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}