import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import LabeledInput from '../../../labeledInput/labeledInput';
import ConstructorAddButton from '../../../../../ui/buttons/constructor-add-button/constructor-add-button';
// import AskPhoneIcon from '../../../images/icon/24x24/constructor/ask-phone.svg';
import UrlIcon from '../../../../../images/icon/24x24/constructor/url.svg';

import styles from './panel-inline.module.scss';
import InlineButton from '../button-inline/button-inline';

interface IPanelInline {
  // eslint-disable-next-line react/no-unused-prop-types
  title: string;
}

const PanelInline: FC<IPanelInline> = () => {
  const [horButtons, setHorButtons] = useState<string[]>([]);
  const [verButtons, setVerButtons] = useState<string[]>([]);

  const addHor = () => {
    const newHorButtons = [...horButtons];
    newHorButtons.push(uuidv4());
    setHorButtons(newHorButtons);
  };

  const addVer = () => {
    const newVerButtons = [...verButtons];
    newVerButtons.push(uuidv4());
    setVerButtons(newVerButtons);
  };

  const deleteButton = (delId: string) => {
    // eslint-disable-next-line no-console
    console.log(horButtons);
    if (horButtons.includes(delId)) {
      const newHorButtons = horButtons.filter((id) => id !== delId);
      setHorButtons(newHorButtons);
    } else {
      const newVerButtons = verButtons.filter((id) => id !== delId);
      setVerButtons(newVerButtons);
    }
  };

  let url: string;

  return (
    <article className={styles.container}>
      <div className={styles.wrapperButtons}>
        <LabeledInput title="Инлайн кнопка" extraClass={styles.extraClass}>
          {horButtons.map((id) => (
            <InlineButton
              onClick={() => {}}
              name="Кнопка"
              aria-label="colorType"
              id={id}
              key={id}
              // askOnClick={() => {
              //   url = 'url...';
              // }}
              deleteOnClick={() => deleteButton(id)}
              askIcon={UrlIcon}
            >
              {url}
            </InlineButton>
          ))}
          <div className={styles.wrapperButtonWidth}>
            <div className={styles.wrapperButtonHeight}>
              <ConstructorAddButton onClick={addHor} icon="horizontal inline">
                Горизонтальный инлайн
              </ConstructorAddButton>
            </div>
          </div>
          {verButtons.map((id) => (
            <InlineButton
              onClick={() => {}}
              name="Кнопка"
              aria-label="colorType"
              id={id}
              key={id}
              // askOnClick={() => {
              //   url = 'url...';
              // }}
              deleteOnClick={() => deleteButton(id)}
              askIcon={UrlIcon}
            >
              {url}
            </InlineButton>
          ))}
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
