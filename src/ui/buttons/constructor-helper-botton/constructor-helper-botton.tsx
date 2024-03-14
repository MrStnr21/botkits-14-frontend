import { FC, useEffect } from 'react';

import { Divider } from '@mui/material';
import styles from './constructor-helper-botton.module.scss';
import ButtonIcon from '../button-icon/button-icon';
import { IconName } from '../../icon/utils';

export interface IConstructorHelperButton {
  askButtonHtmlType?: 'button' | 'submit' | 'reset';
  deleteButtonHtmlType?: 'button' | 'submit' | 'reset';
  askOnClick?: () => void;
  deleteOnClick: () => void;
  askIcon: IconName;
  color?: boolean;
  colorOnClick?: (newColor: string) => void;
  isVisible?: boolean;
  hide?: () => void;
}

const ConstructorHelperButton: FC<IConstructorHelperButton> = ({
  askButtonHtmlType = 'button',
  deleteButtonHtmlType = 'button',
  askOnClick,
  deleteOnClick,
  askIcon,
  color = false,
  colorOnClick,
  isVisible = true,
  hide,
}) => {
  const colorTypes = ['white', 'red', 'green', 'blue'];

  /* Скрытие элемента при клике, переработать */
  function documentListener() {
    if (hide) {
      hide();
    }
  }

  function menuListener(e: React.MouseEvent) {
    e.stopPropagation();
  }

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        document.addEventListener('click', documentListener);
      }, 0);
    }
    return () => {
      document.removeEventListener('click', documentListener);
    };
  }, [isVisible]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isVisible && (
        <div
          onClick={menuListener}
          className={`${styles.container}${
            color ? ` ${styles.container_color}` : ''
          }`}
        >
          <div
            className={`${styles.wrapper}${
              color ? ` ${styles.wrapper_color}` : ''
            }`}
          >
            {color
              ? colorTypes.map((colorType) => (
                  <button
                    key={colorType}
                    className={styles[`color_button_${colorType}`]}
                    onClick={() => {
                      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                      colorOnClick ? colorOnClick(colorType) : () => {};
                    }}
                    type="button"
                    aria-label="colorType"
                  />
                ))
              : null}
          </div>
          <ButtonIcon
            onClick={askOnClick}
            icon={askIcon}
            // eslint-disable-next-line react/button-has-type
            type={askButtonHtmlType}
            btnStyle={`${styles.button} ${styles.blue}`}
          />
          <Divider orientation="vertical" flexItem className={styles.divider} />
          <ButtonIcon
            onClick={deleteOnClick}
            icon="delete"
            // eslint-disable-next-line react/button-has-type
            type={deleteButtonHtmlType}
            btnStyle={`${styles.button} ${styles.grey}`}
          />
        </div>
      )}
    </>
  );
};

export default ConstructorHelperButton;
