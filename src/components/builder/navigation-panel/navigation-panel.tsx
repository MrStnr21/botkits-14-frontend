import { FC, useState } from 'react';
import { useReactFlow, useStore } from 'reactflow';
import Divider from '@mui/material/Divider';
import MiniMap from './mini-map';

import styles from './navigation-panel.module.scss';
import Typography from '../../../ui/typography/typography';
import ButtonIcon from '../../../ui/buttons/button-icon/button-icon';

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
        <ButtonIcon
          icon="screenNavigationPlus"
          onClick={onPlus}
          disabled={zoomLevel === maxScale}
          aria-label="Увеличить"
          btnStyle={styles.button}
        />
        <ButtonIcon
          icon="screenNavigationMinus"
          onClick={onMinus}
          disabled={zoomLevel === minScale}
          aria-label="Уменьшить"
          btnStyle={styles.button}
        />
        <Divider orientation="vertical" flexItem className={styles.divider} />
        <ButtonIcon
          icon="screenNavigationFit"
          onClick={onFit}
          aria-label="Центрировать"
          btnStyle={styles.button}
        />
        <ButtonIcon
          icon="screenNavigationFullScreen"
          onClick={onFullscreen}
          aria-label="На весь экран"
          btnStyle={styles.button}
        />
        <ButtonIcon
          icon="screenNavigationPage"
          onClick={onPage}
          aria-label="Обзор страницы"
          btnStyle={styles.button}
        />
      </div>
    </div>
  );
};

export default NavigationPanel;
