import { Col, Row } from 'react-bootstrap';
import data from './topHireData.js';
export default function Tophire(){
    const topHire = data.map(item=> {
        return(
            <Col >
                <span className="hire-icon">
                    <img src={item.img} />
                </span>
            </Col>
            
        )
    })

    return(
        <>
            <div className='hire'>
                <div className='cards' >
                    <p style={{color:'#000'}}>TOP<span> RECRUITERS</span></p>
                </div>
                <Row>
                        {topHire}
                </Row>
            </div>
        </>
    );
}