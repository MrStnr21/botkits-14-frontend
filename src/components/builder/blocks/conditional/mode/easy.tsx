import { FC, useMemo } from 'react';
import styles from './mode.module.scss';
import { selectValues, signSelectValues } from '../../../utils/data';
import { TVariable } from '../../../../../services/types/builder';
import Input from '../../../../../ui/inputs/input/input';
import MenumenuSelectFlow from '../../../../../ui/menus/menu-select-flow/menu-select-flow';

export type TEasyBlockContent = {
  id: string;
  condition?: string;
  variable?: TVariable;
  sign?: string;
};

type TEasyBlockProps = TEasyBlockContent & {
  setCondition: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  setVariable: Function;
  setSign: Function;
};

const EasyMode: FC<TEasyBlockProps> = ({
  id,
  variable,
  sign,
  condition,
  setCondition,
  setVariable,
  setSign,
}) => {
  const buttonsSignSelect = signSelectValues.map((item) => item.nameValue);
  const buttonsSelectValues = selectValues.map((item) => item.nameValue);
  const active = useMemo(
    () => variable && Object.values(variable)[0] !== '',
    [variable]
  );

  return (
    <div className={styles['labeled-content']}>
      <div className={styles['selects-string']}>
        <div className={styles.selectsVariable}>
          <MenumenuSelectFlow
            width="184"
            buttons={buttonsSelectValues}
            nameMenu={(variable && Object.values(variable)[0]) || 'Переменная'}
            onClick={(name: string) => {
              setVariable(name);
            }}
            active={active}
          />
        </div>
        <div className={styles.selectsIcon}>
          <MenumenuSelectFlow
            width="52"
            buttons={buttonsSignSelect}
            nameMenu={sign || buttonsSignSelect[0]}
            onClick={(name: string) => {
              setSign(name);
            }}
            active
            isIcon
          />
        </div>
      </div>
      <Input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCondition(event, id)
        }
        styled="bot-builder-default"
        placeholder="Значение"
        value={condition}
      />
    </div>
  );
};

export default EasyMode;
