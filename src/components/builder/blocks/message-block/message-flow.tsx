import { FC } from 'react';
import { Handle, Position, ReactFlowProvider } from 'reactflow';

import MessageBlock from './message-block';

// import styles from './message-block.module.scss';

const MessageFlow: FC = () => {
  return (
    <ReactFlowProvider>
      <div>
        <Handle
          type="target"
          position={Position.Left}
          // id="b"
          isConnectable
        />
        <MessageBlock
          data={{
            name: 'Приветствие',
            data: [
              {
                type: 'message' as const,
              },
              {
                type: 'answers' as const,
              },
              {
                type: 'buttons' as const,
              },
            ],
          }}
        />
      </div>
    </ReactFlowProvider>
  );
};

export default MessageFlow;
