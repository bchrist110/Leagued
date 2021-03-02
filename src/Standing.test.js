import React from 'react';
import ReactDOM from 'react-dom';
import Standing from './Standing';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Standing />, div);
  ReactDOM.unmountComponentAtNode(div);
});