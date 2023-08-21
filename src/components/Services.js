import { Container, Row, Card, Col } from "react-bootstrap";
import data from './servicesData';

export default function Services(){
    const allCards = data.map(item => {
        return(
            <Col key={item.id}  sm={6} lg={3} className="d-flex">
                <Card className="align-items-stretch">
                    <Card.Img variant="top" src={item.imgUrl} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Subtitle className="mb-2">{item.category}</Card.Subtitle>
                        <Card.Text>
                            {item.content}
                        </Card.Text>
                    <button>EXPLORE</button>
                    </Card.Body>
                </Card>
            </Col>
        )
    })
    return(
       <div className="card-wrapper">
            <div className="cards">
                <p>OUR <span>SERVICES</span></p>
                <Row>
                    {allCards}
                </Row>
            </div>
       </div>
       
    )
    
}
