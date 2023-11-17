import { FC } from 'react';
import stylesMailing from './mailing.module.scss';
import Button from '../../ui/buttons/button/button';
import Typography from '../../ui/typography/typography';
import HowToMailing from '../../components/mailing/how-to-mailing/how-to-mailing';
import MailingStart from '../../components/mailing/mailing-start/mailing-start';

const Mailing: FC = (): JSX.Element => {
  return (
    <div className={stylesMailing.mailing}>
      <div className={stylesMailing.mailing__header}>
        <Typography tag="h2" fontFamily="secondary">
          Рассылки
        </Typography>
        <div className={stylesMailing.mailing__buttonWrapper}>
          <Button
            variant="default"
            size="small"
            color="green"
            buttonHtmlType="submit"
          >
            Создать рассылку
          </Button>
        </div>
      </div>
      <div className={stylesMailing.mailing__content}>
        <MailingStart />
        <HowToMailing />
      </div>
    </div>
  );
};

export default Mailing;
