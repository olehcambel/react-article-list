import * as types from '../constants'

export default (count = 0, action) => {
  switch(action.type){
    case types.INCREMENT:
      return count + 1
    default: return count
  }
}