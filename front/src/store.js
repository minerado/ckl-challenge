import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import cklApp from './reducers'


export default () => {
    const middlewares = [
        createLogger(),
        thunk,
    ]

    return createStore(
        cklApp,
        applyMiddleware(...middlewares)
    )
}
