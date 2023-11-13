import React from 'react';

function useClick(func: () => void, id: string) {
  const closeOnClick = (e: MouseEvent) => {
    if (e) {
      func();
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', (e) => {
      const target = e.target as Element;
      const parent = target.parentNode as Element;
      if (parent!.id !== id) {
        closeOnClick(e);
      }
    });

    return () => {
      window.removeEventListener('click', (e) => closeOnClick(e));
    };
  }, [closeOnClick]);
}

export default useClick;
