import * as types from '../constants';
import axios from 'axios';

export default store => next => action => {
  const { callAPI, type, ...rest } = action;
  if (!callAPI) return next(action);
  next({
    type: type + types.START,
    ...rest
  });

  setTimeout(() => {
    axios(callAPI)
      .then(response =>
        next({
          type: type + types.SUCCESS,
          response: response.data,
          ...rest
        })
      )
      .catch(error => {
        console.log('%c error', 'color: red; font-size: 20px', error);
        next({ type: type + types.FAIL, error, ...rest });
      });
  }, 1000);
};
