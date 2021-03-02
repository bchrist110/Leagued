import React from 'react';
import ReactDOM from 'react-dom';
import TeamStats from './TeamStats';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TeamStats />, div);
  ReactDOM.unmountComponentAtNode(div);
});