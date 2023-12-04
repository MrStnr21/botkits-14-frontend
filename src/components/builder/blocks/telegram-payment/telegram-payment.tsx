import { FC, useMemo } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';
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

const TelegramPayment: FC<TBlockProps<TTelegramPayBlock>> = ({ data }) => {
  const { getNodes, setNodes } = useReactFlow();
  const id = useNodeId();

  const setFlowDataButton = ({
    selectors,
    value,
  }: {
    selectors: string[];
    value: any;
  }) => {
    const nodes = getNodes();
    const finalData = value;
    setNodes(
      nodes.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              [selectors[0]]: finalData,
            },
          };
        }
        return item;
      })
    );
  };

  const image = useMemo(() => !!data.image, [data.image]);

  const setCurrency = (option: Option) =>
    setFlowDataButton({
      selectors: ['currency'],
      value: option.value,
    });

  const setOnSuccess = (option: Option) =>
    setFlowDataButton({
      selectors: ['onSuccess'],
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

  const addFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              image: e.target.files && e.target.files[0],
            },
          };
        }
        return item;
      })
    );
    e.target.value = '';
  };

  const removeFile = () => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              image: '',
            },
          };
        }
        return item;
      })
    );
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
