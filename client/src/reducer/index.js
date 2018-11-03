import {combineReducers} from 'redux'
import count from './counter'
import articles from './articles'
import filters from './filters'
import comments from './comments'
import {routerReducer} from 'react-router-redux'

export default  combineReducers({
  count, articles, comments, filters, router: routerReducer
})