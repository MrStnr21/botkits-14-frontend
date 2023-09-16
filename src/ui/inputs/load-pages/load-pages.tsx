import { FC } from 'react';

import stylesInput from './load-pages.module.scss';

import { ReactComponent as Plus } from '../../../images/icon/36x36/add.svg';

import PageItem from '../page-item/page-item';

interface ILoadPages {
  disabled?: boolean;
  arr: any;
  onClick: () => void;
}

const LoadPages: FC<ILoadPages> = ({
  arr = [],
  onClick,
  disabled,
}): JSX.Element => {
  return (
    <div className={stylesInput.selects}>
      {!arr.length ? (
        <button
          className={stylesInput.selects_button}
          disabled={disabled}
          type="button"
          onClick={onClick}
        >
          <Plus className={stylesInput.upload_img} />
          <p className={stylesInput.selects_text}>Загрузить страницу</p>
        </button>
      ) : (
        <ul
          className={`${stylesInput.selects_items} ${
            arr.length > 5 ? stylesInput.scroll : ''
          }`}
        >
          <li className={stylesInput.selects_item}>
            <PageItem type="upload" onClick={onClick} />
          </li>
          {arr.map((item: any, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <li className={stylesInput.selects_item} key={index}>
              <PageItem {...item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LoadPages;
