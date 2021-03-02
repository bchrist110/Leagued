import React from 'react';
import ReactDOM from 'react-dom';
import StandingForTeam from './StandingForTeam';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StandingForTeam />, div);
  ReactDOM.unmountComponentAtNode(div);
});