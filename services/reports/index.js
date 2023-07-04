import { http } from "../config/index"

export default {
    ListReport: async (email) => {
        return await http.get(`/${email}`)
    }
}