import { FC } from 'react';
import styles from './add-block-panel.module.scss';
import ButtonAddBlock from '../../../ui/buttons/button-add-block/button-add-block';
import api from '../../../images/icon/24x24/add block/api.svg';
import credit from '../../../images/icon/24x24/add block/credit-card.svg';
import deeplink from '../../../images/icon/24x24/add block/deeplink.svg';
import git from '../../../images/icon/24x24/add block/git-branch.svg';
import headphones from '../../../images/icon/24x24/add block/headphones.svg';
import map from '../../../images/icon/24x24/add block/map-pin.svg';
import message from '../../../images/icon/24x24/add block/message-square.svg';
import sliders from '../../../images/icon/24x24/add block/sliders.svg';
import table from '../../../images/icon/24x24/add block/table.svg';
import { useAppDispatch, useAppSelector } from '../../../services/hooks/hooks';
import { ADD_NODE_FLOW } from '../../../services/actions/flow/nodes';

const AddBlockPanel: FC = () => {
  const currentNodes = useAppSelector((s) => s.flowActionsReducer);
  const lastNode = currentNodes.blocks[currentNodes.blocks.length - 1];
  const lastNodeId = lastNode?.id;
  const lastNodePosition = lastNode?.position.x;

  const lastNodeNum = () => {
    if (lastNodeId) {
      return parseInt(lastNodeId[0], 10);
    }
    return 0;
  };
  const dispatch = useAppDispatch();

  const callAction = (type: string) => {
    dispatch({
      type: ADD_NODE_FLOW,
      payload: {
        id: `node-${lastNodeNum() + 1}`,
        type,
        position: { x: lastNodePosition + 130, y: 0 },
      },
    });
  };

  return (
    <div className={styles.panel}>
      <ButtonAddBlock
        onClick={() => callAction('message')}
        name="Блок сообщений"
        icon={message}
      />
      <ButtonAddBlock
        onClick={() => callAction('conditional')}
        name="Условный блок"
        icon={git}
      />
      <ButtonAddBlock
        onClick={() => callAction('variable')}
        name="Управление переменными"
        icon={sliders}
      />
      <ButtonAddBlock
        onClick={() => callAction('CRM')}
        name="Сохранение данных в CRM"
        icon={table}
      />
      <ButtonAddBlock
        onClick={() => callAction('return')}
        name="Перевод на оператора"
        icon={headphones}
      />
      <ButtonAddBlock onClick={() => callAction('API')} name="API" icon={api} />
      <ButtonAddBlock
        onClick={() => callAction('Deeplink')}
        name="Deeplink"
        icon={deeplink}
      />
      <ButtonAddBlock
        onClick={() => callAction('Payment')}
        name="Оплата"
        icon={credit}
      />
      <ButtonAddBlock
        onClick={() => callAction('Coordinates')}
        name="Координаты"
        icon={map}
      />
    </div>
  );
};

export default AddBlockPanel;
