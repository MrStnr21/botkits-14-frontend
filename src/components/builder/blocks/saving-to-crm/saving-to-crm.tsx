import React, { FC } from 'react';
import styles from './saving-to-crm.module.scss';
import { crmList, saveOptions } from '../../utils/data';
import ControlLayout from '../../control-layout/control-layout';
import Checkbox from '../../../../ui/checkboxes/checkbox';
import { TBlockProps, TCRMBlock } from '../../../../services/types/builder';
import LabeledInput from '../../labeledInput/labeledInput';
import { setFlowDataInit } from '../../utils';

const SavingToCrmBlock: FC<TBlockProps<TCRMBlock>> = ({ data }) => {
  const setFlowData = setFlowDataInit();
  const onCrmChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFlowData({ path: ['data', 'chosenCrm'], value: e.target.value });
  const onSaveChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFlowData({ path: ['data', 'save'], value: e.target.value });
  return (
    <div>
      <ControlLayout type="Сохранение в CRM">
        <div className={styles.content}>
          <LabeledInput title="Выбор CRM">
            <div className={styles.block}>
              {crmList.map((item) => {
                return (
                  <Checkbox
                    key={item.value}
                    name="saveCRM"
                    label={item.nameValue}
                    value={item.value}
                    onChange={onCrmChange}
                    checked={item.value === data.chosenCrm}
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
                    key={item.value}
                    name="saveAs"
                    label={item.nameValue}
                    value={item.value}
                    onChange={onSaveChange}
                    checked={item.value === data.save}
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
