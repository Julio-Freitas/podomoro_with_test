import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { secondsToTime } from 'utils/timer';

import Details from '.';

describe('Test Component <Detatils />', () => {
  const propsDetatils = {
    numberOfPomodoros: 0,
    completedCycles: 0,
    fullWorkingTime: 0,
  };

  const searchtext = (text?: string) => text && screen.queryByText(text);

  it('Should render Componet when is open', () => {
    render(<Details {...propsDetatils} />);
    expect(screen.getByTestId('details')).toBeInTheDocument();
    expect(screen.getByTestId('details')).toHaveProperty('open', true);

    expect(
      searchtext(`Número de ciclos: ${propsDetatils.completedCycles}`),
    ).toBeInTheDocument();

    expect(
      searchtext(`Número de pomodoro: ${propsDetatils.numberOfPomodoros}`),
    ).toBeInTheDocument();

    expect(
      searchtext(
        `Horas trabalhadas: ${secondsToTime(propsDetatils.fullWorkingTime)}`,
      ),
    ).toBeInTheDocument();
  });

  it('Should is closed click in  Detatils', async () => {
    render(<Details {...propsDetatils} />);
    expect(screen.getByTestId('details')).toHaveProperty('open', true);
    fireEvent.click(screen.getByTestId('details'));
    expect(screen.getByTestId('details')).toHaveProperty('open', false);
  });
});
