import { FC, ReactElement, useState, useEffect } from 'react';
import { Position, useReactFlow, useNodeId } from 'reactflow';
import styles from './control-layout.module.scss';
import moreIcon from '../../../images/icon/24x24/common/more.svg';
import MenuBot from '../../../ui/menus/menu-bot/menu-bot';
import CustomHandle from '../flow/custom-handle/custom-handle';
import {
  setFlowDataInit,
  saveName,
  clearingNames,
  clearingVariables,
} from '../utils';
import { namesOfBlocks, storeOfVariables } from '../utils/store';

import { removeNodeFlow, copyNodeFlow } from './flow';

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
    saveName(namesOfBlocks, e.target.value, id, node!.type);
    setFlowData({ path: ['data', 'name'], value: e.target.value });
  };

  const onClick = () => {
    toggleMenu(!menu);
  };

  // метод для удаления ноды из store
  const removeNode = removeNodeFlow();

  // копирование ноды с данными исходной и дочерними нодами
  const copyNode = copyNodeFlow({ getNodes, setNodes, node, id });

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
            <MenuBot
              size="medium"
              editFunction={() => {}}
              isActive={menu}
              top={0}
              left={30}
              removeFunction={removeNode}
              copyFuntion={copyNode}
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
