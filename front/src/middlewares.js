import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import { getEnv } from './libs/util'


//-------------------------------------------------------------------//
// To use a middleware, import it and then put it in the `middlewares`
// array in the following object:
//     { use: your_middleware_object, env: `production`}
//
// env can be set to:
//     production
//     development
//
// If env is not specified, the middleware runs in every environment.
//-------------------------------------------------------------------//

const middlewares = [
    {
        use: createLogger(),
        env: 'development'
    },
    {
        use: thunk,
    },
]

const setMiddlewares = (middlewares, env) =>
    middlewares
        .filter(m => (m.env === env || !m.env))
        .map(m => m.use)


export default setMiddlewares(middlewares, getEnv())
