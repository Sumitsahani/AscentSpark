import axios from "axios";

export const getAllUser = () => {
    return axios.get('https://www.webappfactory.co/shaktipeeth/public/api/users');
}

export const updateUser =  (user) => {
    return axios(`https://www.webappfactory.co/shaktipeeth/public/api/edit-user/${user.id}/`,
    {headers:{'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'withCredentials': true,
    'credentials': 'same-origin'
}
})
} 