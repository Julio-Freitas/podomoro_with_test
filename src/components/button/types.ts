import { ButtonHTMLAttributes, MouseEvent } from 'react';

export type PropsButtonStyle = {
  color?: string;
  hoverColor?: string;
  textColor?: string;
  backgroundColorButton?: string;
};

export type ButtonElement = PropsButtonStyle &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    type: string;
    onClick: (event: MouseEvent<HTMLElement>) => void;
  };
