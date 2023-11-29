import { FC, ReactElement, useState, useMemo } from 'react';
import { Position, useReactFlow, useNodeId } from 'reactflow';
import { v4 as uuid } from 'uuid';
import styles from './control-layout.module.scss';
import moreIcon from '../../../images/icon/24x24/common/more.svg';
import MenuBot from '../../../ui/menus/menu-bot/menu-bot';
import CustomHandle from '../flow/custom-handle/custom-handle';
// import { setFlowData } from '../utils';

type TControlLayoutProps = {
  children?: ReactElement | ReactElement[];
  type: string;
};

// eslint-disable-next-line import/no-mutable-exports
export let namesOfBlocks: string[] = [];

const ControlLayout: FC<TControlLayoutProps> = ({ children, type }) => {
  const [hidden, setHidden] = useState(true);
  const [menu, toggleMenu] = useState(false);
  const id = useNodeId();
  const { getNodes, setNodes, getNode } = useReactFlow();
  const node = getNode(id!);

  namesOfBlocks = useMemo(
    () => getNodes().map((item) => item.data.name),
    [getNodes()]
  );

  const setName = (e?: React.ChangeEvent<HTMLInputElement>) => {
    const template = e?.target.value || '';
    let nameBlock = e?.target.value || '';
    let i = 0;

    while (namesOfBlocks.includes(nameBlock)) {
      // eslint-disable-next-line no-plusplus
      nameBlock = `${template}-${++i}`;
    }

    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              name: nameBlock,
            },
          };
        }
        return item;
      })
    );
  };

  namesOfBlocks = getNodes().map((item) => item.data.name);

  const onClick = () => {
    toggleMenu(!menu);
  };

  const removeNode = () => {
    const nodes = getNodes().filter((item) => {
      return item.id !== id && item.parentNode !== id;
    });
    setNodes(nodes);
  };

  const copyNode = () => {
    const newNode = {
      id: uuid(),
      type: node!.type,
      position: { x: node!.position.x + 300, y: node!.position.y },
      data: node!.data,
    };
    const childNodes = getNodes()
      .filter((item) => item.parentNode === id)
      .map((item) => {
        return {
          id: uuid(),
          position: item.position,
          type: item.type,
          data: item.data,
          expandParent: true,
          parentNode: newNode.id,
          draggable: false,
        };
      });
    setNodes([...getNodes(), newNode, ...childNodes]);
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
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setName(event)
            }
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
