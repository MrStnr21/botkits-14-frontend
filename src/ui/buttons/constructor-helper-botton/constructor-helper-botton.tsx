import { FC } from 'react';
import { ReactSVG } from 'react-svg';
import DeleteIcon from '../../../images/icon/24x24/constructor/delete.svg';

import stylesConstructorHelperButton from './constructor-helper-botton.module.scss';

export interface IConstructorHelperButton {
  askButtonHtmlType?: 'button' | 'submit' | 'reset';
  deleteButtonHtmlType?: 'button' | 'submit' | 'reset';
  askOnClick?: VoidFunction;
  deleteOnClick?: VoidFunction;
  askIcon: string;
  color?: boolean;
  colorOnClick?: () => void;
}

const ConstructorHelperButton: FC<IConstructorHelperButton> = ({
  askButtonHtmlType = 'button',
  deleteButtonHtmlType = 'button',
  askOnClick,
  deleteOnClick,
  askIcon,
  color = false,
  colorOnClick,
}) => {
  const colorTypes = ['white', 'red', 'green', 'blue'];
  return (
    <div
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
                onClick={colorOnClick}
                type="button"
                aria-label="colorType"
              />
            ))
          : null}
      </div>
      <button
        className={stylesConstructorHelperButton.ask_button}
        onClick={askOnClick}
        // eslint-disable-next-line react/button-has-type
        type={askButtonHtmlType}
      >
        <ReactSVG src={askIcon} />
      </button>
      <button
        className={stylesConstructorHelperButton.delete_button}
        onClick={deleteOnClick}
        // eslint-disable-next-line react/button-has-type
        type={deleteButtonHtmlType}
      >
        <ReactSVG src={DeleteIcon} />
      </button>
    </div>
  );
};

export default ConstructorHelperButton;
