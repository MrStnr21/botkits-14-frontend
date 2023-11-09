import { FC, useState } from 'react';
import ControlLayout from '../../control-layout/control-layout';
import styles from './telegram-payment.module.scss';
import LabeledInput from '../../labeledInput/labeledInput';
import Input from '../../../../ui/inputs/input/input';
import ConstructorAddButton from '../../../../ui/buttons/constructor-add-button/constructor-add-button';
import MenuVariable from '../../../../ui/menus/menu-variable/menu-variable';
import {
  TBlockProps,
  TTelegramPayBlock,
} from '../../../../services/types/builder';

const TelegramPayment: FC<TBlockProps<TTelegramPayBlock>> = ({ data }) => {
  const [name, setName] = useState(data.name);
  const placeholder = 'Введите название';

  const buttonsForSum = ['RUB', 'EUR', 'USD']; // перенести в конфиг
  const buttonsForAfterPay = ['заглушка'];

  return (
    <ControlLayout type={name} name={name} nameSetter={setName}>
      <div className={styles.blocks}>
        <LabeledInput title="Навзание товара">
          <Input
            placeholder={placeholder}
            onChange={() => {}}
            styled="bot-builder-default"
          />
        </LabeledInput>
        <ConstructorAddButton maxWidth="100%" icon="photo">
          Добавить фото
        </ConstructorAddButton>
        <LabeledInput title="Описание">
          <Input
            placeholder={placeholder}
            value={data.description}
            onChange={() => {}}
            styled="bot-builder-default"
          />
        </LabeledInput>
        <LabeledInput title="Сумма к оплате">
          <div className={styles.sumInputs}>
            <Input
              placeholder="Введите сумму"
              value={String(data.payment)}
              onChange={() => {}}
              styled="bot-builder-default"
            />
            <MenuVariable
              width="66px"
              nameMenu={data.currency || buttonsForSum[0]}
              buttons={buttonsForSum}
            />
          </div>
        </LabeledInput>
        <LabeledInput title="Токен провайдера">
          <Input
            placeholder={placeholder}
            value={data.providerToken}
            onChange={() => {}}
            styled="bot-builder-default"
          />
        </LabeledInput>
        <LabeledInput title="После успешной оплаты вернуть">
          <MenuVariable
            buttons={buttonsForAfterPay}
            nameMenu={data.onSuccess || buttonsForAfterPay[0]}
          />
        </LabeledInput>
      </div>
    </ControlLayout>
  );
};

export default TelegramPayment;
