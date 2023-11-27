import React, { FC } from 'react';
import { useNodeId, useReactFlow } from 'reactflow';
import styles from './saving-to-crm.module.scss';
import { crmList, saveOptions } from '../../utils/data';
import ControlLayout from '../../control-layout/control-layout';
import Checkbox from '../../../../ui/checkboxes/checkbox';
import { TBlockProps, TCRMBlock } from '../../../../services/types/builder';
import LabeledInput from '../../labeledInput/labeledInput';

const SavingToCrmBlock: FC<TBlockProps<TCRMBlock>> = ({ data }) => {
  const { getNodes, setNodes } = useReactFlow();
  const id = useNodeId();

  const onCrmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          const newItem = {
            ...item,
            data: {
              ...item.data,
              chosenCrm: e.target.value,
            },
          };
          return newItem;
        }
        return item;
      })
    );
  };

  const onSaveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          const newItem = {
            ...item,
            data: {
              ...item.data,
              save: e.target.value,
            },
          };
          return newItem;
        }
        return item;
      })
    );
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
