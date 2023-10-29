import { useState } from 'react';
import ControlLayout from '../control-layout/control-layout';
import styles from './telegramPayment.module.scss';
import LabeledInput from '../labeledInput/labeledInput';
import Input from '../../../ui/inputs/input/input';
import ConstructorAddButton from '../../../ui/buttons/constructor-add-button/constructor-add-button';
import MenuVariable from '../../../ui/menus/menu-variable/menu-variable';

const TelegramPayment = () => {
  const [name, setName] = useState('Оплата в Telegram');
  const placeholder = 'Введите название';

  const buttonsForSum = ['RUB', 'EUR', 'USD'];
  const buttonsForAfterPay = ['заглушка'];

  return (
    <ControlLayout type={name} name={name} nameSetter={setName}>
      <div className={styles.blocks}>
        <LabeledInput title="Навзание товара">
          <Input placeholder={placeholder} onChange={() => {}} />
        </LabeledInput>
        <ConstructorAddButton width="100%" icon="photo">
          Добавить фото
        </ConstructorAddButton>
        <LabeledInput title="Описание">
          <Input placeholder={placeholder} onChange={() => {}} />
        </LabeledInput>
        <LabeledInput title="Сумма к оплате">
          <div className={styles.sumInputs}>
            <Input placeholder="Введите сумму" onChange={() => {}} />
            <MenuVariable
              width="66px"
              nameMenu={buttonsForSum[0]}
              buttons={buttonsForSum}
            />
          </div>
        </LabeledInput>
        <LabeledInput title="Токен провайдера">
          <Input placeholder={placeholder} onChange={() => {}} />
        </LabeledInput>
        <LabeledInput title="После успешной оплаты вернуть">
          <MenuVariable buttons={buttonsForAfterPay} nameMenu={placeholder} />
        </LabeledInput>
      </div>
    </ControlLayout>
  );
};

export default TelegramPayment;
