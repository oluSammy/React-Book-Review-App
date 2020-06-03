import { combineReducers } from "redux";

import { persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import bookReducer from "./book/book.reducer";
import reviewReducer from './Review/review.reducer';   

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['book', 'reviews']
}

const rootReducer = combineReducers({
    user: userReducer,
    book: bookReducer,
    reviews: reviewReducer
}); 

export default persistReducer(persistConfig, rootReducer)