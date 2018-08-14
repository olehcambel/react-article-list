import React from 'react';
import spinner from '../puppy-dog-spinner.gif';

const Loader = props => (
  <div>
    <img src={spinner} alt='loading..' />
  </div>
);

export default Loader;
