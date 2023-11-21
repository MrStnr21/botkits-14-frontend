/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { Link, Outlet, useMatch } from 'react-router-dom';
import stylesMailing from './mailing.module.scss';
import Button from '../../ui/buttons/button/button';
import Typography from '../../ui/typography/typography';
import HowToMailing from '../../components/mailing/how-to-mailing/how-to-mailing';
import MailingStart from '../../components/mailing/mailing-start/mailing-start';
import MailingFilled from '../../components/mailing/mailing-filled/mailing-filled';
import CreateMailing from '../../components/mailing/create-mailing/create-mailing';

const Mailing: FC = (): JSX.Element => {
  const [is, setIs] = useState(false); // временно
  const matchMailing = useMatch('/mailing');

  return (
    <div className={stylesMailing.mailing}>
      <div className={stylesMailing.mailing__header}>
        <Typography tag="h2" fontFamily="secondary">
          Рассылки
        </Typography>
        {matchMailing && (
          <div className={stylesMailing.mailing__buttonWrapper}>
            <Button
              variant="default"
              size="small"
              color="green"
              buttonHtmlType="button"
            >
              <Link to="create" className={stylesMailing.mailing__link}>
                Создать рассылку
              </Link>
            </Button>
          </div>
        )}
      </div>
      {matchMailing ? (
        <div className={stylesMailing.mailing__content}>
          {!is ? <MailingStart /> : <MailingFilled />}
          <HowToMailing />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Mailing;
