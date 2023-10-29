import styles from './deep-link.module.scss';
import InputSelect from '../../../../ui/inputs/input-select/input-select';
import Input from '../../../../ui/inputs/input/input';
import ControlLayout from '../../control-layout/control-layout';
import LabeledInput from '../../labeledInput/labeledInput';

const selectValues = [
  { value: '1', nameValue: '1' },
  { value: '2', nameValue: '2' },
  { value: '3', nameValue: '3' },
];

function DeepLink() {
  return (
    <ControlLayout
      type="Deep Link"
      name="Название Deep Link"
      nameSetter={() => {}}
    >
      <div className={styles.content}>
        <LabeledInput title="Параметр">
          <InputSelect
            values={selectValues}
            maxWidth={240}
            defaultValue={['1']}
            handleFunction={() => {}}
          />
        </LabeledInput>
        <LabeledInput title="Тип значения">
          <InputSelect
            values={selectValues}
            maxWidth={240}
            defaultValue={['1']}
            handleFunction={() => {}}
          />
        </LabeledInput>
        <LabeledInput title="Количество знаков в ссылке">
          <Input onChange={() => {}} styled="bot-builder-default" value="120" />
        </LabeledInput>
        <LabeledInput title="Добавить значение в переменную">
          <Input
            onChange={() => {}}
            styled="bot-builder-default"
            placeholder="Введите значение"
          />
        </LabeledInput>
        <LabeledInput title="Добавить ссылку в переменную">
          <Input
            onChange={() => {}}
            styled="bot-builder-default"
            placeholder="URL"
          />
        </LabeledInput>
      </div>
    </ControlLayout>
  );
}

export default DeepLink;
