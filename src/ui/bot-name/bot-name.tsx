import { FC } from 'react';
import styles from './bot-name.module.scss';
import fb from '../../images/icon/40x40/facebook/hover.svg';
import DoneIcon from '../../components/icons/Done/Done';
import { ReactComponent as UpdateIcon } from '../../images/icon/20x20/update.svg';
import Typography from '../typography/typography';

export interface IBotName {
  platform_icon?: string;
  isUpdating: boolean;
  title?: string;
}

const BotName: FC<IBotName> = ({
  platform_icon = fb,
  isUpdating,
  title = 'Название бота',
}) => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={platform_icon} alt="иконка" />
      <Typography tag="h4" fontFamily="secondary" className={styles.text}>
        {title}
      </Typography>
      {isUpdating ? (
        <UpdateIcon className={styles.update} />
      ) : (
        <DoneIcon size={20} />
      )}
    </div>
  );
};

export default BotName;
