import { FC, ReactElement, useState, ChangeEvent } from 'react';
import styles from './control-layout.module.scss';
import moreIcon from '../../../images/icon/24x24/common/more.svg';
import MenuBot from '../../../ui/menus/menu-bot/menu-bot';
import Typography from '../../../ui/typography/typography';

type TControlLayoutProps = {
  type: string; // Тип блока
  name: string; // Текущее имя блока
  nameSetter: (a: string) => void; // Фукнция для переопределения имени
  children?: ReactElement | ReactElement[];
};

const ControlLayout: FC<TControlLayoutProps> = ({
  type,
  name,
  nameSetter,
  children,
}) => {
  const [menu, toggleMenu] = useState(false);
  const onClick = () => {
    toggleMenu(!menu);
  };
  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    nameSetter(e.target.value);
  };
  return (
    <article className={styles.container}>
      <div className={styles.header}>
        <Typography tag="span" className={styles.type}>
          {type}
        </Typography>
        <input
          type="text"
          className={styles.name}
          value={name}
          onChange={onNameChange}
        />
        <button className={styles.more} onClick={onClick} type="button">
          <img className={styles.img} src={moreIcon} alt="больше" />
          <MenuBot
            size="medium"
            // eslint-disable-next-line
            editFunction={() => {}}
            isActive={menu}
            top={0}
            left={30}
          />
        </button>
      </div>
      {children && (
        <>
          <hr className={styles.hr} />
          {children}
        </>
      )}
    </article>
  );
};

export default ControlLayout;
