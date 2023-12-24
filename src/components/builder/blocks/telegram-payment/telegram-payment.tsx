import { FC, useMemo } from 'react';
import ControlLayout from '../../control-layout/control-layout';
import styles from './telegram-payment.module.scss';
import LabeledInput from '../../labeledInput/labeledInput';
import Input from '../../../../ui/inputs/input/input';

import {
  TBlockProps,
  TTelegramPayBlock,
} from '../../../../services/types/builder';
import { currencyAvailable, messagesSuccessful } from '../../utils/data';
import { getSelectItemByValue, setFlowData } from '../../utils';
import File from './file/file';
import AadPhoto from './aad-photo/aad-photo';
import Select from '../../../../ui/select/select';
import { Option } from '../../../../utils/types';
import { setDataButtonFlow, addFileFlow, removeFileFlow } from './flow';

const TelegramPayment: FC<TBlockProps<TTelegramPayBlock>> = ({ data }) => {
  const setDataButton = setDataButtonFlow();

  const image = useMemo(() => !!data.image, [data.image]);

  const setCurrency = (option: Option) =>
    setDataButton({
      selector: 'currency',
      value: option.value,
    });

  const setOnSuccess = (option: Option) =>
    setDataButton({
      selector: 'onSuccess',
      value: option.value,
    });

  const setGoodsName = setFlowData({
    selectors: ['goodsName'],
  });

  const setDescription = setFlowData({
    selectors: ['description'],
  });

  const setPayment = setFlowData({
    selectors: ['payment'],
  });

  const setProviderToken = setFlowData({
    selectors: ['providerToken'],
  });
  const placeholder = 'Введите название';

  const addFile = addFileFlow();

  const removeFile = removeFileFlow();

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
