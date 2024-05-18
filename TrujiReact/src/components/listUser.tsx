import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import axios from 'axios';

interface User {
    username: string;
    email: string;
}




function ListUser() {

    const [users, setUsers] = useState<User[]>([]);


    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/users');
            setUsers(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);


    console.log(users);

    return (
        <>
            <Container className='mt-4'>
                <Row>
                    <Col lg={8} xs={12} className='mx-auto'>
                        <Table striped bordered hover variant="dark">

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>userName</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            {users.map((user: User, index: number) => { // Change the type annotation of 'user' to 'any'
                                return (
                                    <tbody key={index}>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    </tbody>
                                );
                            })}
                            {/* <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                
                            </tbody> */}
                        </Table>
                    </Col>
                </Row>
            </Container>

        </>

    );
}

export default ListUser;