import { unmountComponentAtNode } from 'react-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { RadioButton } from './RadioButton';

let container = null as any;
const labels = ['1', '2', '3'];

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('Makes buttons with these labels', () => {
  render(
    <RadioButton
      buttonLabel1={labels[0]}
      buttonLabel2={labels[1]}
      buttonLabel3={labels[2]}
    />,
    container
  );

  const buttons = screen.getAllByRole('button');
  expect(buttons[0].innerHTML).toBe(labels[0]);
  expect(buttons[1].innerHTML).toBe(labels[1]);
  expect(buttons[2].innerHTML).toBe(labels[2]);
});

test('Only one item can be active', () => {
  render(
    <RadioButton
      buttonLabel1={labels[0]}
      buttonLabel2={labels[1]}
      buttonLabel3={labels[2]}
    />,
    container
  );

  const buttons = screen.getAllByRole('button');

  expect(buttons[0].className).toBe('');
  expect(buttons[1].className).toBe('');
  expect(buttons[2].className).toBe('');

  fireEvent.click(buttons[0]);

  expect(buttons[0].className).toBe('active');
  expect(buttons[1].className).toBe('');
  expect(buttons[2].className).toBe('');

  fireEvent.click(buttons[1]);
  expect(buttons[0].className).toBe('');
  expect(buttons[1].className).toBe('active');
  expect(buttons[2].className).toBe('');

  fireEvent.click(buttons[2]);
  expect(buttons[0].className).toBe('');
  expect(buttons[1].className).toBe('');
  expect(buttons[2].className).toBe('active');
});
