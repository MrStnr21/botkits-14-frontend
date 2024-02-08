import React, { FC } from 'react';

import styles from './files-field.module.scss';

import videoIcon from '../../../../../images/icon/24x24/add content/video.svg';
import musicIcon from '../../../../../images/icon/24x24/add content/music.svg';
import imageIcon from '../../../../../images/icon/24x24/add content/image.svg';
import fileIcon from '../../../../../images/icon/24x24/add content/file.svg';

import { BUTTON_NAME } from '../../../../../utils/constants';
import Button from './button/button';

type TFielsFieldProps = {
  image?: boolean;
  video?: boolean;
  audio?: boolean;
  doc?: boolean;
  addFile?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FilesField: FC<TFielsFieldProps> = ({
  image,
  video,
  audio,
  doc,
  addFile,
}) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.header}>Дополните контентом</h3>
      <div className={styles.inputsBox}>
        <Button
          type={BUTTON_NAME.IMAGE}
          icon={imageIcon}
          accept=".jpg, .png, .gif"
          isActive={image}
          onChange={addFile}
        />
        <Button
          type={BUTTON_NAME.VIDEO}
          icon={videoIcon}
          accept=".mp4, avi"
          isActive={video}
          onChange={addFile}
        />
        <Button
          type={BUTTON_NAME.FILE}
          icon={fileIcon}
          accept=".docx, .doc, .pdf"
          isActive={doc}
          onChange={addFile}
        />
        <Button
          type={BUTTON_NAME.AUDIO}
          icon={musicIcon}
          accept="audio/*"
          isActive={audio}
          onChange={addFile}
        />
      </div>
    </div>
  );
};

export default FilesField;
