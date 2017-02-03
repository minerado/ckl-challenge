import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import CklApp from './CklApp'


const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/(:filter)' component={CklApp}/>
        </Router>
    </Provider>
)


export default Root
