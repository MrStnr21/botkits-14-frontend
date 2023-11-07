import { FC, useRef, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import DeleteIcon from '../../../images/icon/24x24/constructor/delete.svg';

import stylesConstructorHelperButton from './constructor-helper-botton.module.scss';

export interface IConstructorHelperButton {
  askButtonHtmlType?: 'button' | 'submit' | 'reset';
  deleteButtonHtmlType?: 'button' | 'submit' | 'reset';
  askOnClick?: (val: boolean) => void;
  deleteOnClick: () => void;
  askIcon: string;
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

  const ref = useRef<null | HTMLDivElement>(null);

  /* Скрытие элемента при клике, переработать */
  function documentListener(e: MouseEvent) {
    if (hide && ref.current !== e.target) {
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
          ref={ref}
          className={`${stylesConstructorHelperButton.container}${
            color ? ` ${stylesConstructorHelperButton.container_color}` : ''
          }`}
        >
          <div
            className={`${stylesConstructorHelperButton.wrapper}${
              color ? ` ${stylesConstructorHelperButton.wrapper_color}` : ''
            }`}
          >
            {color
              ? colorTypes.map((colorType) => (
                  <button
                    key={colorType}
                    className={
                      stylesConstructorHelperButton[`color_button_${colorType}`]
                    }
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
          <button
            className={stylesConstructorHelperButton.ask_button}
            onClick={() => {
              if (askOnClick) askOnClick(true);
            }}
            // eslint-disable-next-line react/button-has-type
            type={askButtonHtmlType}
          >
            <ReactSVG src={askIcon} />
          </button>
          <button
            className={stylesConstructorHelperButton.delete_button}
            onClick={() => deleteOnClick}
            // eslint-disable-next-line react/button-has-type
            type={deleteButtonHtmlType}
          >
            <ReactSVG src={DeleteIcon} />
          </button>
        </div>
      )}
    </>
  );
};

export default ConstructorHelperButton;
