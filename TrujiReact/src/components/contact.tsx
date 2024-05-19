import { useState, ChangeEvent, FormEvent } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { sendContact } from '../api/api';
import 'bootstrap/dist/css/bootstrap.min.css';




function Contact() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendContact(formData);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => { // Cambié el tipo de evento de 'any' a 'ChangeEvent<HTMLInputElement>' para que sea más específico
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (

        <Container className='mt-4'>
            <h1>Contact</h1>
            <Row>
                <Col lg={6} xs={12} className='mx-auto'>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                name='username'
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Recipient's email"
                                aria-label="Recipient's email"
                                aria-describedby="basic-addon2"
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                        </InputGroup>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
