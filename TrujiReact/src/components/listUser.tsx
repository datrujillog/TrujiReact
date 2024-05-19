import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Button, Form } from 'react-bootstrap';
import { sendContact } from '../api/api';


interface User {
    id: string;
    username: string;
    email: string;
}




function ListUser() {

    const [users, setUsers] = useState<User[]>([]);
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [editUser, setEditUser] = useState<User | null>(null);

    const [newUser, setNewUser] = useState<User | null>(null);
    const [showCreateModal, setShowCreateModal] = useState(false);


    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/users');
            setUsers(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // const intervalId = setInterval(getUsers, 5000);
        // return () => clearInterval(intervalId);
        getUsers();
    }, []);

    const handleRowClick = (index: number) => {
        setSelectedRow(index);
        console.log(users[index]);
    };

    const handleDelete = async (user: User) => {

        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: "Desear eliminar el usuario?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Si, eliminar",
            denyButtonText: `No, cancelar`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire("Eliminado", "", "success");
                axios.delete(`http://localhost:5000/api/users/${user.id}`);
                getUsers();

            } else if (result.isDenied) {
                Swal.fire("No se pudo eliminar", "", "info");
            }

        })



        // await axios.delete(`http://localhost:5000/api/users/${user.id}`);
        // console.log("DELETE",us.id);
        // alert("Usuario eliminado");
    };
    // Update
    const handleEdit = (user: User) => {
        setEditUser(user);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSaveChanges = async () => {
        if (editUser) {
            // Aquí puedes enviar la petición para editar el usuario
            // Por ejemplo:
            await axios.put(`http://localhost:5000/api/users/${editUser.id}`, editUser);
            getUsers(); // Actualiza la lista de usuarios después de la edición
        }
        setShowModal(false);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (editUser) {
            setEditUser({
                ...editUser,
                [event.target.name]: event.target.value,
            });
        }
    };

    // Create

   const hadleCreate = () => {
    setNewUser({id: '', username: '', email: '' });
        setShowCreateModal(true);
    };

    const handleCreateInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (newUser) {
            setNewUser({
                ...newUser,
                [event.target.name]: event.target.value,
            });
        }
    };

    const handleCreateUser = async () => {
        if (newUser) {
            // await axios.post(`http://localhost:5000/api/users`, newUser);
            sendContact(newUser);
            console.log('newUser', newUser);
            getUsers(); 
        }
        setShowCreateModal(false);
    };


    return (
        <>
            <Container className='mt-4'>
                <Row>
                    <Col lg={8} xs={12} className='mx-auto'>
                        <Table striped bordered hover variant="" >

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>userName</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user: User, index: number) => (
                                    <tr
                                        key={index}
                                        onClick={() => handleRowClick(index)}
                                        style={{
                                            backgroundColor: selectedRow === index ? '#f1f1f1' : 'transparent',
                                            cursor: 'pointer',
                                            boxShadow: selectedRow === index ? '0 0 10px #000' : 'none',
                                        }}
                                    >
                                        <td>{index + 1}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button className='btn btn-danger' style={{ marginRight: '10px' }} onClick={() => handleDelete(user)}>Delete</button>
                                            <button className='btn btn-warning ' style={{ marginRight: '10px' }} onClick={() => handleEdit(user)}>Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </Table>
                    </Col>
                <button className='btn btn-success ' style={{ marginRight: '10px' }} onClick={() => hadleCreate()}>Create</button>
                <button className='btn btn-primary my-4 ' style={{ marginRight: '10px' }} onClick={getUsers}>Reload</button>
                </Row>


            </Container>


            {/* // Modal para editar usuario */}

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" name="username" value={editUser?.username} onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={editUser?.email} onChange={handleInputChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal para crear usuario */}

            <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" name="username" onChange={handleCreateInputChange} />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleCreateInputChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowCreateModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCreateUser}>
                        Create User
                    </Button>
                </Modal.Footer>
            </Modal>

        </>

    );
}

export default ListUser;