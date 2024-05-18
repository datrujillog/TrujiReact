import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

interface User {
    id: string;
    username: string;
    email: string;
}




function ListUser() {

    const [users, setUsers] = useState<User[]>([]);
    const [selectedRow, setSelectedRow] = useState<number | null>(null);


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


    console.log(users);

    const handleRowClick = (index: number) => {
        setSelectedRow(index);
        console.log(users[index]);
    };

    const handleDelete = async (user: User) => {
        // Aquí puedes enviar la petición para eliminar el usuario
        // Por ejemplo:
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
                //actulizar la  tabla cuando se elimine un usuario 
                getUsers();  //llamamos a la funcion para que se actualice la tabla

                
            } else if (result.isDenied) {
                Swal.fire("No se pudo eliminar", "", "info");
            }

        })



        // await axios.delete(`http://localhost:5000/api/users/${user.id}`);
        // console.log("DELETE",us.id);
        // alert("Usuario eliminado");
    };

    const handleEdit = (user: User) => {
        // Aquí puedes enviar la petición para editar el usuario
        // Por ejemplo:
        // await axios.put(`http://localhost:5000/api/users/${user.username}`, { ...user, email: 'newEmail@example.com' });
        console.log("EDIt", user);
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
                                        <button className='btn btn-danger' onClick={() => handleDelete(user)}>Delete</button>
                                        <button className='btn btn-warning' onClick={() => handleEdit(user)}>Edit</button>
                                    </td>
                                </tr>
                            ))}

                        </Table>
                    </Col>
                </Row>
            </Container>

        </>

    );
}

export default ListUser;