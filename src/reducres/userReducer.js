import { addFriendApi, loginApi, loginWithCookieApi, logoutApi, myDataCheckApi } from "../apiUtils";
import axios from 'axios';

const initialState = {
    name: "",
    username: "",
    success: false,
    message: "",
    friendList: [],
    MyUserList: [],
    loading: false,

}

const ACTIONS = {

    LOGIN: "LOGIN",
    SIGNUP: "SIGNUP",
    ADD_FRIEND: "ADDFRIEND",
    REMOVE_FRIEND: "REMOVEFRIEND",
    MY_DATA: "MYDATA",
    ERROR: "ERROR",
    MESSAGE: "MESSAGE",
    LOADING: "LOADING",
    LOGOUT: "LOGOUT",
}

const errorActionCreator = (payload) => {
    return { type: ACTIONS.ERROR, payload }
}

const messageActionCreator = (payload = null) => {
    return { type: ACTIONS.MESSAGE, payload }
}

const loadingActionCreator = (payload = false) => {
    return { type: ACTIONS.LOADING, payload }
}

export const asyncActionCreator = (type, apiHelper, apiPayload) => {
    // console.log("loginActionCreatorloginActionCreator",payload);
    return async (dispatch) => {
        try {
            dispatch(messageActionCreator());
            dispatch(loadingActionCreator(true));
            const { data } = await apiHelper(apiPayload);
            console.log("asyncActionCreator_Data ====>>>", data);
            dispatch({ type, payload: data })
        } catch (error) {
            console.error(error.response.data);
            dispatch(errorActionCreator(error.response.data));

        } finally {
            dispatch(loadingActionCreator(false));
        }
    }


}

export const loginActionCreator = (payload) => {
    // console.log("loginActionCreatorloginActionCreator",payload);
    // return async (dispatch) => {
    //     try {
    //         const { data } = await loginApi(payload);
    //         console.log("loginActionCreator====>>>", data);
    //         dispatch({ type: ACTIONS.LOGIN, payload: data })
    //     } catch (error) {
    //         console.error(error.response.data);
    //         dispatch(errorActionCreator(error.response.data));

    //     }
    // }
    return asyncActionCreator(ACTIONS.LOGIN, loginApi, payload);

}

export const myDataCheckActionCreator = (data = "") => {
    console.log("myDataCheck+++", data);
    // return async (dispatch) => {
    //     try {
    //         const { data } = await myDataCheckApi();
    //         // console.log("myDataApimyDataApi====>>>", data);
    //         dispatch({ type: ACTIONS.MY_DATA, payload: data });
    //     } catch (error) {
    //         console.log("Error occurred:", error);
    //         dispatch(errorActionCreator(error.response.data));
    //     }
    // }
    return asyncActionCreator(ACTIONS.MY_DATA, myDataCheckApi, data);

}

// export const myDataCheckActionCreator = () => {
//     return async (dispatch) => {
//         console.log("myDataCheckActionCreator is called");
//         try {
//             const { data } = await myDataCheckApi(); // Assuming myDataCheckApi returns a Promise
//             console.log("myDataApi Data:", data);
//             dispatch({ type: ACTIONS.MY_DATA, payload: data });
//         } catch (error) {
//             console.log("Error occurred:", error);
//         }
//     }
// }


export const cookieLoginActionCreator = () => {
    console.log("loginActionCreatorloginActionCreator");
    console.log(initialState);
    return async (dispatch) => {
        try {
            const { data } = await loginWithCookieApi();
            console.log("loginActionCreator====>>>", data);
            dispatch({ type: ACTIONS.LOGIN, payload: data })
        } catch (error) {
            console.log(error);
        }
    }


}

export const addFriendActionCreator = (apiPayload) => {
    // return ({ type: ACTIONS.DECREMENT, payload:payload })
    console.log("APIIIII=>>>", apiPayload);
    return async (dispatch) => {
        try {
            dispatch(messageActionCreator());
            const { data } = await addFriendApi(apiPayload);
            console.log("addFriendApiaddFriendApi====>>>", data);
            dispatch({ type: ACTIONS.ADD_FRIEND, payload: data })
        } catch (error) {
            console.log(error);
        }
    }

}


export const removeFriendActionCreator = () => {
    console.log("removeFriendActionCreatorremoveFriendActionCreator");
    // return ({ type: ACTIONS.RESET, payload: 0 })
}

export const logoutActionCreator = () => {
    return asyncActionCreator(ACTIONS.LOGOUT, logoutApi);

}

export const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ACTIONS.LOGIN:
            const { name, username, friendList } = payload.data;
            const { message, success } = payload;
            return { ...state, name, username, friendList, message, success }
        case ACTIONS.ADD_FRIEND:
            // const { name, username, friendList, message } = payload.data;
            return { ...state, friendList: payload.data }
        case ACTIONS.REMOVE_FRIEND:
            return { ...state, friendList: payload.data }
        case ACTIONS.MY_DATA:
            return { ...state, MyUserList: payload, success: true, message: "Data Fetched Complete" }
        case ACTIONS.LOADING:
            return { ...state, loading: payload }
        case ACTIONS.LOGOUT:
            const getMessage = payload.message;
            const getSuccessStatus=payload.success;
            return { ...initialState, message:getMessage, success:getSuccessStatus}

        case ACTIONS.ERROR:
            return { ...state, message, success }
            break;

        case ACTIONS.RESET:
            return initialState;
        default:
            return state;
            break;
    }
}