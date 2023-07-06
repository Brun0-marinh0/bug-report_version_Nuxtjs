import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://185.209.179.96:9800',
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})