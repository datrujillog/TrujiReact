import axios from 'axios';


export const sendContact = async (data: object) => {
    try {
        const response = await axios.post('http://localhost:5000/api/users', {
            data: data
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

