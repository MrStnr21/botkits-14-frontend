import { FC } from 'react';
import styles from './deep-link.module.scss';
import Input from '../../../../ui/inputs/input/input';
import ControlLayout from '../../control-layout/control-layout';
import LabeledInput from '../../labeledInput/labeledInput';
import {
  TBlockProps,
  TDeepLinkBlock,
} from '../../../../services/types/builder';
import { selectValuesType } from '../../utils/data';
import { getSelectItemByValue, setFlowDataInit } from '../../utils';
import Select from '../../../../ui/select/select';
import { setSelectedFlow } from './flow';

const DeepLink: FC<TBlockProps<TDeepLinkBlock>> = ({ data }) => {
  const setSelected = setSelectedFlow();

  const setParam = setFlowDataInit({
    selectors: ['param'],
  });

  const setSignsAmount = setFlowDataInit({
    selectors: ['signsAmount'],
  });

  const setAdditionValue = setFlowDataInit({
    selectors: ['additionValue'],
  });
  const setAdditionLink = setFlowDataInit({
    selectors: ['additionLink'],
  });

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
            <Select
              options={selectValuesType}
              handleSelect={setSelected('type')}
              currentOption={getSelectItemByValue(data.type, selectValuesType)}
              elementToCloseListener="flow"
              adaptive
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
            type="number"
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
            type="URL"
          />
        </LabeledInput>
      </div>
    </ControlLayout>
  );
};

export default DeepLink;
