import React from 'react';
import { screen, render } from '@testing-library/react';
import About from '../components/About';

describe('Test the <About.js /> component', () => {
  test('the page must contain a heading h2 with the text "About Pokédex"', () => {
    render(<About />);
    const title = screen.getByRole('heading', { name: /about pokédex/i, level: 2 });
    expect(title).toBeInTheDocument();
  });

  test('the page must contain two paragraphs with text about pokedex', () => {
    render(<About />);
    const paragraphs = screen.getAllByText(/Pokémons/);
    expect(paragraphs).toHaveLength(2);
  });

  test('check the pokedex image', () => {
    render(<About />);
    const pokedexImg = screen.getByAltText('Pokédex');
    expect(pokedexImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
