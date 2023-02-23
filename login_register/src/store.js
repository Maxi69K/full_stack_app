import { legacy_createStore, combineReducers } from 'redux';
import { userReducer } from './pages/login/store/reducer';

const store = combineReducers({
    userStore: userReducer
})

export default legacy_createStore(store);