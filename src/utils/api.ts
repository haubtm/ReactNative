import axios from "@/utils/axios.customize";

export const registerAPI = (code: string, email: string, password: string, name: string) => {

    const url = `/register`;
    return axios.post<IBackendRes<IRegister>>(url, { code, email, password, name })
}

export const verifyAPI = (code: string, email: string) => {

    const url = `/register`;
    return axios.post<IBackendRes<IRegister>>(url, { code, email })
}

export const resendCodeAPI = (email: string) => {

    const url = `/register`;
    return axios.post<IBackendRes<IRegister>>(url, { email })
}