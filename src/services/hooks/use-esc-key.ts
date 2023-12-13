import React from 'react';

/**
 * Устаревший хук, скорее всего будет заменен
 */
function useEscapeKey(func: () => void) {
  const closeOnEsc = (e: { key: string }) => {
    if (e.key === 'Escape') {
      func();
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', (e) => closeOnEsc(e));

    return () => {
      window.removeEventListener('keydown', (e) => closeOnEsc(e));
    };
  }, [closeOnEsc]);
}

export default useEscapeKey;
