import { FC } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';

import { useMediaQuery } from '@mui/material';
import LabeledInput from '../../../labeledInput/labeledInput';
import ConstructorAddButton from '../../../../../ui/buttons/constructor-add-button/constructor-add-button';
import styles from './panel-inline.module.scss';

interface IPanelInline {
  title: string;
  addVerticalButton?: () => void;
  addHorizontalButton?: () => void;
}

enum ButtonPlaceHeight {
  desk = 40,
  offset = 12,
  mobile = 27,
}

const PanelInline: FC<IPanelInline> = ({
  title,
  addVerticalButton,
  addHorizontalButton,
}) => {
  const isMobile = useMediaQuery('(max-width: 520px)');
  const { getNodes } = useReactFlow();
  const id = useNodeId() || '';

  const nodes = getNodes();

  const vertical = nodes.filter((item) => {
    return item.parentNode === id && item.data.direction === 'vertical';
  });

  const horizontal = nodes.filter((item) => {
    return item.parentNode === id && item.data.direction === 'horizontal';
  });

  const verticalHeight = `${
    (vertical.length ? 12 : 0) +
    ((isMobile ? ButtonPlaceHeight.mobile : ButtonPlaceHeight.desk) +
      ButtonPlaceHeight.offset) *
      vertical.length
  }px`;

  const horizontalHeight = `${
    (horizontal.length ? 12 : 0) +
    ((isMobile ? ButtonPlaceHeight.mobile : ButtonPlaceHeight.desk) +
      ButtonPlaceHeight.offset) *
      horizontal.length
  }px`;

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
              onClick={addHorizontalButton}
              icon="horizontal inline"
            >
              Горизонтальный инлайн
            </ConstructorAddButton>
          </div>
          <hr className={styles['split-line']} />
          <div className={styles.buttons} style={{ height: verticalHeight }} />
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
