import { FC, useEffect } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import stylesMailing from './mailing.module.scss';
import Button from '../../ui/buttons/button/button';
import Typography from '../../ui/typography/typography';
import HowToMailing from '../../components/mailing/how-to-mailing/how-to-mailing';
import MailingStart from '../../components/mailing/mailing-start/mailing-start';
import MailingFilled from '../../components/mailing/mailing-filled/mailing-filled';
import { mailingsSel } from '../../utils/selectorData';
import { getMailingsAction } from '../../services/actions/mailing/getMailings';
import CreateMailing from './create-mailing/create-mailing';
import { botId } from './ids-temp';

const Mailing: FC = (): JSX.Element => {
  const { mailings } = useAppSelector(mailingsSel);

  const dispatch = useAppDispatch();

  const matchMailing = useMatch('/mailing');
  const isMobile = useMediaQuery('(max-width: 860px)');

  useEffect(() => {
    dispatch(getMailingsAction(botId));
  }, [dispatch]);

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
          {!mailings.length ? (
            <MailingStart />
          ) : (
            <MailingFilled mailings={mailings} />
          )}
          <HowToMailing />
        </div>
      ) : (
        <CreateMailing />
      )}
    </div>
  );
};

export default Mailing;
