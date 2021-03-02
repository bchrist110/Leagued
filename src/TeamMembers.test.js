import React from 'react';
import ReactDOM from 'react-dom';
import TeamMembers from './TeamMembers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TeamMembers />, div);
  ReactDOM.unmountComponentAtNode(div);
});