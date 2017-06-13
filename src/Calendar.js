import React, {Component} from 'react';
import DayPicker from "react-day-picker";
import "./Calendar.css"

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedDay: undefined}
  }

  handleDayClick = (day, {selected}) => {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  };

  render() {
    return (
      <DayPicker
        disabledDays={{daysOfWeek: [0]}}
        selectedDays={this.state.selectedDay}
        onDayClick={this.handleDayClick}
      />
    );
  }
}

export default Calendar;