import { FC, useState } from 'react';
import stylesCard from './BotTemplatesCard.module.scss';
import CheckboxWithText from '../../ui/CheckboxWithText/CheckboxWithText';

const BotTemplatesCard: FC = () => {
  const [crm, setCrm] = useState(true);
  const dsb = true;

  const onCrmChange = () => {
    setCrm(!crm);
  };

  return (
    <div className={stylesCard.card}>
      <CheckboxWithText
        label="Опубликовать"
        name="crm"
        value="crm"
        onChange={onCrmChange}
        checked={crm}
      />
      <CheckboxWithText
        label="Опубликовать"
        name="crm"
        value="crm"
        onChange={onCrmChange}
        checked={crm}
        disabled={dsb}
      />
    </div>
  );
};

export default BotTemplatesCard;
