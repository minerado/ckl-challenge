import { createStore, applyMiddleware } from 'redux'

import middlewares from './middlewares'
import cklApp from './reducers'


export default createStore(
    cklApp,
    applyMiddleware(...middlewares)
)
