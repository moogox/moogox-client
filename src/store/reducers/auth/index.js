let defaultState = {
  isSignedIn: false,
  user: null,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "AUTH/SET_IS_SIGNED_IN":
      return {
        ...state,
        isSignedIn: true,
      };
    case "AUTH/SET_USER_IS_LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
