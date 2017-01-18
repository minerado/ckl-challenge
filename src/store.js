import { createStore } from 'redux'

import cklApp from './reducers'


export default () => {
    return createStore(cklApp)
}
