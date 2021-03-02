import React from 'react';
import ReactDOM from 'react-dom';
import ScheduleContent from './ScheduleContent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScheduleContent />, div);
  ReactDOM.unmountComponentAtNode(div);
});