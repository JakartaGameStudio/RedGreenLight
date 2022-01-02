import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Menu } from './Menu';

const menuItems = [
  {
    text: 'item1',
    url: '/item1',
  },
  {
    text: 'item2',
    url: '/item2',
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
