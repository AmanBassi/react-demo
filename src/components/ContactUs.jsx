import MyForm from './Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactUs = () => {
    return (

        <div>
            <Container>
                <h1>Contact Us</h1>
                <Row>
                    <Col><MyForm /></Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactUs;