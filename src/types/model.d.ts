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

    interface IGroupRestaurants<T> {
        id: string;
        restaurant: T;
    }

    interface ITopRestaurants {
        id: string;
        name: string;
        phone: string;
        address: string;
        email: string;
        image: string;
        rating: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }
}
export { };