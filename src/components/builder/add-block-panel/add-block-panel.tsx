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

const AddBlockPanel: FC = () => {
  return (
    <div className={`${styles.panel}`}>
      <ButtonAddBlock name="Блок сообщений" icon={message} />
      <ButtonAddBlock name="Условный блок" icon={git} />
      <ButtonAddBlock name="Управление переменными" icon={sliders} />
      <ButtonAddBlock name="Сохранение данных в CRM" icon={table} />
      <ButtonAddBlock name="Перевод на оператора" icon={headphones} />
      <ButtonAddBlock name="API" icon={api} />
      <ButtonAddBlock name="Deeplink" icon={deeplink} />
      <ButtonAddBlock name="Оплата" icon={credit} />
      <ButtonAddBlock name="Координаты" icon={map} />
    </div>
  );
};

export default AddBlockPanel;
