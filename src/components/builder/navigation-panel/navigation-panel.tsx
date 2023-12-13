import { FC, useState } from 'react';
import { useReactFlow, useStore } from 'reactflow';
import Divider from '@mui/material/Divider';
import MiniMap from './mini-map';
import fit from '../../../images/icon/24x24/screen navigation/fit.svg';
import fullScreen from '../../../images/icon/24x24/screen navigation/full screen.svg';
import minus from '../../../images/icon/24x24/screen navigation/minus.svg';
import plus from '../../../images/icon/24x24/screen navigation/plus.svg';
import page from '../../../images/icon/24x24/screen navigation/page.svg';

import styles from './navigation-panel.module.scss';
import NavigationButton from '../../../ui/buttons/builder-navigation-button/builder-navigation-button';
import Typography from '../../../ui/typography/typography';

/**
 * навигационная панель в builder
 */
const NavigationPanel: FC = () => {
  // базовое масштабирование flow === 1. minScale - минимальное, maxScale - максимальное
  const minScale = 0.1;
  const maxScale = 3;
  const [map, toggleMap] = useState(false);

  const flow = useReactFlow();
  const zoomLevel = useStore((store) => store.transform[2]);

  // увеличение масштабирования
  const onPlus = () => {
    flow.zoomTo(zoomLevel + 0.2);
  };

  // уменьшение масштабирования
  const onMinus = () => {
    flow.zoomTo(zoomLevel - 0.2);
  };

  // возвращение к исходному состоянию
  const onFit = () => {
    flow.zoomTo(1);
  };
  const onFullscreen = () => {};

  // переключение состояния карты
  const onPage = () => {
    toggleMap(!map);
  };

  return (
    <div className={styles.panel}>
      {map && <MiniMap className={styles.map} maskColor="none" />}
      <div className={styles.controls}>
        <Typography tag="span" className={styles.percent}>
          {Math.round(zoomLevel * 100)}
        </Typography>
        <NavigationButton
          icon={plus}
          alt="Увеличить"
          onClick={onPlus}
          disabled={zoomLevel === maxScale}
        />
        <NavigationButton
          icon={minus}
          alt="Уменьшить"
          onClick={onMinus}
          disabled={zoomLevel === minScale}
        />
        <Divider orientation="vertical" flexItem />
        <NavigationButton icon={fit} alt="Центрировать" onClick={onFit} />
        <NavigationButton
          icon={fullScreen}
          alt="На весь экран"
          onClick={onFullscreen}
        />
        <NavigationButton icon={page} alt="Обзор страницы" onClick={onPage} />
      </div>
    </div>
  );
};

export default NavigationPanel;
