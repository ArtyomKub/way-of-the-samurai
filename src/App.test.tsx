import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const state = {
  posts: [],
  dialogs: [],
  messages: []
}

test('renders learn react link', () => {
  render(<App appState={state}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
