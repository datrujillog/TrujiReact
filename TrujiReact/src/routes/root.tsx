import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Root() {
    return (
        <>
        <h1>TrujiStudios</h1>
        <Button as={Link} to="/users">LISTA DE USUARIOS</Button>
        </>
    );
}