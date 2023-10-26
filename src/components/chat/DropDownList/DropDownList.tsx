import { FC, useState } from 'react';
import ChevronIcon from '../../icons/Chevron/ChevronIcon';
import stylesList from './DropDownList.module.scss';
import Typography from '../../../ui/typography/typography';

interface IDropDownList {
  caption: string;
}

const DropDownList: FC<IDropDownList> = ({
  caption = 'Информация о пользователе',
}): JSX.Element => {
  const [isOpened, setIsOpened] = useState(false);
  const info = {
    one: {
      title: 'Последнее действие:',
      paragraph: '3 мин назад',
    },
    two: {
      title: 'Первое действие:',
      paragraph: '12.02.2021',
    },
  };

  return (
    <div>
      <div
        className={stylesList.accordion}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        <Typography tag="p" className={stylesList.text}>
          {caption}
        </Typography>
        <ChevronIcon position={`${isOpened ? 'up' : 'down'}`} />
      </div>
      {isOpened && (
        <div className={stylesList.container}>
          <Typography tag="p" className={stylesList.textinfo}>
            <Typography tag="span" className={stylesList.title}>
              {info.one.title}
            </Typography>
            {` ${info.one.paragraph}`}
          </Typography>
          <Typography tag="p" className={stylesList.textinfo}>
            <Typography tag="span" className={stylesList.title}>
              {info.two.title}
            </Typography>
            {` ${info.two.paragraph}`}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default DropDownList;
