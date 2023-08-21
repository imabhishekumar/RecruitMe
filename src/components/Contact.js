import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function Contact() {
  return (
    <>
      <div>
        <div className="message">
          <Row className="d-flex">
            <Col lg={3} md={6}>
              <div className="d-flex ">
                <div></div>
                <div className="message-text">
                  <Form>
                    <Form.Group className="mb-3 message-text" controlId="formBasicEmail">
                      <Form.Label>Enter your name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name here"/>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="d-flex p-25">
                <div className="message-text">
                  <Form.Label>Select a Adviser</Form.Label>
                  <Form.Select aria-label="Default select example" className="message-text">
                    <option>Choose a Adviser</option>
                    <option value="1">Abhishek Kumar</option>
                    <option value="2">Pooja Rao</option>
                    <option value="2">Vipin</option>
                    <option value="2">Deepanshu Bhardwaj</option>
                    <option value="3">Pratik Gupta</option>
                  </Form.Select>
                </div>
                <div></div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="d-flex p-25">
                <div></div>
                <div className="message-text">
                  <Form.Label>Select your Training</Form.Label>
                  <Form.Select aria-label="Default select example" className="message-text">
                    <option>Choose a Training</option>
                    <option value="1">Management</option>
                    <option value="2">Leadership</option>
                    <option value="3">Compensation</option>
                    <option value="4">Strategic</option>
                  </Form.Select>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="d-flex p-25">
                <button className="message-button">Message</button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
