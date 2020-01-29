import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('render the correct fizzbuzz sequence up to 15', () => {

  render(<App />);

  fireEvent.change(screen.getByLabelText(/upperLimit/i), {
    target: {value: 15},
  })

  fireEvent.change(screen.getByLabelText(/divisor/i), {
    target: {value: 3},
  })

  fireEvent.change(screen.getByLabelText(/replacement/i), {
    target: {value: 'fizz'},
  })

  fireEvent.click(screen.getByText('apply'))

  fireEvent.change(screen.getByLabelText(/divisor/i), {
    target: {value: 5},
  })

  fireEvent.change(screen.getByLabelText(/replacement/i), {
    target: {value: 'buzz'},
  })

  fireEvent.click(screen.getByText('apply'))
 
  const correctAnswer = '<p>1</p><p>2</p><p>fizz</p><p>4</p><p>buzz</p><p>fizz</p><p>7</p><p>8</p><p>fizz</p><p>buzz</p><p>11</p><p>fizz</p><p>13</p><p>14</p><p>fizzbuzz</p>';

  expect(document.getElementById("results").innerHTML).toEqual(correctAnswer);

});