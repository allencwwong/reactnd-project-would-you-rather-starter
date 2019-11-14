import { combineReducers } from 'redux';
import userReducer from './users';
import questionsReducer from './questions';
import authUserReducer from './authUser';

export default combineReducers({
    users: userReducer,
    questions: questionsReducer,
    authUser: authUserReducer,
});
