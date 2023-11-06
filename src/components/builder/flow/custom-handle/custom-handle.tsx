import { FC } from 'react';
import { HandleProps, Handle } from 'reactflow';
import styles from './custom-handle.module.scss';

type TCustomHandle = HandleProps & {
  hidden?: boolean;
};

const CustomHandle: FC<TCustomHandle> = ({
  type,
  position,
  isConnectable,
  isConnectableStart,
  isConnectableEnd,
  onConnect,
  isValidConnection,
  id,
  hidden = true,
}) => {
  return (
    <Handle
      className={hidden ? styles.hidden : styles.handle}
      type={type}
      position={position}
      isConnectable={isConnectable}
      isConnectableEnd={isConnectableEnd}
      isConnectableStart={isConnectableStart}
      onConnect={onConnect}
      isValidConnection={isValidConnection}
      id={id}
    />
  );
};

export default CustomHandle;
