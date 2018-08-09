import axios from 'axios';

export default store => next => action => {
  const { callAPI } = action;
  if (!callAPI) return next(action);

  setTimeout(() => {

    axios(callAPI)
      .then(response => next({ ...action, response: response.data }))
      .catch(error =>
        console.log('%c error', 'color: red; font-size: 20px', error)
      );
  }, 3000)

};
