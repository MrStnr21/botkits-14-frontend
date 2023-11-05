import { FC, useState } from 'react';
import { useReactFlow, useStore, MiniMap } from 'reactflow';
import Divider from '@mui/material/Divider';
import fit from '../../../images/icon/24x24/screen navigation/fit.svg';
import fullScreen from '../../../images/icon/24x24/screen navigation/full screen.svg';
import minus from '../../../images/icon/24x24/screen navigation/minus.svg';
import plus from '../../../images/icon/24x24/screen navigation/plus.svg';
import page from '../../../images/icon/24x24/screen navigation/page.svg';

import styles from './navigation-panel.module.scss';
import NavigationButton from '../../../ui/buttons/builder-navigation-button/builder-navigation-button';
import Typography from '../../../ui/typography/typography';

const NavigationPanel: FC = () => {
  const minScale = 0.1;
  const maxScale = 3;
  const [map, toggleMap] = useState(false);

  const flow = useReactFlow();
  const zoomLevel = useStore((store) => store.transform[2]);

  const onPlus = () => {
    flow.zoomTo(zoomLevel + 0.2);
    // setTimeout(() => setScale(flow.getZoom()), 1);
  };
  const onMinus = () => {
    flow.zoomTo(zoomLevel - 0.2);
    // setTimeout(() => setScale(flow.getZoom()), 1);
  };
  const onFit = () => {
    flow.zoomTo(1);
    // fitView() placeholder
  };
  const onFullscreen = () => {};

  const onPage = () => {
    toggleMap(!map);
  };

  return (
    <div className={styles.panel}>
      {map && (
        <MiniMap
          nodeColor="#22FFAA"
          pannable
          zoomable
          maskColor="none"
          maskStrokeColor="#A6B3C9"
          style={{
            left: '12.5px',
            bottom: '40px',
          }}
        />
      )}
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
  );
};

export default NavigationPanel;
