import React from 'react'
import ReactDOM from 'react-dom'

import store from './store'
import Root from './components/Root'

import '../style/bundle.sass'


ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
)
