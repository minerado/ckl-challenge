import { combineReducers } from 'redux'


const menu = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_MENU':
            return action.menu
        default:
            return state
    }
}

const posts = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_POSTS':
            return action.posts
        default:
            return state
    }
}


export default combineReducers({
    menu,
    posts,
})
