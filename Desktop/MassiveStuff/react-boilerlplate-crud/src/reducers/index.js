import { combineReducers } from 'redux';
import appReducer from './appReducer';
import LoginReducer from './loginReducer';
import ImageReducer from './ImageReducer'
// import reducers from the reducers export all, making this as root reducer
// export default combineReducers({
// })
export default combineReducers({
    appReducer,
    LoginReducer,
    ImageReducer
});