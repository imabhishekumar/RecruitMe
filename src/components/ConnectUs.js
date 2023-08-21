import { Col, Row } from "react-bootstrap";
import { Form, InputGroup } from 'react-bootstrap';
import image from '../assets/service3.jpg';
export default function ConnectUs(){
    return(
        <>
            <div className="connect">
                <p>CONNECT WITH US</p>
                <Row>
                    <Col lg={6} md={12} >
                        <div id="connect-us-text">
                            <p>Create your free <span style={{color: '#f36b21'}}>candidate profile</span></p>
                            <img src={image}/>
                            
                        </div>
                    </Col>
                    <Col md={12} lg={6} >
                        <div id="connect-us-form">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Desired CTC</Form.Label>  
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text>₹</InputGroup.Text>
                                        <Form.Control aria-label="Amount (to the nearest dollar)" />
                                        <InputGroup.Text>LPA</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>What are you looking for</Form.Label>
                                    <Form.Select defaultValue="Software Engineer">
                                        <option>Software Engineer</option>
                                        <option>Product Manager</option>
                                        <option>Data Scientist</option>
                                        <option>Web Developer</option>
                                        <option>Android Developer</option>
                                        <option>Web designer</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>What is desired place</Form.Label>
                                    <Form.Select defaultValue="Bangluru">
                                        <option>Bangluru</option>
                                        <option>Pune</option>
                                        <option>Gurugram</option>
                                        <option>Hydrabad</option>
                                        <option>New Delhi</option>
                                        <option>Mumbai</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}