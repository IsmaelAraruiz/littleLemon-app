import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

jest.mock('../Hero', () => () => <div>Mocked Hero Component</div>);
jest.mock('../Menu', () => () => <div>Mocked Menu Component</div>);

describe('Home', () => {
    test('renderiza los componentes Hero y Menu', () => {
        render(<Home />);

        const heroElement = screen.getByText(/Mocked Hero Component/i);
        const menuElement = screen.getByText(/Mocked Menu Component/i);

        expect(heroElement).toBeInTheDocument();
        expect(menuElement).toBeInTheDocument();
    });

    test('tiene la clase mainContent', () => {
        const { container } = render(<Home />);


        const mainContentElement = container.querySelector('div');
        expect(mainContentElement).toHaveClass('mainContent');
    });
});


//? The test renders the Home component and checks two things:

//? It ensures that the mocked Hero and Menu components are rendered by checking for specific text.
//? It verifies that the main div element in the Home component has the correct CSS class, mainContent.
//? Both tests ensure proper rendering and styling of the component.