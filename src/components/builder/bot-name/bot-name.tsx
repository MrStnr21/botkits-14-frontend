import { FC } from 'react';
import styles from './bot-name.module.scss';
import noPlatform from '../../../assets/icons/24x24/common/x-circle.svg';
import Typography from '../../../ui/typography/typography';
import Icon from '../../../ui/icon/icon';

export interface IBotName {
  platform_icon?: string;
  isUpdating: boolean;
  title?: string;
}

const BotName: FC<IBotName> = ({
  platform_icon = noPlatform,
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
        <Icon
          icon="syncUpdate"
          extraClass={`${styles.icon} ${styles.update}`}
          isColored
        />
      ) : (
        <Icon icon="syncDone" extraClass={styles.icon} isColored />
      )}
    </div>
  );
};

export default BotName;
