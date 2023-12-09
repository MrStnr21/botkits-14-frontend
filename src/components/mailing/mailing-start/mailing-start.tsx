import { FC } from 'react';
import styles from './mailing-start.module.scss';
import Typography from '../../../ui/typography/typography';

const MailingStart: FC = () => {
  return (
    <div className={styles.start}>
      <Typography
        tag="h3"
        fontFamily="secondary"
        className={styles.start__title}
      >
        Давайте скорее запустим вашу первую рассылку!
      </Typography>
      <Typography tag="p" className={styles.start__text}>
        Нажмите на кнопку “создать рассылку”
      </Typography>
    </div>
  );
};

export default MailingStart;
