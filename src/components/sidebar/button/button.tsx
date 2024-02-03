import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import styles from './button.module.scss';
import Typography from '../../../ui/typography/typography';

type TButtonProps = {
  isSidebarOpened: boolean;
  type: 'default' | 'compact';
};

const Button: FC<TButtonProps> = ({ isSidebarOpened, type }) => {
  // анимация как отдельный класс для отключения данного поведения при переходе в конструктор
  const buttonClass = `${styles.addButton}
  ${type !== 'compact' ? styles.animated : ''}
  ${isSidebarOpened && type !== 'compact' ? '' : styles.closed}`;
  return (
    <NavLink to="/add-bot" className={buttonClass}>
      {isSidebarOpened && type !== 'compact' && (
        <Typography tag="p" fontFamily="secondary" className={styles.addText}>
          ДОБАВИТЬ БОТА
        </Typography>
      )}
    </NavLink>
  );
};

export default Button;
