import { FC, useState, ChangeEvent } from 'react';
import styles from './deep-link.module.scss';
import InputSelect from '../../../../ui/inputs/input-select/input-select';
import Input from '../../../../ui/inputs/input/input';
import ControlLayout from '../../control-layout/control-layout';
import LabeledInput from '../../labeledInput/labeledInput';
import {
  TBlockProps,
  TDeepLinkBlock,
} from '../../../../services/types/builder';
import { selectValuesType } from '../../utils/data';

const DeepLink: FC<TBlockProps<TDeepLinkBlock>> = ({ data }) => {
  const [name, setName] = useState(data.name);
  const [signsAmount, setSignsAmount] = useState(data.signsAmount);
  const [param, setParam] = useState(data.param || 'Название параметра');

  return (
    <ControlLayout
      type="Deep Link"
      name={name}
      nameSetter={(newName: string) => {
        setName(newName);
      }}
    >
      <div className={styles.content}>
        <LabeledInput title="Параметр">
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setParam(e.target.value);
            }}
            styled="bot-builder-default"
            placeholder="Название параметра"
            value={param}
          />
        </LabeledInput>
        <LabeledInput title="Тип значения">
          <InputSelect
            values={selectValuesType}
            maxWidth={240}
            defaultValue={[data.type]}
            handleFunction={() => {}}
            isAdaptive
          />
        </LabeledInput>
        <LabeledInput title="Количество знаков в ссылке">
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSignsAmount(Number(e.target.value));
            }}
            styled="bot-builder-default"
            value={signsAmount.toString()}
          />
        </LabeledInput>
        <LabeledInput title="Добавить значение в переменную">
          <Input
            onChange={() => {}}
            styled="bot-builder-default"
            placeholder="Введите значение"
            value={data.additionValue}
          />
        </LabeledInput>
        <LabeledInput title="Добавить ссылку в переменную">
          <Input
            onChange={() => {}}
            styled="bot-builder-default"
            placeholder="URL"
            value={data.additionLink}
          />
        </LabeledInput>
      </div>
    </ControlLayout>
  );
};

export default DeepLink;
