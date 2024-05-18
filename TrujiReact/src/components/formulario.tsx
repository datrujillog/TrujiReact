import React, { useState, ChangeEvent, FormEvent } from 'react';

// Interfaz para el estado del formulario
interface FormData {
    name: string;
    email: string;
}

const Formulario: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: ''
    });

    // Función para manejar cambios en los campos de entrada
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Datos del formulario:', e.preventDefault);

        // Enviar la petición POST
        fetch('https://ejemplo.com/api/endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la petición');
                }
                return response.json();
            })
            .then(data => {
                console.log('Respuesta del servidor:', data);
                // Aquí podrías manejar la respuesta del servidor como desees
            })
            .catch(error => {
                console.error('Error al enviar la petición:', error);
            });
    };

    return (
        <form className='mt-5' onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;
