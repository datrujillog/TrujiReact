import React, { useState,ChangeEvent } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {

    const [formData, setFormData] = useState({
        username: undefined,
        email: undefined,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        console.log(formData)
    };

    // const formulario = () => {
    //     console.log(username)
    // }






    return (
        <>
            <Container className='mt-4'>
                <Row>
                    <Col
                        lg={6} xs={12}
                        className='mx-auto'>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                name='username'
                                value={formData.username || ''}
                                onChange={handleChange}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Recipient's email"
                                aria-label="Recipient's email"
                                aria-describedby="basic-addon2"
                                name='email'
                                value={formData.email || ''}
                                onChange={handleChange}
                            />
                            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                        </InputGroup>

                        

                        
                    </Col>




                    {/* <Col lg={6} xs={12}>
                        <h1 className='text-justify text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore dignissimos eos aspernatur excepturi. Unde, itaque harum soluta sint corrupti nisi et, accusantium minus non impedit eos praesentium consectetur nesciunt.</h1>
                    </Col> */}

                    {/* <Col lg={4} xs={6}>
                        <h1 className='text-justify text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore dignissimos eos aspernatur excepturi. Unde, itaque harum soluta sint corrupti nisi et, accusantium minus non impedit eos praesentium consectetur nesciunt.</h1>
                    </Col> */}

                    {/* <Col lg={4} xs={12}>
                        <h1 className='text-justify text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore dignissimos eos aspernatur excepturi. Unde, itaque harum soluta sint corrupti nisi et, accusantium minus non impedit eos praesentium consectetur nesciunt.</h1>
                    </Col> */}
                </Row>
            </Container>
        </>
    );
}

export default Contact;