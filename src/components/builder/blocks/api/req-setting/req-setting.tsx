import { FC } from 'react';
import LabeledInput from '../../../labeledInput/labeledInput';
import styles from './req-settings.module.scss';
import ConstructorAddButton from '../../../../../ui/buttons/constructor-add-button/constructor-add-button';

type RequestSettingsProps = {
  variableFields: React.ReactNode[];
  constFields: React.ReactNode[];
  addFieldVariable: () => void;
  addFieldConst: () => void;
};

const RequestSettings: FC<RequestSettingsProps> = ({
  variableFields,
  constFields,
  addFieldVariable,
  addFieldConst,
}) => {
  return (
    <LabeledInput title="Заголовок">
      <div className={styles.field_blocks}>
        <div className={styles.fields}>
          {variableFields}
          <ConstructorAddButton
            buttonHtmlType="button"
            disabled={false}
            onClick={addFieldVariable}
          >
            Переменная
          </ConstructorAddButton>
        </div>
        <hr className={styles.line} />
        <div className={styles.fields}>
          {constFields}
          <ConstructorAddButton
            buttonHtmlType="button"
            disabled={false}
            onClick={addFieldConst}
          >
            Постоянная
          </ConstructorAddButton>
        </div>
      </div>
    </LabeledInput>
  );
};

export default RequestSettings;
