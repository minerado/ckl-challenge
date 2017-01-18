import { combineReducers } from 'redux'


const menu = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_MENU':
            return action.menu
        default:
            return state
    }
}


export default combineReducers({
    menu,
})
