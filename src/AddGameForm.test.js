import React from 'react';
import ReactDOM from 'react-dom';
import AddGameForm from './AddGameForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddGameForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});