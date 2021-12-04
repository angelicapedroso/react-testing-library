// segunda parte foi feat com abuja do Pedro Lima

import { render, screen } from '@testing-library/react';
import React from 'react';
import FavoritePokemons from '../components/FavoritePokemons';
import renderWithRouter from './renderWithRouter';
import pokemons from '../data';

describe('test the <FavoritePokemons.js /> component', () => {
  test('tests the displayed message for the absence of favorite pokemons', () => {
    render(<FavoritePokemons />);
    const message = screen.getByText('No favorite pokemon found');
    expect(message).toBeInTheDocument();
  });

  test('all favorite pokemon cards must be displayed', () => {
    renderWithRouter(<FavoritePokemons pokemons={ pokemons } />);
    const allFavoritePokemons = screen.getAllByTestId('pokemon-name');
    allFavoritePokemons.forEach((favorite, index) => {
      expect(favorite).toBeInTheDocument([index].name);
    });
  });
});
