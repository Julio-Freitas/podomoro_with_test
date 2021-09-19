import React from 'react';
import Button from 'components/button';
import { ButtonElement } from '../button/types';
import * as Styled from './styled';
type PropsGroupButton = {
  buttonsGroups: ButtonElement[];
};
const ControlsButton = ({ buttonsGroups }: PropsGroupButton): JSX.Element => {
  return (
    <Styled.ContainerControls>
      {buttonsGroups.map(button => (
        <React.Fragment key={button.id}>
          <Button
            type={button.type}
            textColor={button.textColor}
            hoverColor={button.hoverColor}
            color={button.color}
            text={button.text}
            onClick={button.onClick}
          />
        </React.Fragment>
      ))}
    </Styled.ContainerControls>
  );
};

export default ControlsButton;
