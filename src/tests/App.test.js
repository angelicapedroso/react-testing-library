import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
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

  test('test redirect when click home link', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });

  test('test redirect when click about link', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');
    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  });

  test('test redirect when click favorite pokémons link', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorites');
    const { location: { pathname } } = history;
    expect(pathname).toBe('/favorites');
  });

  test('test redirect to unknown page', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/NotFound');
    const notFound = screen.getByText('Page requested not found');
    expect(notFound).toBeInTheDocument();
  });
});
