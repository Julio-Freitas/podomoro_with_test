import React from 'react';
import { render, screen } from '@testing-library/react';
import { secondsToMinutes } from 'utils/timer';
import Timer from '.';

describe('Test component <Timer />', () => {
  const propsTimer = {
    defaultPomodoroTimer: 0,
    runninTimer: false,
    timerCurrent: () => 0,
  };
  it('Default Behavior Component ', () => {
    render(<Timer {...propsTimer} />);
    expect(screen.getByTestId('timer-span').textContent).toBe(
      secondsToMinutes(propsTimer.defaultPomodoroTimer),
    );
  });

  it('Default Behavior Component when have value', () => {
    const timerCurrentMock = jest.fn();
    render(
      <Timer
        timerCurrent={timerCurrentMock}
        runninTimer={true}
        defaultPomodoroTimer={9}
      />,
    );
    expect(screen.getByTestId('timer-span').textContent).toBe('00:08');
    expect(timerCurrentMock).toHaveBeenCalledTimes(2);
  });
});
