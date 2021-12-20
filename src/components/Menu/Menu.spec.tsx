import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Menu } from './Menu';

const menuItems = [
  {
    text: 'Пункт1',
    url: '/punct1',
  },
  {
    text: 'Пункт2',
    url: '/punct2',
  },
];

describe('<Menu />', () => {
  test('should render menu items with url', () => {
    render(
      <Router>
        <Menu className="class" items={menuItems} />
      </Router>,
    );
    menuItems.forEach((item) => {
      expect(screen.getByText(item.text)).toHaveAttribute('href', item.url);
    });
  });
});
