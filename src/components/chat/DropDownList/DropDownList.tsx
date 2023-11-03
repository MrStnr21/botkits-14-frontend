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
        <Typography tag="p">{caption}</Typography>
        <ChevronIcon position={`${isOpened ? 'up' : 'down'}`} />
      </div>
      {isOpened && (
        <div className={stylesList.container}>
          <p className={stylesList.textinfo}>
            <span className={stylesList.title}>{info.one.title}</span>
            {` ${info.one.paragraph}`}
          </p>
          <p className={stylesList.textinfo}>
            <span className={stylesList.title}>{info.two.title}</span>
            {` ${info.two.paragraph}`}
          </p>
        </div>
      )}
    </div>
  );
};

export default DropDownList;
