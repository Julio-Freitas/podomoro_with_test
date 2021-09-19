import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '.';

const _handleCLickMock = () => {
  console.log('Clicou');
};

beforeEach(() =>
  render(
    <Button
      text="Button"
      type="button"
      textColor="red"
      hoverColor="blue"
      backgroundColorButton="green"
      onClick={_handleCLickMock}
    />,
  ),
);

describe('Teste component Button', () => {
  it('Should cheks elements button', () => {
    const btn = screen.getByRole('button', {
      name: /Button/i,
    });
    expect(btn).toBeInTheDocument();
  });
  it('Click in Button ', () => {
    const clickBtn = jest.spyOn(console, 'log');
    const btn = screen.getByRole('button', { name: 'Button' });
    fireEvent.click(btn);
    expect(clickBtn).toHaveBeenCalledTimes(1);
  });
});
