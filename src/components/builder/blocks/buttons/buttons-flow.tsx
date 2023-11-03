import { FC } from 'react';
import { Handle, Position, ReactFlowProvider } from 'reactflow';

import ButtonS from './buttons';

// import styles from './message-block.module.scss';

const ButtonSFlow: FC = () => {
  return (
    <ReactFlowProvider>
      <div>
        <Handle
          type="source"
          position={Position.Bottom}
          // id="b"
          isConnectable
        />
        <ButtonS />
      </div>
    </ReactFlowProvider>
  );
};

export default ButtonSFlow;
