import React, { useState, useEffect, useCallback } from 'react';
import useIterval from '../../hooks/useInterval';
import { secondsToMinutes } from '../../utils/timer';
import { PropsTimer } from './types';
import * as Styled from './style';

export default function Timer({
  defaultPomodoroTimer,
  runninTimer,
  timerCurrent,
}: PropsTimer): JSX.Element {
  const [mainTimer, setMainTimer] = useState(defaultPomodoroTimer);
  const delay = runninTimer ? 1000 : null;

  const runninTimerCurrne = useCallback(
    () => runninTimer && timerCurrent(mainTimer),

    [runninTimer, mainTimer],
  );

  useEffect(() => {
    runninTimerCurrne();
  }, [runninTimerCurrne]);

  useIterval(() => {
    if (runninTimer) {
      setMainTimer(defaultPomodoroTimer - 1);
    }
  }, delay as number | null);

  return (
    <Styled.Span data-testid="timer-span">
      {secondsToMinutes(mainTimer)}
    </Styled.Span>
  );
}
