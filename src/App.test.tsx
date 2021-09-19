import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { secondsToMinutes } from 'utils/timer';
import App from 'App';

describe('Test all application <App />', () => {
  it('Behaivor default', () => {
    render(<App />);
    const allButtons = screen.getAllByRole('button');

    const buttonPlay = screen.getByRole('button', { name: 'Play' });

    expect(screen.queryByText(/you are resting/i)).toBeInTheDocument();
    expect(screen.queryByText(/Detalhes/i)).toBeInTheDocument();
    expect(screen.queryByText(/Número de ciclos: 0/i)).toBeInTheDocument();
    expect(screen.queryByText(/Horas trabalhadas: 00:00/i)).toBeInTheDocument();

    expect(screen.queryByText(/Número de pomodoro: 0/i)).toBeInTheDocument();
    expect(allButtons).toHaveLength(3);

    allButtons.forEach(button => {
      button.textContent &&
        expect(
          screen.getByRole('button', { name: button.textContent }),
        ).toBeInTheDocument();
    });
  });

  it('Should be count timer when click in button Resting and change text to worgink', () => {
    render(<App />);

    const buttonResting = screen.getByRole('button', { name: 'Resting' });
    fireEvent.click(buttonResting);
    expect(screen.getByText(/You are working/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Horas trabalhadas: 00:00:02/i),
    ).toBeInTheDocument();
  });
});
