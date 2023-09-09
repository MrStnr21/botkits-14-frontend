// to do: Input
// https://trello.com/c/f5dfbuqo/8-fields-constructor
import { FC } from 'react';
import stylesInput from './load-pages.module.scss';
import { ReactComponent as Plus } from '../../../images/icon/36x36/add.svg';
import PageItem from '../page-item/page-item';

interface ILoadPages {
  disabled?: boolean;
  arr: any;
  onClick: () => void;
}

const LoadPages: FC<ILoadPages> = ({ arr = [], onClick, disabled }) => {
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
        <div
          className={`${stylesInput.selects_items} ${
            arr.length > 5 ? stylesInput.scroll : ''
          }`}
        >
          <PageItem type="upload" onClick={onClick} />
          {arr.map((item: any) => (
            <PageItem {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LoadPages;
