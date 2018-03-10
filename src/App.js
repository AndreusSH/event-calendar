import React, { Component } from 'react';

import './App.css';
import moment from 'moment'

import BigCalendar from 'react-big-calendar'
// a localizer for BigCalendar

import { getEvents } from './gcal'
 
import BigCalendarCSS from 'react-big-calendar/lib/css/react-big-calendar.css';
// a localizer for BigCalendar



 
BigCalendar.momentLocalizer(moment)

class App extends Component {


 constructor () {
    super()
    this.state = {
      events: []
    }
  }
  componentDidMount () {
    getEvents((events) => {
      this.setState({events})
    })
}

  render() {
    return (
      <div className="App">
       <BigCalendar
        style={{height: '420px'}}
        events={this.state.events}
/>
      </div>
    )
  }
}

export default App;
