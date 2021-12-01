import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../services/renderWithRouter';
import App from '../App';

describe('Test the <App.js /> component', () => {
  test('The application must have a fixed set of navigation links', () => {
    renderWithRouter(<App />);

    const home = screen.getByRole('link', { name: /home/i });
    expect(home).toBeInTheDocument();

    const about = screen.getByRole('link', { name: /about/i });
    expect(about).toBeInTheDocument();

    const favoritePokemons = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(favoritePokemons).toBeInTheDocument();
  });
});
