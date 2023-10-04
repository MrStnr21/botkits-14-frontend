import { FC } from 'react';

import stylesFilters from './SearchFilters.module.scss';

const SearchFilters: FC = (): JSX.Element => {
  return (
    <div className={stylesFilters.container}>
      <p className={stylesFilters.text}>Сначала новые</p>
      <p className={stylesFilters.text}>Сначала старые</p>
      <p className={stylesFilters.text}>Неотвеченные</p>
    </div>
  );
};

export default SearchFilters;
