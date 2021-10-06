import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('Check hole TODO', () => {
  test('renders todo header', () => {
    render(<App />);
    const headerElemen = screen.getByText('TODOS');
    expect(headerElemen).toBeInTheDocument();
    // Todo Header
    // Input exist
    // Button Exist
    // Typing Input and Press button remove input
  });
  test('renders todo input', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText('add todo')
    expect(inputElement).toBeInTheDocument();
  });

  test('renders add todo button', () => {
    render(<App />);
    const addTodoItemElement = screen.getByRole('button')
    expect(addTodoItemElement).toBeInTheDocument();
  });

  test('press todo button', async () => {
    render(<App />);
    const addTodoItemElement = screen.getByRole('button')
    expect(addTodoItemElement).toBeInTheDocument();
    await userEvent.type(screen.getByPlaceholderText('add todo'), 'test todo');
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByPlaceholderText('add todo')).toHaveValue("")
  });
})

