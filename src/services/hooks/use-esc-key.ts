import React from 'react';

function useEscapeKey(func: () => void) {
  const closeOnEsc = (e: { key: any }) => {
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
