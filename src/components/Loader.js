import React, {Fragment} from 'react';
import spinner from '../puppy-dog-spinner.gif';

const Loader = props => (
  <Fragment>
    <img src={spinner} alt='loading..' />
  </Fragment>
);

export default Loader;
