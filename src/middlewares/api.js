import * as types from '../constants';
import axios from 'axios';

export default store => next => action => {
  const { callAPI, type, ...rest } = action;
  if (!callAPI) return next(action);
  next({
    ...rest,
    type: type + types.START
  });

  setTimeout(() => {
    axios(callAPI)
      .then(response =>
        next({ ...rest, type: type + types.SUCCESS, response: response.data })
      )
      .catch(error => {
        console.log('%c error', 'color: red; font-size: 20px', error);
        next({ type: type + types.FAIL, ...rest, response: error });
      });
  }, 3000);
};
