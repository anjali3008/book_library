import { combineReducers } from "redux";

import authedUser from "./authedUser";
import booksReducer from "./booksReducer";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
    authedUser,
    booksReducer,
    loadingBar: loadingBarReducer
});
