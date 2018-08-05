import React, { Fragment } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import './index.css';
import 'react-day-picker/lib/style.css';
import { connect } from 'react-redux';

import {changePeriod} from '../../../AC'

class RangeDayPicker extends React.Component {


  render() {
    const { from, to } = this.props.period;

    debugger
    const modifiers = { start: from, end: to };
    return (
      <div className="RangeExample">
        <Fragment>
          <DayPicker
            className="Selectable"
            numberOfMonths={this.props.numberOfMonths}
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            onDayClick={this.handleDayClick}
            // onDayClick={this.handleDayClick}
          />
          <div>
            {!from && !to && <span>Please select the first day.</span>}
            {from && !to && <span>Please select the last day.</span>}
            {from &&
              to && (
                <span>
                  Selected from {from.toLocaleDateString()} to ${to.toLocaleDateString()}
                </span>
              )}
            {from &&
              to && (
                <button className="link" onClick={this.handleResetClick}>
                  Reset
                </button>
              )}
          </div>
        </Fragment>
      </div>
    );
  }

  handleDayClick = day => {

    const range = DateUtils.addDayToRange(day, this.props.period);
    this.props.changePeriod(range)
  };
  handleResetClick = () => {
    this.props.changePeriod({from: null, to: null})
  };
}

RangeDayPicker.defaultProps = {
  numberOfMonths: 1
};

const mapStateToProps = state => {
  debugger
  return {
    period: state.filters.period
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
   changePeriod: (period) => dispatch(changePeriod(period))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RangeDayPicker);
