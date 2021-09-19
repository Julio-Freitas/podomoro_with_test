/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState, useEffect, useCallback, MouseEvent } from 'react';
import Timer from './components/timer';
import { ButtonElement } from './components/button/types';
import ControlsButton from './components/controls';
import * as StyleGlobal from './styles/global';
import { ThemeProvider } from 'styled-components';
import Detatils from 'components/details';
import themes from 'styles/themes';

const defautlTime = 4;

function App(): JSX.Element {
  const [theme, setTheme] = useState(themes.stoping);
  const [mainTime, setMainTime] = useState(defautlTime);

  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [cycleOfPomodoro, setCyfleOfPomodoro] = useState(0);

  const [cyclesManager, setCyclesManeger] = useState(new Array(3).fill(true));

  const [timePlay, setTimePlay] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);
  const [restingLong, setRestingLong] = useState(false);

  const changeTheme = useCallback(() => {
    if (resting || !timePlay) return themes.stoping;
    if (working && timePlay) return themes.working;
    return themes.stoping;
  }, [working, resting, timePlay]);

  useEffect(() => {
    console.log(restingLong);
  }, [restingLong]);

  useEffect(() => {
    setTheme(changeTheme());
  }, [changeTheme]);

  const _handleConfigureWork = useCallback(() => {
    setMainTime(defautlTime);
    setTimePlay(true);
    setWorking(true);
    setResting(false);
  }, [setMainTime, setTimePlay, setWorking, setResting]);

  const _handleConfigureRest = useCallback(
    (restLong?: boolean) => {
      restLong = restLong ? restLong : false;
      setTimePlay(true);
      setWorking(false);
      setResting(true);
      setRestingLong(restLong);
    },
    [setTimePlay, setWorking, setResting],
  );

  useEffect(() => {
    if (working) setFullWorkingTime(prev => prev + 1);

    if (mainTime > 0) return;
    if (working && cyclesManager.length > 0) {
      _handleConfigureRest(false);
      cyclesManager.pop();
    } else if (working && cyclesManager.length <= 0) {
      _handleConfigureRest(true);
      cyclesManager.pop();
      setCyclesManeger(new Array(3).fill(true));
      setCompletedCycles(prev => prev + 1);
    }

    if (working) setCyfleOfPomodoro(prev => prev + 1);
    if (resting) _handleConfigureWork();
  }, [
    resting,
    working,
    mainTime,
    cycleOfPomodoro,
    completedCycles,
    cyclesManager,
    timePlay,
  ]);

  const buttonsGroups: ButtonElement[] = [
    {
      type: 'button',
      textColor: '#fff',
      hoverColor: 'blue',
      color: 'red',
      text: working ? 'Working' : 'Resting',
      onClick: () => _handleConfigureWork(),
    },
    {
      type: 'button',
      textColor: '#fff',
      hoverColor: 'blue',
      color: 'red',
      text: 'Rest',
      onClick: (event: MouseEvent<HTMLElement>) => _handleConfigureRest(false),
    },
    {
      type: 'button',
      textColor: '#fff',
      hoverColor: 'blue',
      color: 'red',
      text: timePlay ? 'Pause' : 'Play',
      onClick: () => setTimePlay(!timePlay),
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <StyleGlobal.Container>
        <StyleGlobal.GlobalStyle />
        <h1>You are {working ? 'working' : 'Resting'}</h1>
        <Timer
          defaultPomodoroTimer={mainTime}
          runninTimer={timePlay}
          timerCurrent={setMainTime}
        />
        <ControlsButton buttonsGroups={buttonsGroups} />
        <Detatils
          completedCycles={completedCycles}
          fullWorkingTime={fullWorkingTime}
          numberOfPomodoros={cycleOfPomodoro}
        />
      </StyleGlobal.Container>
    </ThemeProvider>
  );
}

export default App;
