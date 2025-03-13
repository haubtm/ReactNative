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

export const loginAPI = (email: string, password: string) => {

    const url = `/register`;
    const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE3NDM4NDQ2MTksImlhdCI6MTczNTIwNDYxOSwidXNlciI6eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1lIjoiSSdtIHN1cGVyIGFkbWluIn19.JOgfn_KyMRnl6XviVQ9sbdDn2sHm7G098HJNuyKBx1Q" // fake token
    const user = {
        email: email,
        password: password,
        name: "Hello",
        role: "admin",
        adress: "HCM",
        avatar: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lm4dol2hyq5bda_tn.webp",
        phone: "0123456789",
    }
    return axios.post<IBackendRes<IUserLogin>>(url, { user: user, accessToken })
}

export const getAccountAPI = () => {
    const url = `/register/1`;
    return axios.get<IBackendRes<IUserLogin>>(url)
}

export const getTopRestaurant = (ref: string) => {
    const url = `/register/${ref}`;
    return axios.get<IBackendRes<IGroupRestaurants<ITopRestaurants[]>>>(url)
}