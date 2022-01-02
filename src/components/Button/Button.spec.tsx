import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Button } from './Button';

describe('<Button />', () => {
  test('should render button inner text', () => {
    render(<Button>Button</Button>);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  test('should call onClick callback', () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Button</Button>);

    fireEvent.click(screen.getByText('Button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('should render link', () => {
    const path = '/game';

    render(
      <Router>
        <Button href={path}>Link</Button>
      </Router>,
    );

    const link = screen.getByText('Link');

    expect(link).toHaveAttribute('href', path);

    fireEvent.click(link);
    expect(window.location.pathname).toBe(path);
  });
});
