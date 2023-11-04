import React, { FC, useRef } from 'react';

import styles from './files-field.module.scss';

import ConstructorIconBotton from '../../../../../ui/buttons/constructor-icon-botton/constructor-icon-botton';

import videoIcon from '../../../../../images/icon/24x24/add content/video.svg';
import musicIcon from '../../../../../images/icon/24x24/add content/music.svg';
import imageIcon from '../../../../../images/icon/24x24/add content/image.svg';
import fileIcon from '../../../../../images/icon/24x24/add content/file.svg';

import { BUTTON_NAME } from '../../../../../utils/constants';

interface IButton {
  type: BUTTON_NAME;
  isActive?: boolean;
  icon: string;
  accept: string; // но тут д.б.расширения
}

const Button: FC<IButton> = ({ type, icon, accept, isActive }): JSX.Element => {
  const ref = useRef<null | HTMLInputElement>(null);

  const onClick = () => {
    if (ref.current) {
      ref.current.click();
    }
  };
  return (
    <div>
      <input
        ref={ref}
        type="file"
        id={type}
        name={type}
        accept={accept}
        hidden
      />
      <label htmlFor={type}>
        <ConstructorIconBotton
          value={type}
          onClick={onClick}
          active={isActive}
          icon={icon}
        />
      </label>
    </div>
  );
};

const FielsField: FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.header}>Дополните контентом</h3>
      <div className={styles.inputsBox}>
        <Button
          type={BUTTON_NAME.IMAGE}
          icon={imageIcon}
          accept=".jpg, .png, .gif"
        />
        <Button type={BUTTON_NAME.VIDEO} icon={videoIcon} accept=".mp4, avi" />
        <Button
          type={BUTTON_NAME.FILE}
          icon={fileIcon}
          accept=".docx, .doc, .pdf "
        />
        <Button type={BUTTON_NAME.AUDIO} icon={musicIcon} accept="audio/*" />
      </div>
    </div>
  );
};

export default FielsField;
