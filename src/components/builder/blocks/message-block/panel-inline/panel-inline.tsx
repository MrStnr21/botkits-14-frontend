import { FC } from 'react';

import LabeledInput from '../../../labeledInput/labeledInput';
import ConstructorAddButton from '../../../../../ui/buttons/constructor-add-button/constructor-add-button';
import styles from './panel-inline.module.scss';

interface IPanelInline {
  title: string;
  horButtons: string[];
  verButtons: string[];
  addVerticalButton?: () => void;
  addHorizontalButton?: () => void;
}

const PanelInline: FC<IPanelInline> = ({
  title,
  horButtons,
  verButtons,
  addVerticalButton,
  addHorizontalButton,
}) => {
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
            <ConstructorAddButton
              onClick={addHorizontalButton}
              icon="horizontal inline"
            >
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
            <ConstructorAddButton
              onClick={addVerticalButton}
              icon="vertical inline"
            >
              Вертикальный инлайн
            </ConstructorAddButton>
          </div>
        </div>
      </LabeledInput>
    </div>
  );
};

export default PanelInline;
