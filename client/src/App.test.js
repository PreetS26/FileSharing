import { render, screen } from '@testing-library/react';
import App from './App';
// these all are the prefetched libraries from the nmp i package and uses the localhost to run the front end
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
