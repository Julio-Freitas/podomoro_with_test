import React, { MouseEvent } from 'react';
import { ButtonElement } from './types';
import * as Styled from './styled';

const Button: React.FC<ButtonElement> = ({
  text,
  type,
  textColor,
  hoverColor,
  backgroundColorButton,
  ...props
}) => {
  return (
    <Styled.Button
      type={type}
      textColor={textColor}
      hoverColor={hoverColor}
      backgroundColorButton={backgroundColorButton}
      {...props}
    >
      {text}
    </Styled.Button>
  );
};

export default Button;
