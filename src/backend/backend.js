import db from './db'


// Helper functions -----------
const getLastWordFrom = path =>
    path.split('/').pop()
//-----------------------------


const fetch = (filter = '') =>
    new Promise(r => setTimeout(() => filter ? r(db.filter(p => p.tag.toLowerCase() === filter))
                                             : r(db)
                                , Math.random() * 2000 + 1000))

export default {
    get (path) {
        switch (path) {
            case '/api/posts':
            case '/api/posts/':
                return fetch()
            case '/api/posts/politics':
            case '/api/posts/sports':
            case '/api/posts/tech':
            case '/api/posts/science':
            case '/api/posts/business':
                return fetch(getLastWordFrom(path))
            default:
                throw new Error('that\'s not a valid path!')
        }
    }
}

