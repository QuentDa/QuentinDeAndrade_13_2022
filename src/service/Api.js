import axios from 'axios';

export function connectToLogin(data) {
    const url = 'http://localhost:3001/api/v1/user/login';
    const options = {
        method: 'post',
        url: url,
        data: data,
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return axios(options)
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(error);
        });
}

export function connectToProfile() {
    const token = localStorage.getItem('token');
    const url = 'http://localhost:3001/api/v1/user/profile';
    const options = {
        method: 'post',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    };
    return axios(options)
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(error);
        });
}

export function editProfile(userData) {
    const url = 'http://localhost:3001/api/v1/user/profile';
    const token = localStorage.getItem('token');
    const options = {
        method: 'put',
        url: url,
        data: userData,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    };
    return axios(options)
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(error);
        });
}