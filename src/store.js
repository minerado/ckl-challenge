import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

import cklApp from './reducers'


export default () => {
    const middlewares = [
        createLogger()
    ]

    return createStore(
        cklApp,
        applyMiddleware(...middlewares)
    )
}
