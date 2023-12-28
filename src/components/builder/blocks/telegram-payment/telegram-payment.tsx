import { FC, useMemo } from 'react';
import ControlLayout from '../../control-layout/control-layout';
import styles from './telegram-payment.module.scss';
import LabeledInput from '../../labeledInput/labeledInput';
import Input from '../../../../ui/inputs/input/input';

import {
  TBlockProps,
  TTelegramPayBlock,
} from '../../../../services/types/builder';
import { currencyAvailable } from '../../utils/data';
import { messagesSuccessful } from '../../utils/store';
import { getSelectItemByValue, setFlowDataInit } from '../../utils';
import File from './file/file';
import AadPhoto from './aad-photo/aad-photo';
import Select from '../../../../ui/select/select';
import { Option } from '../../../../utils/types';

const TelegramPayment: FC<TBlockProps<TTelegramPayBlock>> = ({ data }) => {
  const setFlowData = setFlowDataInit();

  const image = useMemo(() => !!data.image, [data.image]);

  const setCurrency = (option: Option) =>
    setFlowData({
      path: ['data', 'currency'],
      value: option.value,
    });

  const setOnSuccess = (option: Option) =>
    setFlowData({
      path: ['data', 'onSuccess'],
      value: option.value,
    });

  const setGoodsName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFlowData({
      path: ['data', 'goodsName'],
      value: e.target.value,
    });

  const setDescription = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFlowData({
      path: ['data', 'description'],
      value: e.target.value,
    });

  const setPayment = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFlowData({
      path: ['data', 'payment'],
      value: e.target.value,
    });

  const setProviderToken = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFlowData({
      path: ['data', 'providerToken'],
      value: e.target.value,
    });
  const placeholder = 'Введите название';

  const addFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFlowData({
      path: ['data', 'image'],
      value: e.target.files && e.target.files[0],
    });
    e.target.value = '';
  };

  const removeFile = () => {
    setFlowData({
      path: ['data', 'image'],
      value: '',
    });
  };

  const content = useMemo(
    () => data.image && <File data={data.image} removeFile={removeFile} />,
    [data]
  );

  return (
    <ControlLayout type="Оплата в Telegram">
      <div className={styles.blocks}>
        <LabeledInput title="Название товара">
          <Input
            placeholder={placeholder}
            value={data.goodsName || ''}
            onChange={setGoodsName}
            styled="bot-builder-default"
            minLength={0}
          />
        </LabeledInput>
        {content}
        <AadPhoto addFile={addFile} image={image} />

        <LabeledInput title="Описание">
          <Input
            placeholder={placeholder}
            value={data.description || ''}
            onChange={setDescription}
            styled="bot-builder-default"
            minLength={0}
          />
        </LabeledInput>
        <LabeledInput title="Сумма к оплате">
          <div className={styles.sumInputs}>
            <Input
              placeholder="Введите сумму"
              value={data.payment ? String(data.payment) : ''}
              onChange={setPayment}
              styled="bot-builder-default"
              minLength={0}
              type="number"
            />
            <div className={styles.wrapperCurrency}>
              <Select
                options={currencyAvailable}
                handleSelect={setCurrency}
                currentOption={getSelectItemByValue(
                  data.currency,
                  currencyAvailable
                )}
                elementToCloseListener="flow"
                adaptive
              />
            </div>
          </div>
        </LabeledInput>
        <LabeledInput title="Токен провайдера">
          <Input
            placeholder={placeholder}
            value={data.providerToken}
            onChange={setProviderToken}
            styled="bot-builder-default"
            minLength={0}
          />
        </LabeledInput>
        <LabeledInput title="После успешной оплаты вернуть">
          <Select
            options={messagesSuccessful}
            handleSelect={setOnSuccess}
            currentOption={getSelectItemByValue(
              data.onSuccess,
              messagesSuccessful
            )}
            elementToCloseListener="flow"
            adaptive
          />
        </LabeledInput>
      </div>
    </ControlLayout>
  );
};

export default TelegramPayment;
