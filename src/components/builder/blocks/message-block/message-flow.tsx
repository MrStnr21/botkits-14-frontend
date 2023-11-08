import { FC } from 'react';
import { Handle, Position, ReactFlowProvider } from 'reactflow';

import MessageBlock from './message-block';
import { MessageDataTypes } from '../../../../services/types/builder';

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
              { type: MessageDataTypes.message },
              { type: MessageDataTypes.answers },
              { type: MessageDataTypes.buttons },
            ],
          }}
        />
      </div>
    </ReactFlowProvider>
  );
};

export default MessageFlow;