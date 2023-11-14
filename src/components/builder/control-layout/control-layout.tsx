import { FC, ReactElement, useState, ChangeEvent } from 'react';
import { Position, useReactFlow, useNodeId } from 'reactflow';
import styles from './control-layout.module.scss';
import moreIcon from '../../../images/icon/24x24/common/more.svg';
import MenuBot from '../../../ui/menus/menu-bot/menu-bot';
import CustomHandle from '../flow/custom-handle/custom-handle';

type TControlLayoutProps = {
  type: string; // Тип блока
  name: string; // Текущее имя блока
  nameSetter: (e: ChangeEvent<HTMLInputElement>) => void; // Фукнция для переопределения имени
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
  const id = useNodeId();
  const { getNodes, setNodes } = useReactFlow();

  const onClick = () => {
    toggleMenu(!menu);
  };

  const removeNode = () => {
    const nodes = getNodes().filter((node) => {
      return node.id !== id;
    });
    setNodes(nodes);
  };

  return (
    <article className={styles.container}>
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
            onChange={nameSetter}
          />
          <div className={styles.more} onClick={onClick}>
            <img className={styles.img} src={moreIcon} alt="больше" />
            <MenuBot
              size="medium"
              editFunction={() => {}}
              isActive={menu}
              top={0}
              left={30}
              removeFunction={removeNode}
            />
          </div>
        </div>
        {children && (
          <>
            <hr className={styles.hr} />
            {children}
          </>
        )}
      </div>
    </article>
  );
};

export default ControlLayout;
