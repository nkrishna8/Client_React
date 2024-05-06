import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:4000" });
const instance2 = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

let ENDPOITS = {
    LOGIN: '/user/login',
    SIGNUP: '/user/signup',
    LOGOUT:'/user/logout',
    ADD_FRIEND: '/user/addfriend',
    REMOVE_FRIEND: '/user/removefriend',
    MY_DATA_CHECK:'/users',
}
// const myURL="https://jsonplaceholder.typicode.com/users/";

export const loginApi = (payload) => {
    return instance.post(ENDPOITS.LOGIN, payload);
}
export const loginWithCookieApi = () => {
    return instance.get(ENDPOITS.LOGIN);
}
export const signUpApi = (payload) => {
    return instance.post(ENDPOITS.SIGNUP, payload);
}

export const addFriendApi = (payload) => {
    return instance.patch(ENDPOITS.ADD_FRIEND, payload);
}

export const removeFriendApi = (payload) => {
    return instance.patch(ENDPOITS.REMOVE_FRIEND, payload);
}

export const logoutApi = async(payload) => {
    return instance.get(ENDPOITS.LOGOUT);
}

export const myDataCheckApi = async(payload) => {
    return instance2.get(ENDPOITS.MY_DATA_CHECK, payload);
}

