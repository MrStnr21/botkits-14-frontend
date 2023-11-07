import { FC, ReactElement, useState, ChangeEvent } from 'react';
import { Position, ReactFlowProvider } from 'reactflow';
import styles from './control-layout.module.scss';
import moreIcon from '../../../images/icon/24x24/common/more.svg';
import MenuBot from '../../../ui/menus/menu-bot/menu-bot';
import CustomHandle from '../flow/custom-handle/custom-handle';

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
  const [hidden, setHidden] = useState(true);
  const [menu, toggleMenu] = useState(false);
  const onClick = () => {
    toggleMenu(!menu);
  };
  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    nameSetter(e.target.value);
  };
  return (
    <article className={styles.container}>
      <ReactFlowProvider>
        <div
          className={`${!hidden && styles.outline}`}
          onMouseEnter={() => setHidden(false)}
          onMouseLeave={() => setHidden(true)}
        >
          <CustomHandle
            position={Position.Top}
            hidden={hidden}
            type="target"
            id="t"
          />
          <CustomHandle
            position={Position.Right}
            hidden={hidden}
            type="source"
            id="r"
          />
          <CustomHandle
            position={Position.Bottom}
            hidden={hidden}
            type="source"
            id="b"
          />
          <CustomHandle
            position={Position.Left}
            hidden={hidden}
            type="target"
            id="l"
          />
          <div className={styles.header}>
            <span className={styles.type}>{type}</span>
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
        </div>
      </ReactFlowProvider>
    </article>
  );
};

export default ControlLayout;
