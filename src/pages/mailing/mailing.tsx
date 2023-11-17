/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import stylesMailing from './mailing.module.scss';
import Button from '../../ui/buttons/button/button';
import Typography from '../../ui/typography/typography';
import HowToMailing from '../../components/mailing/how-to-mailing/how-to-mailing';
import MailingStart from '../../components/mailing/mailing-start/mailing-start';
import MailingFilled from '../../components/mailing/mailing-filled/mailing-filled';

const Mailing: FC = (): JSX.Element => {
  const [is, setIs] = useState(true); // временно

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
        {!is ? <MailingStart /> : <MailingFilled />}
        <HowToMailing />
      </div>
    </div>
  );
};

export default Mailing;
