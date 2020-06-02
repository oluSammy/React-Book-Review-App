import { combineReducers } from "redux";

import userReducer from './user/user.reducer';
import bookReducer from "./book/book.reducer";

export default combineReducers({
    user: userReducer,
    book: bookReducer
}); 