/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import stylesMailing from './mailing.module.scss';
import Button from '../../ui/buttons/button/button';
import Typography from '../../ui/typography/typography';
import HowToMailing from '../../components/mailing/how-to-mailing/how-to-mailing';
import MailingStart from '../../components/mailing/mailing-start/mailing-start';
import MailingFilled from '../../components/mailing/mailing-filled/mailing-filled';
import CreateMailing from './create-mailing/create-mailing';

const Mailing: FC = (): JSX.Element => {
  const [is, setIs] = useState(true); // временно
  const matchMailing = useMatch('/mailing');
  const isMobile = useMediaQuery('(max-width: 860px)');

  return (
    <div className={stylesMailing.mailing}>
      <div className={stylesMailing.mailing__header}>
        <Typography tag="h2" fontFamily="secondary">
          Рассылки
        </Typography>
        {matchMailing && !isMobile && (
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
        <CreateMailing />
      )}
    </div>
  );
};

export default Mailing;
