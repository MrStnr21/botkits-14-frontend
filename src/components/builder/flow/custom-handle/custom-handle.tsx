import { FC } from 'react';
import { HandleProps, Handle } from 'reactflow';
import styles from './custom-handle.module.scss';

const CustomHandle: FC<HandleProps> = ({
  type,
  position,
  isConnectable,
  isConnectableStart,
  isConnectableEnd,
  onConnect,
  isValidConnection,
  id,
}) => {
  return (
    <Handle
      className={styles.handle}
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
