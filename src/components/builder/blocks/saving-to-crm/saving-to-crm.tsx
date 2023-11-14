import React, { FC, useState } from 'react';
import styles from './saving-to-crm.module.scss';
import ControlLayout from '../../control-layout/control-layout';
import Checkbox from '../../../../ui/checkboxes/checkbox';
import { TBlockProps, TCRMBlock } from '../../../../services/types/builder';
import LabeledInput from '../../labeledInput/labeledInput';
import { crmList, saveOptions } from '../../utils/data';

const SavingToCrmBlock: FC<TBlockProps<TCRMBlock>> = ({ data }) => {
  const [crm, setCrm] = useState<string>(data.chosenCrm || '');

  const [saveAs, setSaveAs] = useState<string>(data.save || '');

  const onCrmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCrm(e.target.value);
  };

  const onSaveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSaveAs(e.target.value);
  };

  return (
    <div>
      <ControlLayout type="Сохранение в CRM">
        <div className={styles.content}>
          <LabeledInput title="Выбор CRM">
            <div className={styles.block}>
              {crmList.map((item) => {
                return (
                  <Checkbox
                    key={item}
                    name="crm"
                    label={item}
                    value={item}
                    onChange={onCrmChange}
                    checked={item === crm}
                  />
                );
              })}
            </div>
          </LabeledInput>
          <LabeledInput title="Сохранить как">
            <div className={styles.block}>
              {saveOptions.map((item) => {
                return (
                  <Checkbox
                    key={item}
                    name="saveAs"
                    label={item}
                    value={item}
                    onChange={onSaveChange}
                    checked={item === saveAs}
                  />
                );
              })}
            </div>
          </LabeledInput>
        </div>
      </ControlLayout>
    </div>
  );
};

export default SavingToCrmBlock;
