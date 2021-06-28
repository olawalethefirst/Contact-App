import axios from 'axios';

const loginUser = async (username, password) => {
    try {
        const response = await axios.post('http://4d0b9d527d28.ngrok.io', {
            username,
            password,
        });
        return response.status;
    } catch (err) {
        return err.response.data;
    }
};

export default loginUser;
