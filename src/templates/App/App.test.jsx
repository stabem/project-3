import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/render-themes';

describe('<Home />', () => {
  it('should render', () => {
    renderTheme(<Home />);
  });
});
