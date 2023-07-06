import { http } from "../config/index"

export default {
    ListReport: async (email) => {
        return await http.get(`/report/${email}`)
    },
    ListSystem: async() => {
        return await http.get('/system')
    },
    PostReport: async(data) => {
        return await http.post('/report',data)
    }
}