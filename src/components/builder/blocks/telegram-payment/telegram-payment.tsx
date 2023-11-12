import { FC, useState, ChangeEvent, useRef } from 'react';
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
import {
  CURRENCY_AVAILABLE,
  MESSAGES_SUCCESSFUL_PAYMENT,
  BUTTON_NAME,
} from '../../../../utils/constants';

const TelegramPayment: FC<TBlockProps<TTelegramPayBlock>> = ({ data }) => {
  const [name, setName] = useState(data.name);
  const [goodsName, setGoodsName] = useState(data.goodsName || '');
  const [description, setDescription] = useState(data.description || '');
  const [payment, setPayment] = useState(
    data.payment ? String(data.payment) : ''
  );
  const [currency, setCurrency] = useState(
    data.currency || CURRENCY_AVAILABLE[0]
  );
  const placeholder = 'Введите название';
  const [onSuccess, setOnSuccess] = useState(data.onSuccess || placeholder);

  const ref = useRef<null | HTMLInputElement>(null);

  const onClickAddPhoto = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  return (
    <ControlLayout type="Оплата в Telegram" name={name} nameSetter={setName}>
      <div className={styles.blocks}>
        <LabeledInput title="Название товара">
          <Input
            placeholder={placeholder}
            value={goodsName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setGoodsName(e.target.value);
            }}
            styled="bot-builder-default"
          />
        </LabeledInput>
        <div>
          <input
            ref={ref}
            type="file"
            id={BUTTON_NAME.IMAGE}
            name={BUTTON_NAME.IMAGE}
            accept=".jpg, .png, .gif"
            hidden
          />
          <label htmlFor={BUTTON_NAME.IMAGE}>
            <ConstructorAddButton
              // value={type}
              // active={isActive}
              maxWidth="100%"
              icon="photo"
              onClick={onClickAddPhoto}
            >
              Добавить фото
            </ConstructorAddButton>
          </label>
        </div>

        <LabeledInput title="Описание">
          <Input
            placeholder={placeholder}
            value={description}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setDescription(e.target.value);
            }}
            styled="bot-builder-default"
          />
        </LabeledInput>
        <LabeledInput title="Сумма к оплате">
          <div className={styles.sumInputs}>
            <Input
              placeholder="Введите сумму"
              value={payment}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPayment(e.target.value);
              }}
              styled="bot-builder-default"
            />
            <MenuVariable
              width="66px"
              nameMenu={currency}
              buttons={CURRENCY_AVAILABLE}
              onClick={(c: string) => setCurrency(c)}
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
            buttons={MESSAGES_SUCCESSFUL_PAYMENT}
            nameMenu={onSuccess}
            onClick={(c: string) => setOnSuccess(c)}
          />
        </LabeledInput>
      </div>
    </ControlLayout>
  );
};

export default TelegramPayment;
