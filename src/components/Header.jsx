import {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Header(){
    const [language,setLanguage] = useState("English");
    return(
        <>      
        <Container className = "bg-dark text-white" fluid = {true}>
            <Row>
                <Col sm = {10} md = {10} xs = {12} className='d-flex justify-content-center align-items-center'>
                    Flash Sales
                </Col>
                <Col sm = {1} md = {1} xs = {12} className = "d-flex justify-content-center align-items-center">
                <Dropdown drop = 'centered' autoClose = {true} className=''>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        {language}
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant = 'dark'>
                        <Dropdown.Item onClick = {e=>setLanguage("English")}>English</Dropdown.Item>
                        <Dropdown.Item onClick = {e=>setLanguage("Hindi")}>Hindi</Dropdown.Item>
                        <Dropdown.Item onClick = {e=>setLanguage("Gujarati")}>Gujarati</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Col>
            </Row>
        </Container>
        </>
    )
}