import { FC } from 'react';
import { Node } from 'reactflow';

import { useMediaQuery } from '@mui/material';
import LabeledInput from '../../../labeledInput/labeledInput';
import ConstructorAddButton from '../../../../../ui/buttons/constructor-add-button/constructor-add-button';
import styles from './panel-inline.module.scss';
import { ButtonSizes, ButtonSizesMobile } from '../../../utils/data';

interface IPanelInline {
  title: string;
  addVerticalButton?: ({ x, y }: { x: number; y: number }) => () => void;
  addHorizontalButton?: ({ x, y }: { x: number; y: number }) => () => void;
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
  const isMobile = useMediaQuery('(max-width: 520px)');
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

  const verticalHeight =
    buttonHeight * verticalButtons.length +
    openedVertical * buttonSizes.addString;
  const horizontalHeight =
    buttonHeight * horizontalButtons.length +
    openedHorizontal * buttonSizes.addString;

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
