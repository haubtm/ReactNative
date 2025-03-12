declare global {
    interface IBackendRes<T> {
        error?: string | string[];
        message: string;
        statusCode: number | string;
        data?: T;
    }

    interface IRegister {
        id: string;
    }

    interface IUserLogin {
        user: {
            id: string;
            email: string;
            name: string;
            role: string;
            adress: any;
            avatar: string;
            phone: string;
        };
        accessToken: string;
    }
}
export { };