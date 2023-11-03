import { FC } from 'react';
import { Handle, Position, ReactFlowProvider } from 'reactflow';

import ButtonStart from './button-start';

// import styles from './message-block.module.scss';

const ButtonStartFlow: FC = () => {
  return (
    <ReactFlowProvider>
      <div>
        <Handle
          type="source"
          position={Position.Bottom}
          // id="b"
          isConnectable
        />
        <ButtonStart data={{ type: 'start' }} />
      </div>
    </ReactFlowProvider>
  );
};

export default ButtonStartFlow;
