import { FC } from 'react';
import { Node } from 'reactflow';

import { useMediaQuery } from '@mui/material';
import LabeledInput from '../../../labeledInput/labeledInput';
import ConstructorAddButton from '../../../../../ui/buttons/constructor-add-button/constructor-add-button';
import styles from './panel-inline.module.scss';
import { ButtonSizes, ButtonSizesMobile } from '../../../utils/data';

interface IPanelInline {
  title: string;
  addVerticalButton?: ({
    x,
    y,
    mobY,
    deskY,
  }: {
    x: number;
    y: number;
    mobY: number;
    deskY: number;
  }) => () => void;
  addHorizontalButton?: ({
    x,
    y,
    mobY,
    deskY,
  }: {
    x: number;
    y: number;
    mobY: number;
    deskY: number;
  }) => () => void;
  buttonsBefore: Node<any>[];
  horizontalButtons: Node<any>[];
  verticalButtons: Node<any>[];
}

const PanelInline: FC<IPanelInline> = ({
  title,
  addVerticalButton,
  addHorizontalButton,
  buttonsBefore,
  horizontalButtons,
  verticalButtons,
}) => {
  const isMobile = useMediaQuery('(max-width: 620px)');
  const buttonSizes = isMobile ? ButtonSizesMobile : ButtonSizes;

  const openedHorizontal = horizontalButtons.filter(
    (item) => item.data.additionalData === true
  ).length;

  const openedVertical = verticalButtons.filter(
    (item) => item.data.additionalData === true
  ).length;

  const openedBefore = buttonsBefore.filter(
    (item) => item.data.additionalData === true
  ).length;

  const buttonHeight = buttonSizes.buttonHeight + buttonSizes.gap;
  const buttonHeightDesk = ButtonSizes.buttonHeight + ButtonSizes.gap;
  const buttonHeightMobile =
    ButtonSizesMobile.buttonHeight + ButtonSizesMobile.gap;

  const verticalHeight =
    buttonHeight * verticalButtons.length +
    openedVertical * buttonSizes.addString;
  const horizontalHeight =
    buttonHeight * horizontalButtons.length +
    openedHorizontal * buttonSizes.addString;

  const verticalHeightDesk =
    buttonHeightDesk * verticalButtons.length +
    openedVertical * ButtonSizes.addString;
  const horizontalHeightDesk =
    buttonHeightDesk * horizontalButtons.length +
    openedHorizontal * ButtonSizes.addString;

  const verticalHeightMobile =
    buttonHeightMobile * verticalButtons.length +
    openedVertical * ButtonSizesMobile.addString;
  const horizontalHeightMobile =
    buttonHeightMobile * horizontalButtons.length +
    openedHorizontal * ButtonSizesMobile.addString;

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
                  x: buttonSizes.startX,
                  y:
                    horizontalHeight +
                    buttonsBefore.length * buttonHeight +
                    openedBefore * buttonSizes.addString,
                  deskY:
                    horizontalHeightDesk +
                    buttonsBefore.length * buttonHeightDesk +
                    openedBefore * ButtonSizes.addString,
                  mobY:
                    horizontalHeightMobile +
                    buttonsBefore.length * buttonHeightMobile +
                    openedBefore * ButtonSizesMobile.addString,
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
                  x: buttonSizes.startX,
                  y:
                    verticalHeight +
                    buttonsBefore.length * buttonHeight +
                    horizontalButtons.length * buttonHeight +
                    openedHorizontal * buttonSizes.addString +
                    openedBefore * buttonSizes.addString,
                  deskY:
                    verticalHeightDesk +
                    buttonsBefore.length * buttonHeightDesk +
                    horizontalButtons.length * buttonHeightDesk +
                    openedHorizontal * ButtonSizes.addString +
                    openedBefore * ButtonSizes.addString,
                  mobY:
                    verticalHeightMobile +
                    buttonsBefore.length * buttonHeightMobile +
                    horizontalButtons.length * buttonHeightMobile +
                    openedHorizontal * ButtonSizesMobile.addString +
                    openedBefore * ButtonSizesMobile.addString,
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
