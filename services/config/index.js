import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://',
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})