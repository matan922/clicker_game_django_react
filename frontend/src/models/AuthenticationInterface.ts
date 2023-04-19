export interface AuthState {
    username: string;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    isLogged: boolean;
    message: string;
}

export interface Register {
    username: string;
    first_name: string;
    last_name: string;
    password: string;
    password2: string;
    email: string;
}

export interface Login {
    username: string;
    password: string;
}