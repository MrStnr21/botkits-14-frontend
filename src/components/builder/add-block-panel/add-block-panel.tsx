import { FC } from 'react';
import { useReactFlow } from 'reactflow';
import { v4 as uuid } from 'uuid';
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
import { defaultBlocks } from '../utils/data';

const AddBlockPanel: FC = () => {
  const { setNodes, getNodes, getViewport } = useReactFlow();

  const addNode = (type: keyof typeof defaultBlocks) => {
    return () => {
      const { x, y, zoom } = getViewport();
      const newNode = {
        id: uuid(),
        position: {
          // Задание блока примерно по центру экрана
          x: (-x + window.innerWidth / 2) / zoom,
          y: (-y + window.innerHeight / 2) / zoom,
        },
        type,
        data: defaultBlocks[type],
      };
      setNodes([...getNodes(), newNode]);
    };
  };

  return (
    <div className={`${styles.panel}`}>
      <ButtonAddBlock
        onClick={addNode('message')}
        name="Блок сообщений"
        icon={message}
      />
      <ButtonAddBlock
        onClick={addNode('conditional')}
        name="Условный блок"
        icon={git}
      />
      <ButtonAddBlock
        onClick={addNode('variable')}
        name="Управление переменными"
        icon={sliders}
      />
      <ButtonAddBlock
        onClick={addNode('crm')}
        name="Сохранение данных в CRM"
        icon={table}
      />
      <ButtonAddBlock
        onClick={addNode('operator')}
        name="Перевод на оператора"
        icon={headphones}
      />
      <ButtonAddBlock onClick={addNode('api')} name="API" icon={api} />
      <ButtonAddBlock
        onClick={addNode('deeplink')}
        name="Deeplink"
        icon={deeplink}
      />
      <ButtonAddBlock
        onClick={addNode('telegramPay')}
        name="Оплата"
        icon={credit}
      />
      <ButtonAddBlock
        onClick={addNode('coordinate')}
        name="Координаты"
        icon={map}
      />
    </div>
  );
};

export default AddBlockPanel;
