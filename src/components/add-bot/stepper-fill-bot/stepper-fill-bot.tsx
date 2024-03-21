import { FC } from 'react';

import styles from './stepper-fill-bot.module.scss';
import Typography from '../../../ui/typography/typography';

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
    <div className={styles.stepper}>
      <div className={styles.stepper_step}>
        <Typography fontFamily="secondary" tag="p">
          {step} Шаг {`>`}
        </Typography>
        <Typography fontFamily="secondary" tag="p">
          {text}
        </Typography>
      </div>
      <div className={styles.stepper_children}>{children}</div>
    </div>
  );
};

export default StepperFillBot;
