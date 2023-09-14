// to do: StepperFillBot
// https://trello.com/c/tiyOt74z/13-%D1%81%D1%82%D0%B5%D0%BF%D0%BF%D0%B5%D1%80-%D0%B7%D0%B0%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B1%D0%BE%D1%82%D0%B0
import { FC } from 'react';
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
}) => {
  return (
    <div className={stylesStepperFillBot.stepper}>
      <div className={stylesStepperFillBot.stepper_step}>
        <p>
          {step} Шаг {`>`}
        </p>
        <p>{text}</p>
      </div>
      <div className={stylesStepperFillBot.stepper_children}>{children}</div>
    </div>
  );
};

export default StepperFillBot;
