// eslint-disable-next-line import/no-extraneous-dependencies
import { Handle, HandleProps } from 'reactflow';
import { FC } from 'react';
import styles from './custom-handlecustom-handle.module.scss';

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
