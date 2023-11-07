import { FC } from 'react';
import styles from './deep-link.module.scss';
import InputSelect from '../../../../ui/inputs/input-select/input-select';
import Input from '../../../../ui/inputs/input/input';
import ControlLayout from '../../control-layout/control-layout';
import LabeledInput from '../../labeledInput/labeledInput';
import {
  TBlockProps,
  TDeepLinkBlock,
} from '../../../../services/types/builder';

const selectValues = [
  { value: 'random', nameValue: 'Случайное' },
  { value: 'static', nameValue: 'Статичное' },
  { value: 'variable', nameValue: 'Переменная' },
  { value: 'JS', nameValue: 'JavaScript' },
  { value: 'CRM', nameValue: 'CRM' },
];

const DeepLink: FC<TBlockProps<TDeepLinkBlock>> = ({ data }) => {
  return (
    <ControlLayout type="Deep Link" name={data.name} nameSetter={() => {}}>
      <div className={styles.content}>
        <LabeledInput title="Параметр">
          <InputSelect
            values={selectValues}
            maxWidth={240}
            defaultValue={[data.param || selectValues[0].value]}
            handleFunction={() => {}}
          />
        </LabeledInput>
        <LabeledInput title="Тип значения">
          <InputSelect
            values={selectValues}
            maxWidth={240}
            defaultValue={[data.type]}
            handleFunction={() => {}}
          />
        </LabeledInput>
        <LabeledInput title="Количество знаков в ссылке">
          <Input
            onChange={() => {}}
            styled="bot-builder-default"
            value={data.signsAmount.toString()}
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
