export interface AuthState {
    username: string;
    isLoading: boolean;
    isSuccess: boolean;
    message: string;
}

export interface Register {
    username: string;
    password: string;
    password2: string;
    email: string;
}