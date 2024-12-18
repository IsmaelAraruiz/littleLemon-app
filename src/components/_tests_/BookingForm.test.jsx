import React from 'react';
import { render, screen } from "@testing-library/react";
import BookingForm from '../BookingForm';

test('Renders the BookingForm heading', () => {

    render(<BookingForm availableTimes={[]} occasions={[]} updateTimes={() => { }} />);


    const headingElement = screen.getByText("Reservation");
    expect(headingElement).toBeInTheDocument();
});

//? This test checks if the BookingForm component correctly renders the "Reservation" heading.
//? We use empty or default props to avoid errors caused by dynamic data used in other elements of the component.
