import React, { FC } from 'react';

import cn from 'classnames/bind';

import styles from './result-add-file.module.scss';

import { ReactComponent as docError } from '../../../../images/icon/add content/doc-error.svg'; // нет иконок с другими error, так что один вид у иконки-ошибки
import { ReactComponent as doc } from '../../../../images/icon/add content/doc-circle.svg';
import { ReactComponent as audio } from '../../../../images/icon/add content/play-blue.svg';
import { ReactComponent as image } from '../../../../images/icon/add content/image-blue.svg';

import { sizeFormated } from '../../../../utils/utils';
import Typography from '../../../typography/typography';

export interface IResultProps {
  name: string;
  type: string;
  error?: boolean;
  size: number;
}

const cx = cn.bind(styles);

const ResultAddFile: FC<IResultProps> = ({
  name,
  type,
  error,
  size,
}): JSX.Element => {
  const deleteFile = () => {
    // @todo отправляет запрос на сервер..м.б. id файла добавить в пропсы
  };

  // Styles
  let Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;

  switch (type) {
    case 'application/msword':
      Icon = error ? docError : doc;
      break;
    case 'audio/mp4':
    case 'audio/mpeg':
      Icon = error ? docError : audio;
      break;
    case 'image/jpeg':
      Icon = error ? docError : image;
      break;
    // case 'video/mp4':                      // там отображается видео-превью
    //   Icon = error ? docError : audio;
    //   break;
    default:
      Icon = doc;
      break;
  }

  const classBlock = cx('result', {
    result_error: error,
  });

  return (
    <div className={classBlock}>
      <Icon className={styles.result__icon} />
      <Typography tag="p" className={styles.result__name}>
        {name}
      </Typography>
      <Typography tag="p" className={styles.result__size}>
        {sizeFormated(size)}
      </Typography>
      <button
        type="button"
        aria-label="Удалить файл"
        className={styles.result__button}
        onClick={deleteFile}
      />
    </div>
  );
};

export default ResultAddFile;
