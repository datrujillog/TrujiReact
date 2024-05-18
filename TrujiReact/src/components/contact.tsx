import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {




    
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
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                        </InputGroup>

                        <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                                https://example.com/users/
                            </InputGroup.Text>
                            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control aria-label="Amount (to the nearest dollar)" />
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>

                        <InputGroup>
                            <InputGroup.Text>With textarea</InputGroup.Text>
                            <Form.Control as="textarea" aria-label="With textarea" />
                        </InputGroup>
                    </Col>




                    <Col lg={6} xs={12}>
                        <h1 className='text-justify text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore dignissimos eos aspernatur excepturi. Unde, itaque harum soluta sint corrupti nisi et, accusantium minus non impedit eos praesentium consectetur nesciunt.</h1>
                    </Col>

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