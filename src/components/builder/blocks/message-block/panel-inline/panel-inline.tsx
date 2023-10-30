import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import LabeledInput from '../../../labeledInput/labeledInput';
import ConstructorAddButton from '../../../../../ui/buttons/constructor-add-button/constructor-add-button';

import styles from './panel-inline.module.scss';

interface IPanelInline {
  // eslint-disable-next-line react/no-unused-prop-types
  title: string;
}

const PanelInline: FC<IPanelInline> = () => {
  const [horButtons, setHorButtons] = useState<string[]>([]);

  const addHor = () => {
    const newHorButtons = [...horButtons];
    newHorButtons.push(uuidv4());
    setHorButtons(newHorButtons);
  };

  const addVer = () => {};

  return (
    <article className={styles.container}>
      <div className={styles.wrapperButtons}>
        <LabeledInput title="Инлайн кнопка" extraClass={styles.extraClass}>
          <div className={styles.wrapperButtonWidth}>
            <div className={styles.wrapperButtonHeight}>
              <ConstructorAddButton onClick={addHor} icon="horizontal inline">
                Горизонтальный инлайн
              </ConstructorAddButton>
            </div>
          </div>
          {/* <Input
            onChange={() => {}}
            styled="bot-builder-default"
            placeholder="Введите параметр"
  /> */}
          <div className={styles.wrapperButtonWidth}>
            <div className={styles.wrapperButtonHeight}>
              <ConstructorAddButton onClick={addVer} icon="vertical inline">
                Вертикальный инлайн
              </ConstructorAddButton>
            </div>
          </div>
        </LabeledInput>
      </div>
    </article>
  );
};

export default PanelInline;
