import { FC } from 'react';
import fit from '../../../images/icon/24x24/screen navigation/fit.svg';
import fullScreen from '../../../images/icon/24x24/screen navigation/full screen.svg';
import minus from '../../../images/icon/24x24/screen navigation/minus.svg';
import plus from '../../../images/icon/24x24/screen navigation/plus.svg';
import page from '../../../images/icon/24x24/screen navigation/page.svg';

import styles from './navigation-panel.module.scss';
import NavigationButton from '../../../ui/buttons/builder-navigation-button/builder-navigation-button';

const NavigationPanel: FC = () => {
  return (
    <ul className={styles.panel}>
      <li>
        <span>100</span>
        <span>%</span>
      </li>
      <li>
        <NavigationButton icon={plus} alt="Увеличить" />
      </li>
      <li>
        <NavigationButton icon={minus} alt="Уменьшить" />
      </li>
      <li>
        <NavigationButton icon={fit} alt="Центрировать" />
      </li>
      <li>
        <NavigationButton icon={fullScreen} alt="На весь экран" />
      </li>
      <li>
        <NavigationButton icon={page} alt="Обзор страницы" />
      </li>
    </ul>
  );
};

export default NavigationPanel;
