import React, {Component} from 'react'

import RangeDayPicker from './RangeDayPicker';
import SelectFilter from './SelectFilter';

class Filters extends Component {
  

  render() {
    const options = this.props.articles.map(article => ({
      label: article.title,
      value: article.id
    }));
    return(
      <div>
         <SelectFilter options={options} />
        <RangeDayPicker />

      </div>
    )
  }

 
}

export default Filters