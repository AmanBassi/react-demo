import Car from './Car';
import Container from 'react-bootstrap/Container';

const Garage = () => {
    return (
        <Container>
            <Car model="Benz" power={258} convertable={false} />
            <Car model="Bimmer" power={159} convertable={true} />
            <Car model="Audi" power={357} convertable={false} />
        </Container>
    );
}

export default Garage;