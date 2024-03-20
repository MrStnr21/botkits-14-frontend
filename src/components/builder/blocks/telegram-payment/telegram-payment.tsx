import { FC, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNodeId } from 'reactflow';
import ControlLayout from '../../control-layout/control-layout';
import styles from './telegram-payment.module.scss';
import LabeledInput from '../../labeledInput/labeledInput';
import Input from '../../../../ui/inputs/input/input';

import {
  TBlockProps,
  TTelegramPayBlock,
} from '../../../../services/types/builder';
import { currencyAvailable } from '../../utils/data';
import { namesOfBlocks } from '../../utils/store';
import {
  getSelectItemByValue,
  setFlowDataInit,
  getSelectLabel,
} from '../../utils';
import AadPhoto from './aad-photo/aad-photo';
import Select from '../../../../ui/select/select';
import { Option } from '../../../../utils/types';
import File from '../message-block/file/file';
import { saveFile } from '../../../../api/builder';
import { BASE_URL } from '../../../../utils/config';

const TelegramPayment: FC<TBlockProps<TTelegramPayBlock>> = ({ data }) => {
  const setFlowData = setFlowDataInit();
  const [searchParams] = useSearchParams();
  const botId = searchParams.get('id')!;
  const id = useNodeId() || '';

  const image = useMemo(() => !!data.data[0], [data.data[0]]);

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
    if (e.target.files && e.target.files[0]) {
      saveFile(
        `${BASE_URL}/bots/files/upload/${botId}/${id}/`,
        e.target.files[0]
      ).then((fileData) => {
        setFlowData({
          path: ['data', 'data'],
          value: fileData,
        });
      });
      e.target.value = '';
    }
  };

  const content = useMemo(
    () =>
      data.data[0] && (
        <File fileId={data.data[0].fileId} fileType={data.data[0].fileType} />
      ),
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
            options={getSelectLabel(namesOfBlocks)}
            handleSelect={setOnSuccess}
            currentOption={getSelectItemByValue(
              data.onSuccess,
              getSelectLabel(namesOfBlocks)
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
