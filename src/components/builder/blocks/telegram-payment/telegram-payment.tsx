import { FC, useState, ChangeEvent, useRef, useEffect } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';
import ControlLayout from '../../control-layout/control-layout';
import styles from './telegram-payment.module.scss';
import LabeledInput from '../../labeledInput/labeledInput';
import Input from '../../../../ui/inputs/input/input';
import ConstructorAddButton from '../../../../ui/buttons/constructor-add-button/constructor-add-button';
import MenumenuSelectFlow from '../../../../ui/menus/menu-select-flow/menu-select-flow';

import {
  TBlockProps,
  TTelegramPayBlock,
} from '../../../../services/types/builder';
import { BUTTON_NAME } from '../../../../utils/constants';
import { currencyAvailable, messagesSuccessful } from '../../utils/data';
import { setFlowData } from '../../utils';
// import VideoCard from '../../../video-card/video-card';

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

  const setCurrency = (name: string) =>
    setFlowDataButton({
      selectors: ['currency'],
      value: name,
    });

  const i = 2;
  const a = getNodes()[i].data.name + getNodes()[i].data.currency;

  const setOnSuccess = (value: string) =>
    setFlowDataButton({
      selectors: ['onSuccess'],
      value,
    });

  const setGoodsName = setFlowData({
    selectors: ['goodsName'],
  });

  const setPayment = setFlowData({
    selectors: ['payment'],
  });

  const [description, setDescription] = useState(data.description || '');

  const placeholder = 'Введите название';
  const buttonsCurrency = currencyAvailable.map((item) => item.nameValue);
  const buttonsOnSuccess = messagesSuccessful.map((item) => item.nameValue);

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
            value={data.goodsName || ''}
            onChange={setGoodsName}
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
              value={data.payment ? String(data.payment) : ''}
              onChange={setPayment}
              styled="bot-builder-default"
            />
            <div className={styles.wrapperCurrency}>
              {`${a} sssddd`}
              <MenumenuSelectFlow
                buttons={buttonsCurrency}
                nameMenu={data.currency || buttonsCurrency[0]}
                onClick={(name: string) => setCurrency(name)}
                active
              />
            </div>
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
