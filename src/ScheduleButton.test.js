import React from 'react';
import ReactDOM from 'react-dom';
import ScheduleButton from './ScheduleButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScheduleButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});