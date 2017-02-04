import { getFilteredPosts } from './api'


const receivePosts = (posts) => ({
    posts,
    type: 'RECEIVE_POSTS',
})

const requestPosts = () => ({
    type: 'REQUEST_POSTS',
})


export const toggleMenu = (menu) => ({
    menu: !menu,
    type: 'TOGGLE_MENU',
})

export const fetchPosts = filter => (dispatch, getState) => {
    dispatch(requestPosts())

    return getFilteredPosts(filter).then(res => dispatch(receivePosts(res.data.posts)))
}
