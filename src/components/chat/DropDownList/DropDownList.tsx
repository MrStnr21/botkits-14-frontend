import { FC } from 'react';
import ChevronIcon from '../../icons/Chevron/ChevronIcon';
import stylesList from './DropDownList.module.scss';

interface IDropDownList {
  caption: string;
  position?: string;
}

const DropDownList: FC<IDropDownList> = ({
  caption = 'Информация о пользователе',
  position = 'down',
}): JSX.Element => {
  return (
    <div className={stylesList.container}>
      <p className={stylesList.text}>{caption}</p>
      <ChevronIcon position={position} />
    </div>
  );
};

export default DropDownList;
