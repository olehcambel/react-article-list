import * as types from '../constants'


const defaultFilter = {
  selection: [],
  period: {from: null, to: null}
}

export default (filter=defaultFilter, action) =>{
  switch(action.type) {
    case types.FILTER_RANGE_SELECTION:
      return {
        ...filter, selection: action.payload.selection
      }
    case types.FILTER_RANGE_PERIOD:
    const {from, to} = action.payload.period
      return {
        ...filter, period: {from, to}
      }
    default: return filter
  }
}