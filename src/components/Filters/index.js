import React, { Fragment } from 'react';

import RangeDayPicker from './RangeDayPicker';
import SelectFilter from './SelectFilter';

const Filters = () => (
  <Fragment>
    <SelectFilter />
    <RangeDayPicker />
  </Fragment>
);

export default Filters;
