export type PropsTimer = {
  defaultPomodoroTimer: number;
  runninTimer: boolean;
  timerCurrent: (time: number) => void;
};
