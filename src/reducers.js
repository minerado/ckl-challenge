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

const is_fetching = (state = false, action) => {
    switch (action.type) {
        case 'REQUEST_POSTS':
            return true
        case 'RECEIVE_POSTS':
            return false
        default:
            return state
    }
}

export default combineReducers({
    is_fetching,
    menu,
    posts,
})
