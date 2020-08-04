const { default: authReducer } = require("./auth");
const { combineReducers } = require("redux");

const rootReducers = combineReducers({
  auth: authReducer,
});

export default rootReducers;
