import * as types from '../constants'
import { v4 } from 'node-uuid';


export default store => next => action => {
  switch (action.type) {
    case types.COMMENT_ADD:
  return next({...action, payload: {...action.payload, id: v4()}})
    
  
  // Object.assign({}, action, {payload: {data: {id: 999, user: action.payload.data.user, message: action.payload.data.message}}})
  // Object.assign({}, action, {payload: {data: {...action.payload.data, id: 999}}})
  //                {...action, payload: {data: {...action.payload.data, id: 999}}}


  // articleState[action.payload.data.articleId]

//   let {data} = action.payload;
// Object.assign({}, articleState, {[data.articleId]: {articleState[data.articleId].comments, data.id}})
    default: 
      return next(action)
  }
}