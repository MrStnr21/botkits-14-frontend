import { FC } from 'react';
import { Node } from 'reactflow';

import { useMediaQuery } from '@mui/material';
import LabeledInput from '../../../labeledInput/labeledInput';
import ConstructorAddButton from '../../../../../ui/buttons/constructor-add-button/constructor-add-button';
import styles from './panel-inline.module.scss';
import { ButtonSizes } from '../../../utils/data';

interface IPanelInline {
  title: string;
  addVerticalButton?: ({ x, y }: { x: number; y: number }) => () => void;
  addHorizontalButton?: ({ x, y }: { x: number; y: number }) => () => void;
  buttonsBefore: Node<any>[];
  horizontalButtons: Node<any>[];
  verticalButtons: Node<any>[];
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
  buttonsBefore,
  horizontalButtons,
  verticalButtons,
}) => {
  const isMobile = useMediaQuery('(max-width: 520px)');

  const openedHorizontal = horizontalButtons.filter(
    (item) => item.data.additionalData === true
  ).length;

  const openedVertical = verticalButtons.filter(
    (item) => item.data.additionalData === true
  ).length;

  const openedBefore = buttonsBefore.filter(
    (item) => item.data.additionalData === true
  ).length;

  const buttonHeight =
    (isMobile ? ButtonPlaceHeight.mobile : ButtonPlaceHeight.desk) +
    ButtonPlaceHeight.offsetY;

  const additionalHeight = isMobile
    ? ButtonSizes.addStringMobile
    : ButtonSizes.addStringDesk;

  const verticalHeight =
    buttonHeight * verticalButtons.length + openedVertical * additionalHeight;
  const horizontalHeight =
    buttonHeight * horizontalButtons.length +
    openedHorizontal * additionalHeight;

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
                  y:
                    horizontalHeight +
                    buttonsBefore.length * buttonHeight +
                    openedBefore * additionalHeight,
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
                    buttonsBefore.length * buttonHeight +
                    horizontalButtons.length * buttonHeight +
                    openedHorizontal * additionalHeight +
                    openedBefore * additionalHeight,
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
