import { FC } from 'react';
import Crumb from './crumb/crumb';
import styles from './breadcrumbs.module.scss';

type TBreadcrumbsProps = {
  crumbs: {
    to: string;
    label: string;
  }[];
};

const Breadcrumbs: FC<TBreadcrumbsProps> = ({ crumbs }) => {
  return (
    <div className={styles.container}>
      {crumbs.map((crumb, index) => (
        <Crumb {...crumb} index={index + 1} key={crumb.to} />
      ))}
    </div>
  );
};

export default Breadcrumbs;
