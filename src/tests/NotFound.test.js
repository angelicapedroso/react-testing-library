import { render, screen } from '@testing-library/react';
import React from 'react';
import NotFound from '../components/NotFound';

describe('test the <NotFound.js /> component', () => {
  test('test if the image contain a heading h2 and test the text', () => {
    render(<NotFound />);
    const title = screen.getByRole('heading', {
      name: /Page requested not found/i,
      level: 2,
    });
    expect(title).toBeInTheDocument();
  });

  test('check the image', () => {
    render(<NotFound />);
    const imagem = screen.getByAltText(
      'Pikachu crying because the page requested was not found',
    );
    expect(imagem).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
