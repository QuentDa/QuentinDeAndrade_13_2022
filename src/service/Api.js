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
    axios(options)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}



