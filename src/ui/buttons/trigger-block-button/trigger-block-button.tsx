import { FC } from 'react';
import TriggerIcon from '../../../components/icons/Trigger/TriggerIcon';
import stylesTriggerButton from './trigger-block-button.module.scss';

export interface ITriggerButton {
  buttonHtmlType?: 'button';
  onClick?: VoidFunction;
}

const TriggerButton: FC<ITriggerButton> = ({
  buttonHtmlType = 'button',
  onClick,
}): JSX.Element => {
  return (
    <button
      className={stylesTriggerButton.button}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={buttonHtmlType}
    >
      <TriggerIcon />
    </button>
  );
};

export default TriggerButton;
