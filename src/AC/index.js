import * as types from '../constants'
export  function increment() {
  return {
    type: types.INCREMENT
  }
}

export  function removeArticle(id) {
  return {
    type: types.ARTICLE_REMOVE, 
    payload: {id}
  }
}

export function changeSelection(selection) {
  return {
    type: types.FILTER_RANGE_SELECTION,
    payload: {selection}
  }
}

