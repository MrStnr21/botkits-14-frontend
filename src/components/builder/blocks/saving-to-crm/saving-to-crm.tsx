import React, { FC } from 'react';
import styles from './saving-to-crm.module.scss';
import { crmList, saveOptions } from '../../utils/data';
import ControlLayout from '../../control-layout/control-layout';
import Checkbox from '../../../../ui/checkboxes/checkbox';
import { TBlockProps, TCRMBlock } from '../../../../services/types/builder';
import LabeledInput from '../../labeledInput/labeledInput';
import { setFlowDataInit } from '../../utils';

const SavingToCrmBlock: FC<TBlockProps<TCRMBlock>> = ({ data }) => {
  const onCrmChange = setFlowDataInit({ selectors: ['chosenCrm'] });
  const onSaveChange = setFlowDataInit({ selectors: ['save'] });

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
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      onCrmChange(event)
                    }
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
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      onSaveChange(event)
                    }
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
