const {
    REGISTER_USER,
    LOGIN_USER,
    CURRENT_USER,
    LOGOUT_USER,
} = require("../constants/actions-types");

const initialState = {
    user: {},
    isAuth: false,
    load: false,
    role: "",
};

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        // case REGISTER_USER:
        //     return { ...state, user: payload.user, load: false, isAuth: false };
        case LOGIN_USER:
            localStorage.setItem("token", payload.token);
            return { ...state, load: false, isAuth: true, role: payload.role };
        case LOGOUT_USER:
            localStorage.removeItem("token");
            return { ...state, user: {}, isAuth: false, current: false };
        case CURRENT_USER:
            return { ...state, user: payload.user, currentV: true };
        default:
            return state;
    }
};

export default userReducer;
