export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';


export function loginUser(user) {
    return {
        type: LOGIN_USER,
        user
    }
}

export function registerUser(user) {
    return {
        type: REGISTER_USER,
        user
    }
}