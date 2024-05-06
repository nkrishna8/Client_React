const initialState = {
    count: 100
}

const ACTIONS = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    RESET: "RESET"
}

export const incrementActionCreator = (payload=1) => {
    return ({ type: ACTIONS.INCREMENT, payload: payload })
}

export const decrementActionCreator = (payload=1) => {
    return ({ type: ACTIONS.DECREMENT, payload:payload })
}


export const resetActionCreator = () => {
    return ({ type: ACTIONS.RESET, payload: 0 })
}

export const countReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ACTIONS.INCREMENT:
            let copyState = { ...state };
            copyState.count = state.count + payload;
            return copyState
            break;

        case ACTIONS.DECREMENT:
            return { ...state, count: state.count - payload }
            break;

        case ACTIONS.RESET:
            return initialState;
        default:
            return state;
            break;
    }
}