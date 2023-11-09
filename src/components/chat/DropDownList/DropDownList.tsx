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
        <div className={stylesList.accordion__container}>
          <Typography tag="p" className={stylesList.accordion__textinfo}>
            <Typography tag="span" className={stylesList.accordion__title}>
              {info.one.title}
            </Typography>
            <Typography tag="span" className={stylesList.accordion__paragraph}>
              `{info.one.paragraph}`
            </Typography>
          </Typography>
          <Typography tag="p" className={stylesList.accordion__textInfo}>
            <Typography tag="span" className={stylesList.accordion__title}>
              {info.two.title}
            </Typography>
            <Typography tag="span" className={stylesList.accordion__paragraph}>
              `{info.two.paragraph}`
            </Typography>
          </Typography>
        </div>
      )}
    </div>
  );
};

export default DropDownList;
