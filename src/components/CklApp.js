import React from 'react'
import { Provider } from 'react-redux'

import configureStore from '../store'

import Header from './Header'
import PostList from './PostList'

const store = configureStore()

const CklApp = () => (
    <Provider store={store}>
        <div>
            <Header />
            <PostList />
        </div>
    </Provider>
)


export default CklApp
