const axios = require('axios');

export async function getAllUsers() {

    const response = await axios.get('/api/users');
    console.log(response);

    return response.data;
}

export async function createUser(data) {
    console.log(data);
    const response = await axios.post(`/api/register`, {user: data});

    return response.data;
}