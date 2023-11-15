import { FC } from 'react';
import MenuSimple from '../../../ui/menus/menu-simple/menu-simple';
// import stylesFilters from './SearchFilters.module.scss';

interface ISearchFilters {
  active: boolean;
  onClick?: VoidFunction;
}

const SearchFilters: FC<ISearchFilters> = ({ active = true, onClick }) => {
  const array = ['Сначала новые', 'Сначала старые', 'Неотвеченные'];
  return (
    <div>
      <MenuSimple
        buttons={array}
        isScroll={false}
        isActive={active}
        top={40}
        left={133}
        size="chat"
        onClick={onClick}
      />
    </div>
  );
};

export default SearchFilters;
