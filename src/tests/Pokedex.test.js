import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import pokemons from '../data';
import renderWithRouter from './renderWithRouter';

describe('test the <Pokedex.js /> component', () => {
  test('test the heading and test the text page the page', () => {
    renderWithRouter(<App />);
    const heading = screen.getByRole('heading', {
      name: /Encountered pokémons/i,
      level: 2,
    });
    expect(heading).toBeInTheDocument();
  });

  test('the next pokemon must displayed when click on button', () => {
    renderWithRouter(<App pokemons={ pokemons } />);

    const button = screen.getByRole('button', {
      name: /Próximo pokémon/,
    });
    expect(button).toBeInTheDocument();

    const pokemon = screen.getAllByTestId('next-pokemon');
    pokemon.forEach((value, index) => {
      expect(value).toBeInTheDocument([index.name]);
      userEvent.click(button);
    });
  });

  test('Test if only one Pokémon is displayed at a time', () => {
    renderWithRouter(<App />);
    const image = screen.getAllByRole('img');
    expect(image).toHaveLength(1);
  });

  test('Test if Pokédex has filter buttons', () => {
    renderWithRouter(<App />);
    pokemons.forEach((pokemon) => {
      expect(screen.getByRole('button', { name: pokemon.type })).toBeInTheDocument();
    });

    const TypeButtons = screen.getAllByTestId('pokemon-type-button');
    expect(TypeButtons[4]).toBeInTheDocument(/psychic/i);
    userEvent.click(TypeButtons[4]);

    const actualPokemon = screen.getByTestId('pokemon-type');
    expect(actualPokemon).toBeInTheDocument(/psychic/i);

    const buttonAll = screen.getByRole('button', { name: /all/i });
    expect(buttonAll).toBeInTheDocument();
    userEvent.click(buttonAll);

    const namePokemon = screen.getByText(pokemons[0].name);
    expect(namePokemon).toBeInTheDocument();
  });
});
