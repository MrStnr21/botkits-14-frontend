/* eslint-disable no-param-reassign */
// import styles from './saving-to-crm-block.module.scss';
import { useState } from 'react';
import styles from './saving-to-crm-block.module.scss';
import ControlLayout from '../../control-layout/control-layout';
import Checkbox from '../../../../ui/checkboxes/checkbox';

const SavingToCrmBlock = () => {
  const [blockName, setBlockName] = useState('Сохранение в CRM');
  const [crmcheckboxes, setCrmCheckboxes] = useState([
    { label: 'CRM 1', checked: true },
    { label: 'CRM 2', checked: false },
    { label: 'CRM 3', checked: false },
  ]);

  const [saveas, setSaveAs] = useState([
    { label: 'Новая запись', checked: true },
    { label: 'Дополнить запись', checked: false },
  ]);

  const handleChangeSaveAs = (index: number, checked: boolean) => {
    setSaveAs((prevState) => {
      const updatedCheckboxes = [...prevState];
      updatedCheckboxes[index].checked = checked;
      if (checked) {
        updatedCheckboxes.forEach((checkbox, i) => {
          if (i !== index) {
            checkbox.checked = false;
          }
        });
      }
      return updatedCheckboxes;
    });
  };

  const handleChangeCrm = (index: number, checked: boolean) => {
    setCrmCheckboxes((prevState) => {
      const updatedCheckboxes = [...prevState];
      updatedCheckboxes[index].checked = checked;
      if (checked) {
        updatedCheckboxes.forEach((checkbox, i) => {
          if (i !== index) {
            checkbox.checked = false;
          }
        });
      }
      return updatedCheckboxes;
    });
  };

  const handleNameChange = (newName: string) => {
    setBlockName(newName);
  };

  return (
    <div>
      <ControlLayout
        type="Сохранение в CRM"
        name={blockName}
        nameSetter={handleNameChange}
      >
        <div className={styles.chekboxblocks}>
          <div className={styles.block}>
            <h3 className={styles.subtitle}>Выбор CRM</h3>
            <div className={styles.checkboxes}>
              {crmcheckboxes.map((checkbox, index: any) => (
                <Checkbox
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  label={checkbox.label}
                  checked={checkbox.checked}
                  onChange={(checked) => handleChangeCrm(index, checked)}
                />
              ))}
            </div>
          </div>
          <div className={styles.block}>
            <h3 className={styles.subtitle}>Сохранить как</h3>
            <div className={styles.checkboxes}>
              {saveas.map((checkbox, index: any) => (
                <Checkbox
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  label={checkbox.label}
                  checked={checkbox.checked}
                  onChange={(checked) => handleChangeSaveAs(index, checked)}
                />
              ))}
            </div>
          </div>
        </div>
      </ControlLayout>
    </div>
  );
};

export default SavingToCrmBlock;
