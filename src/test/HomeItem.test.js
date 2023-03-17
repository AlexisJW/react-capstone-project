import React from 'react';
import { render } from '@testing-library/react';
import HomeItem from '../components/HomeItem';

describe('HomeItem component', () => {
  const props = {
    title: 'Test Game',
    image: 'test.jpg',
  };

  it('renders correctly', () => {
    const { getByTestId } = render(<HomeItem title={props.title} image={props.image} />);
    expect(getByTestId('homeitem')).toBeInTheDocument();
  });

  it('Displays the correct title', () => {
    const { getByText } = render(<HomeItem title={props.title} image={props.image} />);
    expect(getByText(props.title)).toBeInTheDocument();
  });

  it('Displays the correct image', () => {
    const { getByAltText } = render(<HomeItem title={props.title} image={props.image} />);
    expect(getByAltText('game')).toHaveAttribute('src', props.image);
  });
});
