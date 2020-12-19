import { render, screen } from '@testing-library/react';
import { Reactivities } from './App';

test('renders learn react link', () => {
  render(<Reactivities />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
