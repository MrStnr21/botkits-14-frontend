import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import LabeledInput from '../../../labeledInput/labeledInput';
import ConstructorAddButton from '../../../../../ui/buttons/constructor-add-button/constructor-add-button';
import ConstructorHelperButton from '../../../../../ui/buttons/constructor-helper-botton/constructor-helper-botton';
// import AskPhoneIcon from '../../../images/icon/24x24/constructor/ask-phone.svg';
import UrlIcon from '../../../../../images/icon/24x24/constructor/url.svg';

import styles from './panel-inline.module.scss';

interface IPanelInline {
  // eslint-disable-next-line react/no-unused-prop-types
  title: string;
}

type TButtonProps = {
  onClick: (id: string) => void;
  color: 'white' | 'red' | 'green' | 'blue';
  name: string;
  children: string;
  id: string;
  askOnClick?: VoidFunction;
  deleteOnClick?: VoidFunction;
  askIcon: string;
  colorOnClick?: () => void;
};

const Button: FC<TButtonProps> = ({
  name,
  onClick,
  color,
  children,
  id,
  askOnClick,
  deleteOnClick,
  askIcon,
  colorOnClick,
}) => {
  const additionalClass =
    color === 'white'
      ? styles.buttonWhite
      : color === 'red'
      ? styles['button-red']
      : color === 'green'
      ? styles['button-green']
      : styles['button-blue'];

  return (
    <>
      <ConstructorHelperButton
        askOnClick={askOnClick}
        deleteOnClick={deleteOnClick}
        askIcon={askIcon}
        color
        colorOnClick={colorOnClick}
      />
      <button
        type="button"
        className={`${styles.button} ${additionalClass}`}
        onClick={() => onClick(id)}
      >
        {name}
        {children}
      </button>
    </>
  );
};

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
            <Button
              onClick={() => {}}
              color="blue"
              name="Кнопка"
              aria-label="colorType"
              id={id}
              askOnClick={() => {
                url = 'url...';
              }}
              deleteOnClick={() => {}}
              askIcon={UrlIcon}
              colorOnClick={() => {}}
            >
              {url}
            </Button>
          ))}
          <div className={styles.wrapperButtonWidth}>
            <div className={styles.wrapperButtonHeight}>
              <ConstructorAddButton onClick={addHor} icon="horizontal inline">
                Горизонтальный инлайн
              </ConstructorAddButton>
            </div>
          </div>

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
