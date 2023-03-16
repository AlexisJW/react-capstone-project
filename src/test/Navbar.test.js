import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toBeInTheDocument();
  });

  it('contains a back button', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const backButton = screen.getByAltText('back');
    expect(backButton).toBeInTheDocument();
  });

  it('contains a microphone button', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const micButton = screen.getByAltText('mic');
    expect(micButton).toBeInTheDocument();
  });

  it('contains a settings button', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const settingsButton = screen.getByAltText('setting');
    expect(settingsButton).toBeInTheDocument();
  });

  it('contains the current year', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const currentYear = new Date().getFullYear();
    const yearElement = screen.getByText(currentYear);
    expect(yearElement).toBeInTheDocument();
  });
});