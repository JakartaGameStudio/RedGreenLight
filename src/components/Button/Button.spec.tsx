import { render, screen } from '@testing-library/react';

import { Button } from './Button';

test('hello jest', () => {
  render(<Button>Hello, Jest!</Button>);
  expect(screen.getByText('Hello, Jest!')).toBeInTheDocument();
});
