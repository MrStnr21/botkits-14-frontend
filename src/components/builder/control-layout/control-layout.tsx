import { FC, ReactElement, useState, useEffect } from 'react';
import { Position, useReactFlow, useNodeId } from 'reactflow';
import styles from './control-layout.module.scss';
import moreIcon from '../../../images/icon/24x24/common/more.svg';
import CustomHandle from '../flow/custom-handle/custom-handle';
import {
  setFlowDataInit,
  saveName,
  clearingNames,
  clearingVariables,
} from '../utils';
import { namesOfBlocks, storeOfVariables } from '../utils/store';
import type { Option } from '../../../utils/types';

import { removeNodeFlow, copyNodeFlow } from './flow';
import Menu from '../../../ui/menus/menu/menu';

type TControlLayoutProps = {
  children?: ReactElement | ReactElement[];
  /**
   * отображаемый тип блока
   */
  type: string;
};

/**
 * Общий layout для блоков билдера
 */
const ControlLayout: FC<TControlLayoutProps> = ({ children, type }) => {
  const setFlowData = setFlowDataInit();
  const [hidden, setHidden] = useState(true);
  const [menu, toggleMenu] = useState(false);
  const id = useNodeId() || '';
  const { getNodes, setNodes, getNode } = useReactFlow();
  const node = getNode(id!);

  useEffect(() => {
    saveName(namesOfBlocks, node?.data.name, id, node?.type);
    clearingNames(namesOfBlocks, getNodes());
    clearingVariables(storeOfVariables, getNodes());
  }, [getNodes()]);

  const setName = (e: React.ChangeEvent<HTMLInputElement>) => {
    saveName(namesOfBlocks, e.target.value, id, node?.type);
    setFlowData({ path: ['data', 'name'], value: e.target.value });
  };

  const onClick = () => {
    toggleMenu(!menu);
  };

  // метод для удаления ноды из store
  const removeNode = removeNodeFlow();

  // копирование ноды с данными исходной и дочерними нодами
  const copyNode = copyNodeFlow({ getNodes, setNodes, node, id });

  const actions: Option[] = [
    {
      label: 'Копировать',
      value: 'copy',
      icon: 'dropdownCopyBot',
    },
    {
      label: 'Удалить',
      value: 'delete',
      icon: 'dropdownTrash',
    },
  ];

  const handleActions = (option: Option) => {
    switch (option.value) {
      case 'copy':
        copyNode();
        break;
      case 'delete':
        removeNode();
        break;
      default:
        break;
    }
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
            value={node?.data.name}
            onChange={setName}
          />
          <div className={styles.more} onClick={onClick}>
            <img className={styles.img} src={moreIcon} alt="больше" />
            {menu && (
              <Menu
                options={actions}
                onItemClick={handleActions}
                layoutClassName={styles.menu}
                itemClassName={styles.menu__item}
                iconClassName={styles.menu__icon}
              />
            )}
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
