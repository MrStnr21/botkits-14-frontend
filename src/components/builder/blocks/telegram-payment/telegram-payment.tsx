import { FC, useState, useEffect, useMemo } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';
import ControlLayout from '../../control-layout/control-layout';
import styles from './telegram-payment.module.scss';
import LabeledInput from '../../labeledInput/labeledInput';
import Input from '../../../../ui/inputs/input/input';
import MenumenuSelectFlow from '../../../../ui/menus/menu-select-flow/menu-select-flow';

import {
  TBlockProps,
  TTelegramPayBlock,
} from '../../../../services/types/builder';
import { currencyAvailable, messagesSuccessful } from '../../utils/data';
import { setFlowData } from '../../utils';
import File from './file/file';
import AadPhoto from './aad-photo/aad-photo';

const TelegramPayment: FC<TBlockProps<TTelegramPayBlock>> = ({ data }) => {
  const [active, setActive] = useState(data.onSuccess !== '');
  useEffect(() => setActive(data.onSuccess !== ''), [data.onSuccess]);

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
  // const [isImage, setisImage] = useState(true);

  const setCurrency = (name: string) =>
    setFlowDataButton({
      selectors: ['currency'],
      value: name,
    });

  const setOnSuccess = (value: string) =>
    setFlowDataButton({
      selectors: ['onSuccess'],
      value,
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
  const buttonsCurrency = currencyAvailable.map((item) => item.nameValue);
  const buttonsOnSuccess = messagesSuccessful.map((item) => item.nameValue);

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
    // setisImage(true);
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
    // setisImage(false);
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
              <MenumenuSelectFlow
                buttons={buttonsCurrency}
                nameMenu={data.currency || buttonsCurrency[0]}
                onClick={(name: string) => setCurrency(name)}
                active
              />
            </div>
          </div>
        </LabeledInput>
        {/* aa */}
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
          <MenumenuSelectFlow
            buttons={buttonsOnSuccess}
            nameMenu={data.onSuccess || 'Введите название'}
            onClick={(name: string) => setOnSuccess(name)}
            active={active}
          />
        </LabeledInput>
      </div>
    </ControlLayout>
  );
};

export default TelegramPayment;

/* {
          // eslint-disable-next-line no-param-reassign
          delete item.data.image;
          return item;
        } 
        
        const ii = 2;
  const aa = getNodes()[ii].data.name + getNodes()[ii].data.image; */
