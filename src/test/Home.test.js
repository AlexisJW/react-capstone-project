import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Home from '../routes/Home';
import store from '../redux/store';

const configureStore = store;
const renderWithProviders = (ui, { initialState, store = configureStore(initialState) } = {}) => ({
  ...render(
    <Provider store={store}>
      <MemoryRouter>
        {ui}
      </MemoryRouter>
    </Provider>,
  ),
  store,
});

describe('Home component', () => {
  test('renders input for searching games', () => {
    renderWithProviders(<Home />);
    const searchInput = screen.getByPlaceholderText(/search game/i);
    expect(searchInput).toBeInTheDocument();
  });

  test('renders game items with titles and images', () => {
    const initialState = {
      games: {
        games: [
          { id: 1, title: 'Game 1', image: 'game1.jpg' },
          { id: 2, title: 'Game 2', image: 'game2.jpg' },
          { id: 3, title: 'Game 3', image: 'game3.jpg' },
        ],
      },
    };
    renderWithProviders(<Home />, { initialState });
    const gameTitles = screen.getAllByRole('heading', { level: 1 });
    expect(gameTitles).toHaveLength(3);
    const gameImages = screen.getAllByRole('img');
    expect(gameImages).toHaveLength(3);
  });

  test('filters games when search input is changed', () => {
    const initialState = {
      games: {
        games: [
          { id: 1, title: 'Game 1', image: 'game1.jpg' },
          { id: 2, title: 'Game 2', image: 'game2.jpg' },
          { id: 3, title: 'Game 3', image: 'game3.jpg' },
        ],
      },
    };
    renderWithProviders(<Home />, { initialState });
    const searchInput = screen.getByPlaceholderText(/search game/i);
    fireEvent.change(searchInput, { target: { value: '2' } });
    const gameTitles = screen.getAllByRole('heading', { level: 1 });
    expect(gameTitles).toHaveLength(1);
    expect(gameTitles[0]).toHaveTextContent('Game 2');
  });

  test('navigates to game detail page when a game item is clicked', () => {
    const initialState = {
      games: {
        games: [
          { id: 1, title: 'Game 1', image: 'game1.jpg' },
        ],
      },
    };
    const navigate = jest.fn();
    renderWithProviders(<Home />, { initialState });
    const gameItem = screen.getByRole('heading', { level: 1 });
    fireEvent.click(gameItem);
    expect(navigate).toHaveBeenCalledWith('/detail/1');
  });
});
