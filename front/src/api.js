import fakeBackend from './backend/backend'


export const getFilteredPosts = (filter = '') =>
    fakeBackend.get(`/api/posts/${filter}`)
