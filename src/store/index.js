import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import randomUuid from '../middlewares/randomUuid'

const enhancer = applyMiddleware(logger, randomUuid)

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), enhancer)

// dev only
window.store = store

export default store