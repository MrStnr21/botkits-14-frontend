import { FC } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';
import styles from './deep-link.module.scss';
import Input from '../../../../ui/inputs/input/input';
import ControlLayout from '../../control-layout/control-layout';
import LabeledInput from '../../labeledInput/labeledInput';
import {
  TBlockProps,
  TDeepLinkBlock,
} from '../../../../services/types/builder';
import { selectValuesType } from '../../utils/data';
import { getSelectItemByValue, setFlowData } from '../../utils';
import Select from '../../../../ui/select/select';
import { Option } from '../../../../utils/types';

const DeepLink: FC<TBlockProps<TDeepLinkBlock>> = ({ data }) => {
  const { getNodes, setNodes } = useReactFlow();
  const id = useNodeId();

  const setSelected = (fieldName: string) => (option: Option) => {
    setNodes(
      getNodes().map((node) => {
        if (node.id === id) {
          return {
            ...node,
            data: {
              ...node.data,
              [fieldName]: option.value,
            },
          };
        }
        return node;
      })
    );
  };

  const setParam = setFlowData({
    selectors: ['param'],
  });

  const setSignsAmount = setFlowData({
    selectors: ['signsAmount'],
  });

  const setAdditionValue = setFlowData({
    selectors: ['additionValue'],
  });
  const setAdditionLink = setFlowData({
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
