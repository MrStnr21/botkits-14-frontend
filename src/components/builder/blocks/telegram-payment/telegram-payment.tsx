import { FC, useState, ChangeEvent, useRef } from 'react';
import ControlLayout from '../../control-layout/control-layout';
import styles from './telegram-payment.module.scss';
import LabeledInput from '../../labeledInput/labeledInput';
import Input from '../../../../ui/inputs/input/input';
import ConstructorAddButton from '../../../../ui/buttons/constructor-add-button/constructor-add-button';
import InputSelect from '../../../../ui/inputs/input-select/input-select';
import {
  TBlockProps,
  TTelegramPayBlock,
} from '../../../../services/types/builder';
import { BUTTON_NAME } from '../../../../utils/constants';
import { currencyAvailable, messagesSuccessful } from '../../utils/data';
// import VideoCard from '../../../video-card/video-card';

const TelegramPayment: FC<TBlockProps<TTelegramPayBlock>> = ({ data }) => {
  const [goodsName, setGoodsName] = useState(data.goodsName || '');
  const [description, setDescription] = useState(data.description || '');
  const [payment, setPayment] = useState(
    data.payment ? String(data.payment) : ''
  );
  const placeholder = 'Введите название';

  const ref = useRef<null | HTMLInputElement>(null);

  const onClickAddPhoto = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  return (
    <ControlLayout type="Оплата в Telegram">
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
              maxWidth="100%"
              icon="photo"
              onClick={onClickAddPhoto}
            >
              Добавить фото
            </ConstructorAddButton>
          </label>
          {/* <VideoCard
            contentType="image"
            title="title"
            prewiew={URL.createObjectURL(file)}
            src={URL.createObjectURL(file)}
          /> */}
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
            <InputSelect
              values={currencyAvailable}
              maxWidth={67}
              defaultValue={[data.currency || 'Рубль']}
              handleFunction={() => {}}
              isAdaptive
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
          <InputSelect
            values={messagesSuccessful}
            maxWidth={400}
            defaultValue={[data.onSuccess || 'По умолчанию']}
            handleFunction={() => {}}
            isAdaptive
          />
        </LabeledInput>
      </div>
    </ControlLayout>
  );
};

export default TelegramPayment;
