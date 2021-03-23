import { render } from '@testing-library/react';
import Footer from '.';
import sum from './sum';

describe('<Footer />', () => {
  it('should render a Footer', () => {
    render(<Footer>Oi</Footer>);
  });

  it('adds 1 + 2 to equal 3', () => {
    expect(sum({ a: 1, b: 2 })).toBe(3);
  });
});
