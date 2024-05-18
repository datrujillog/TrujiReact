// import { useState } from 'react';
import './App.css';

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <h1>TrujiStudios</h1>

    <Button variant="success">Primary</Button>{' '}

    <Button >Prueba</Button>

    <Button className='btn'>Node</Button> 

    <button type="button" className="btn btn-success">Base class</button>

    <Button variant="primary" type="submit">
        Submit
      </Button>
      
    </>
  );
}

export default App;
