import * as types from '../constants'


const defaultFilter = {
  selection: []
}

export default (filter=defaultFilter, action) =>{
  switch(action.type) {
    case types.FILTER_RANGE_SELECTION:
      return {
        ...filter, selection: action.payload.selection
      }
    default: return filter
  }
}