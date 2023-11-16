import { FC } from 'react';
import styles from './deep-link.module.scss';
import MenumenuSelectFlow from '../../../../ui/menus/menu-select-flow/menu-select-flow';
import Input from '../../../../ui/inputs/input/input';
import ControlLayout from '../../control-layout/control-layout';
import LabeledInput from '../../labeledInput/labeledInput';
import {
  TBlockProps,
  TDeepLinkBlock,
} from '../../../../services/types/builder';
import { selectValuesType } from '../../utils/data';
import { setFlowData } from '../../utils';

const DeepLink: FC<TBlockProps<TDeepLinkBlock>> = ({ data }) => {
  const setParam = setFlowData({
    selectors: ['param'],
  });
  const setType = (value: any) =>
    setFlowData({
      selectors: ['type'],
      value,
    });
  const setSignsAmount = setFlowData({
    selectors: ['signsAmount'],
  });
  // const signsAmountIsNaN = Number.isNaN(data.signsAmount);

  const setAdditionValue = setFlowData({
    selectors: ['additionValue'],
  });
  const setAdditionLink = setFlowData({
    selectors: ['additionLink'],
  });

  const buttons = selectValuesType.map((item) => item.nameValue);

  return (
    <ControlLayout type="Deep Link">
      <div className={styles.content}>
        <LabeledInput title="Параметр">
          <Input
            onChange={setParam}
            styled="bot-builder-default"
            placeholder="Название параметра"
            value={data.param}
            minLength={0}
          />
        </LabeledInput>
        <LabeledInput title="Тип значения">
          <div style={{ zIndex: 10 }}>
            <MenumenuSelectFlow
              buttons={buttons}
              width="240"
              nameMenu={data.type}
              onClick={() => setType}
              active
            />
          </div>
        </LabeledInput>
        <LabeledInput title="Количество знаков в ссылке">
          <Input
            placeholder="Введите число"
            onChange={setSignsAmount}
            styled="bot-builder-default"
            value={data.signsAmount.toString()}
            minLength={0}
            mustNumber
          />
        </LabeledInput>
        <LabeledInput title="Добавить значение в переменную">
          <Input
            onChange={setAdditionValue}
            styled="bot-builder-default"
            placeholder="Введите значение"
            value={data.additionValue}
            minLength={0}
          />
        </LabeledInput>
        <LabeledInput title="Добавить ссылку в переменную">
          <Input
            onChange={setAdditionLink}
            styled="bot-builder-default"
            placeholder="URL"
            value={data.additionLink}
            minLength={0}
          />
        </LabeledInput>
      </div>
    </ControlLayout>
  );
};

export default DeepLink;
