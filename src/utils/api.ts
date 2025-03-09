import axios from "@/utils/axios.customize";

export const registerAPI = (code: Number, email: string, password: string, name: string) => {

    const url = `/register`;
    return axios.post(url, { code, email, password, name })
}