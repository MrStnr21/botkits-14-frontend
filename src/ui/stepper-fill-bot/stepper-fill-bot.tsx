import { FC } from 'react';

import stylesStepperFillBot from './stepper-fill-bot.module.scss';
import Typography from '../typography/typography';

interface IStepperFillBot {
  step: string;
  text: string;
  children?: JSX.Element;
}

const StepperFillBot: FC<IStepperFillBot> = ({
  step = '1 Шаг',
  text = 'Ключ досупа',
  children,
}): JSX.Element => {
  return (
    <div className={stylesStepperFillBot.stepper}>
      <div className={stylesStepperFillBot.stepper_step}>
        <Typography fontFamily="secondary" tag="p">
          {step} Шаг {`>`}
        </Typography>
        <Typography fontFamily="secondary" tag="p">
          {text}
        </Typography>
      </div>
      <div className={stylesStepperFillBot.stepper_children}>{children}</div>
    </div>
  );
};

export default StepperFillBot;
