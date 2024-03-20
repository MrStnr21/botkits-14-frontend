import { FC } from 'react';
import { ReactSVG } from 'react-svg';

import styles from './button-instruction.module.scss';
import Typography from '../../typography/typography';

export interface IButtonInstruction {
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  url: string;
  disabled?: boolean;
  children: React.ReactNode;
  icon: string;
}

const ButtonInstruction: FC<IButtonInstruction> = ({
  buttonHtmlType = 'button',
  url,
  disabled,
  children,
  icon,
}) => {
  const onClick = () => {
    window.open(url, '_blank');
  };

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={buttonHtmlType}
      onClick={onClick}
      className={styles.button}
      disabled={disabled}
    >
      <div className={styles.image_box}>
        <ReactSVG src={icon} />
      </div>
      <div className={styles.text_container}>
        <Typography tag="p" className={styles.text}>
          {children}
        </Typography>
      </div>
    </button>
  );
};

export default ButtonInstruction;
