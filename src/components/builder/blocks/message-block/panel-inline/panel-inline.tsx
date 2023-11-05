import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import LabeledInput from '../../../labeledInput/labeledInput';
import ConstructorAddButton from '../../../../../ui/buttons/constructor-add-button/constructor-add-button';
import styles from './panel-inline.module.scss';

interface IPanelInline {
  title: string;
  horizontalAmount?: number;
  verticalAmount?: number;
}

const PanelInline: FC<IPanelInline> = ({
  title,
  horizontalAmount,
  verticalAmount,
}) => {
  const [horButtons, setHorButtons] = useState<any[]>(
    new Array(horizontalAmount || 0)
  );
  const [verButtons, setVerButtons] = useState<any[]>(
    new Array(verticalAmount || 0)
  );

  const addHor = () => {
    setHorButtons([...horButtons, uuidv4()]);
  };

  const addVer = () => {
    setVerButtons([...verButtons, uuidv4()]);
  };

  return (
    <div className={styles.wrapperButtons}>
      <LabeledInput title={title} extraClass={styles.extraClass}>
        <div className={styles.container}>
          {horButtons.map((item) => {
            return (
              <article key={item} className={styles['button-imitation']} />
            );
          })}
          <div className={styles.wrapperButton}>
            <ConstructorAddButton onClick={addHor} icon="horizontal inline">
              Горизонтальный инлайн
            </ConstructorAddButton>
          </div>
          <hr className={styles['split-line']} />
          {verButtons.map((item) => {
            return (
              <article key={item} className={styles['button-imitation']} />
            );
          })}
          <div className={styles.wrapperButton}>
            <ConstructorAddButton onClick={addVer} icon="vertical inline">
              Вертикальный инлайн
            </ConstructorAddButton>
          </div>
        </div>
      </LabeledInput>
    </div>
  );
};

export default PanelInline;
