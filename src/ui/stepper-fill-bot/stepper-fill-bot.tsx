import { FC } from 'react';
import Typography from '../typography/typography';
import stylesStepperFillBot from './stepper-fill-bot.module.scss';

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
        <Typography tag="p">
          {step} Шаг {`>`}
        </Typography>
        <Typography tag="p">{text}</Typography>
      </div>
      <div className={stylesStepperFillBot.stepper_children}>{children}</div>
    </div>
  );
};

export default StepperFillBot;
