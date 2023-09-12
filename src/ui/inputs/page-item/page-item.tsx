// to do: Input
// https://trello.com/c/f5dfbuqo/8-fields-constructor
import { FC, useState } from 'react';
import stylesInput from './page-item.module.scss';
import imgDefault from '../../../images/avatar/circled/for group/default.svg';
import { ReactComponent as Plus } from '../../../images/icon/36x36/add.svg';
import { ReactComponent as Check } from '../../../images/icon/24x24/common/check.svg';

interface IPageItem {
  text?: string;
  type?: 'default' | 'upload';
  disabled?: true | false;
  image?: string;
  onClick: () => void;
}

const PageItem: FC<IPageItem> = ({
  type = 'default',
  text = 'Страница',
  disabled,
  onClick,
  image = imgDefault,
}) => {
  const [selected, setSelected] = useState(false);
  return (
    <button
      className={`${stylesInput.select} ${
        type === 'upload' ? stylesInput.select_upload : stylesInput.select_item
      } ${selected && stylesInput.selected}`}
      disabled={disabled}
      onClick={() => (type === 'default' ? setSelected(!selected) : onClick())}
      type="button"
    >
      {type === 'upload' ? (
        <>
          <Plus className={stylesInput.upload_img} />
          <p className={stylesInput.upload_text}>Загрузить</p>
        </>
      ) : (
        <>
          <div className={stylesInput.image}>
            <img src={image} alt="img" />
            {selected && (
              <>
                <div className={stylesInput.image_check} />
                <Check className={stylesInput.icon_check} />
              </>
            )}
          </div>

          <p className={stylesInput.text}>{text}</p>
        </>
      )}
    </button>
  );
};

export default PageItem;
