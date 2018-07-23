import React, {Component} from 'react'

import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SelectFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selection: null
    };
    this.changeSelected = this.changeSelected.bind(this);

  }

  render() {
    return(
      <Select
          onChange={this.changeSelected}
          value={this.state.selection}
          options={this.props.options}
          // multi
        />
    )
  }

  changeSelected(selection) {
    this.setState({ selection });
  }
}

export default SelectFilter