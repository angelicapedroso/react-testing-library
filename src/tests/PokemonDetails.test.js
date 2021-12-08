import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const moreDetails = 'More details';

describe('Test the <PokemonDetails.js /> component', () => {
  test('The pokemon details must displayed', () => {
    renderWithRouter(<App />);

    const detailsLink = screen.getByText(moreDetails);
    userEvent.click(detailsLink);
    expect(detailsLink).not.toBeInTheDocument();

    const title = screen.getByRole('heading', {
      level: 2, name: 'Pikachu Details',
    });
    expect(title).toBeInTheDocument();

    const summary = screen.getByRole('heading', {
      level: 2, name: 'Summary',
    });
    expect(summary).toBeInTheDocument();

    const paragraph = /This intelligent Pokémon roasts hard berries/;
    const summaryParagraph = screen.getByText(paragraph);
    expect(summaryParagraph).toBeInTheDocument();
  });

  test('The page section must contain the Pokémon location', () => {
    renderWithRouter(<App />);
    const detailsLink = screen.getByText(moreDetails);
    userEvent.click(detailsLink);

    const heading = screen.getByRole('heading', {
      level: 2, name: 'Game Locations of Pikachu',
    });
    expect(heading).toBeInTheDocument();

    const TextLocationOne = screen.getByText(/Kanto Viridian Forest/i);
    expect(TextLocationOne).toBeInTheDocument();

    const TextLocationTwo = screen.getByText(/Kanto Power Plant/i);
    expect(TextLocationTwo).toBeInTheDocument();

    const imageLocation = screen.getAllByAltText('Pikachu location');
    expect(imageLocation[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(imageLocation[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  test('the bookmarking pokemon checkbox must be displayed', () => {
    renderWithRouter(<App />);
    const detailsLink = screen.getByText(moreDetails);
    userEvent.click(detailsLink);

    const checkbox = screen.getByLabelText('Pokémon favoritado?');
    expect(checkbox).toBeInTheDocument();
  });
});
