// import { Row, Col, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import home from '../images/home.jfif'; 

export default function Home() {
    return (
        <div className="home">
            <img src={home}></img>
        </div>
    );
}

