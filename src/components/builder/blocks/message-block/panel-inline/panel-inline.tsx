import { FC } from 'react';

import { useMediaQuery } from '@mui/material';
import LabeledInput from '../../../labeledInput/labeledInput';
import ConstructorAddButton from '../../../../../ui/buttons/constructor-add-button/constructor-add-button';
import styles from './panel-inline.module.scss';

interface IPanelInline {
  title: string;
  addVerticalButton?: ({ x, y }: { x: number; y: number }) => () => void;
  addHorizontalButton?: ({ x, y }: { x: number; y: number }) => () => void;
  buttonsAmountBefore: number;
  horizontalButtonsAmount: number;
  verticalButtonsAmount: number;
}

enum ButtonPlaceHeight {
  desk = 40,
  offsetY = 12,
  mobile = 27,
  offsetX = 32,
}

const PanelInline: FC<IPanelInline> = ({
  title,
  addVerticalButton,
  addHorizontalButton,
  buttonsAmountBefore,
  horizontalButtonsAmount,
  verticalButtonsAmount,
}) => {
  const isMobile = useMediaQuery('(max-width: 520px)');

  const buttonHeight =
    (isMobile ? ButtonPlaceHeight.mobile : ButtonPlaceHeight.desk) +
    ButtonPlaceHeight.offsetY;

  const verticalHeight = buttonHeight * verticalButtonsAmount;
  const horizontalHeight = buttonHeight * horizontalButtonsAmount;

  console.log(verticalHeight, horizontalHeight);
  return (
    <div className={styles.wrapperButtons}>
      <LabeledInput title={title} extraClass={styles.extraClass}>
        <div className={styles.container}>
          <div
            className={styles.buttons}
            style={{ height: horizontalHeight }}
          />
          <div className={styles.wrapperButton}>
            <ConstructorAddButton
              onClick={
                addHorizontalButton &&
                addHorizontalButton({
                  x: ButtonPlaceHeight.offsetX,
                  y: horizontalHeight + buttonsAmountBefore * buttonHeight,
                })
              }
              icon="horizontal inline"
            >
              Горизонтальный инлайн
            </ConstructorAddButton>
          </div>
          <hr className={styles['split-line']} />
          <div className={styles.buttons} style={{ height: verticalHeight }} />
          <div className={styles.wrapperButton}>
            <ConstructorAddButton
              onClick={
                addVerticalButton &&
                addVerticalButton({
                  x: ButtonPlaceHeight.offsetX,
                  y:
                    verticalHeight +
                    buttonsAmountBefore * buttonHeight +
                    horizontalButtonsAmount * buttonHeight,
                })
              }
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
