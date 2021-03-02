import React from 'react';
import ReactDOM from 'react-dom';
import FindLeague from './FindLeague';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FindLeague />, div);
  ReactDOM.unmountComponentAtNode(div);
});