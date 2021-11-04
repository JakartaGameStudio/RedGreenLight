import './index.scss';

import LayoutContainer from 'components/LayoutContainer';
import SearchIcon from 'images/icons/search.svg';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <LayoutContainer>
    <h1>Hello</h1>
    <SearchIcon />
  </LayoutContainer>,
  document.getElementById('js-app'),
);
