import { render, screen } from '@testing-library/react';
import App from './App';

test('renders label to select grid size', () => {
  render(<App />);
  const textElement = screen.getByText(/Select a grid size/i);
  expect(textElement).toBeInTheDocument();
});
