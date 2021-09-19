import React, { useState } from 'react';
import { secondsToTime } from 'utils/timer';
import { PropsDetais } from './types';
import * as Styled from './style';

const Detatils = ({
  completedCycles,
  fullWorkingTime,
  numberOfPomodoros,
}: PropsDetais): JSX.Element => {
  const [open, setOpen] = useState(true);
  return (
    <Styled.Details
      data-testid="details"
      open={open}
      onClick={e => setOpen(!open)}
    >
      <Styled.Summary>Detalhes</Styled.Summary>
      <Styled.P>Número de ciclos: {completedCycles}</Styled.P>
      <Styled.P>Horas trabalhadas: {secondsToTime(fullWorkingTime)}</Styled.P>
      <Styled.P>Número de pomodoro: {numberOfPomodoros}</Styled.P>
    </Styled.Details>
  );
};

export default Detatils;
