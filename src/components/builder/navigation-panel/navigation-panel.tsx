import { FC, useState } from 'react';
// import { useReactFlow } from 'reactflow';
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
  // const { zoomIn, zoomOut, fitView } = useReactFlow();
  const step = 10;
  const minScale = 10;
  const maxScale = 300;

  const [scale, setScale] = useState(100);

  const onPlus = () => {
    setScale((percent) => Math.max(percent + step, minScale));
    // zoomIn() placeholder
  };
  const onMinus = () => {
    setScale((percent) => Math.min(percent - step, maxScale));
    // zoomOut() placeholder
  };
  const onFit = () => {
    setScale(100);
    // fitView() placeholder
  };
  const onFullscreen = () => {};

  const onPage = () => {};

  return (
    <div className={styles.panel}>
      <Typography tag="span" className={styles.percent}>
        {scale}
      </Typography>
      <NavigationButton
        icon={plus}
        alt="Увеличить"
        onClick={onPlus}
        disabled={scale === maxScale}
      />
      <NavigationButton
        icon={minus}
        alt="Уменьшить"
        onClick={onMinus}
        disabled={scale === minScale}
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
