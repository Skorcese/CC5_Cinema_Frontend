import { combineReducers } from 'redux';

function dummy(state = 'change me', action){
    return 'change me'
}

export default combineReducers({
    dummy
})