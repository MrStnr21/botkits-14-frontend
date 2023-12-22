import { FC } from 'react';
import styles from './select-pagination.module.scss';
import Select from '../../../ui/select/select';
import { Option } from '../../../utils/types';

type TSelectPaginationProps = {
  options: string[];
  value: string;
  handleSelect: (option: Option) => void;
  title: string;
};

const SelectPagination: FC<TSelectPaginationProps> = ({
  options,
  value,
  handleSelect,
  title,
}) => {
  return (
    <div className={styles.content}>
      <span className={styles.title}>{title}</span>
      <div className={styles.selectWrapper}>
        <Select
          options={options}
          currentOption={value}
          handleSelect={handleSelect}
        />
      </div>
    </div>
  );
};

export default SelectPagination;
