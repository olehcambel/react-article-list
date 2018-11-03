import React from 'react';
import App from './App';
import store from '../store'
import {Provider} from 'react-redux'

const Root = () => (
  <Provider store={store} >
    <App  />
  </Provider>
);

export default Root;
