import { render, screen } from '@testing-library/react';
import React from 'react';
import FavoritePokemons from '../components/FavoritePokemons';

describe('test the <FavoritePokemons.js /> component', () => {
  test('tests the displayed message for the absence of favorite pokemons', () => {
    render(<FavoritePokemons />);
    const message = screen.getByText('No favorite pokemon found');
    expect(message).toBeInTheDocument();
  });

  test('all favorite pokemon cards must be displayed', () => {
    render(<FavoritePokemons />);
    const allFavoritePokemons = screen.getAllByTestId('favorite-pokemons');
    allFavoritePokemons.forEach((favorite, index) => {
      expect(favorite).toBeInTheDocument([index].name);
    });
  });
});
