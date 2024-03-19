import { FC } from 'react';
import LabeledInput from '../../../labeledInput/labeledInput';
import styles from './req-settings.module.scss';
import ConstructorAddButton from '../../../buttons/constructor-add-button/constructor-add-button';

type RequestSettingsProps = {
  variableFields: React.ReactNode[];
  constFields: React.ReactNode[];
  addFieldVariable: () => void;
  addFieldConst: () => void;
  title: string;
};

/**
 * компонент-подблок для задания `headers` и url-параметров запроса
 */
const RequestSettings: FC<RequestSettingsProps> = ({
  variableFields,
  constFields,
  addFieldVariable,
  addFieldConst,
  title,
}) => {
  return (
    <LabeledInput title={title}>
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
