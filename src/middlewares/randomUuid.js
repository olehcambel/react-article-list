import { v4 } from 'node-uuid';

export default store => next => action => {
  return !action.getId ? next(action) : next({ ...action, uuid: v4() });
};
