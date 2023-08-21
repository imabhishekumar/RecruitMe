import front from "../assets/home.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <>
      <div className="row home-container">
        <Container>
          <Row>
            <Col xs={5} md={3} lg={5}>
                <div className="intro"> 
                    <p id="para1" className="animate__animated animate__slideInDown">DISCOVER. CONNECT. SUCCEED</p>
                    {/* <p id="para2">Building teams</p>t 
                    <p id="para3">driving  <span>success</span></p> */}
                    <p id="para2" className="animate__animated animate__slideInLeft animate__delay-600ms">Unlock Your<span> Potential</span></p>
                    <p id="para3" className="animate__animated animate__slideInLeft animate__delay-600ms">Find Your Dream Job.</p>

                    <button className="animate__animated animate__slideInLeft animate__delay-900ms">CONTACT US</button>
                </div>
            </Col>

            <Col>
              <div id="home" className="animate__animated animate__slideInDown">
                <img src={front} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
