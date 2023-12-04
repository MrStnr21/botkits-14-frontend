import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './custom-pagination.module.scss';
import Typography from '../../../ui/typography/typography';

interface CustomPaginationProps {
  page: number;
  count: number;
  rowsPerPage: number;
  onChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}
const CustomPagination: React.FC<CustomPaginationProps> = ({
  page,
  count,
  rowsPerPage,
  onChange,
}) => {
  const pageCount = Math.ceil(count / rowsPerPage);

  const handleButtonClick = (newPage: number) => {
    if (newPage >= 0 && newPage < pageCount && newPage !== page) {
      onChange(null as any, newPage);
    }
  };

  return (
    <div className={styles.pagination}>
      {Array.from({ length: pageCount }).map((_, index) => (
        <button
          className={styles.pagination__button}
          type="button"
          key={uuidv4()}
          onClick={() => handleButtonClick(index)}
        >
          <Typography tag="p" className={styles.pagination__number}>
            {index + 1}
          </Typography>
        </button>
      ))}
    </div>
  );
};

export default CustomPagination;
