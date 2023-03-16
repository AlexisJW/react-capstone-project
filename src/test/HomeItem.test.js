import React from 'react';
import { render } from '@testing-library/react';
import HomeItem from '../components/HomeItem';
import PropTypes from 'prop-types';

describe('HomeItem component', () => {
  const props = {
    title: 'Test Game',
    image: 'test.jpg',
  };

  HomeItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

  it('renders correctly', () => {
    const { getByTestId } = render(<HomeItem {...props} />);
    expect(getByTestId('homeitem')).toBeInTheDocument();
  });

  it('displays the correct title', () => {
    const { getByText } = render(<HomeItem {...props} />);
    expect(getByText(props.title)).toBeInTheDocument();
  });

  it('displays the correct image', () => {
    const { getByAltText } = render(<HomeItem {...props} />);
    expect(getByAltText('game')).toHaveAttribute('src', props.image);
  });
});