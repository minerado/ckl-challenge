import fakeBackend from './backend/backend'
import http from 'axios'

export const getFilteredPosts = (filter = '') =>
    http.get(`/api/posts/${filter}`)
