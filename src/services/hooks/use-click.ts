import React from 'react';

/**
 * Устаревший хук, скорее всего будет заменен
 */
function useClick(func: () => void, id: string | null) {
  const closeOnClick = (e: MouseEvent) => {
    if (e) {
      func();
    }
  };

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Element;
      const parent = target.parentNode as Element;
      const clickedId = parent?.id || target.id;

      if (id && clickedId !== id) {
        closeOnClick(e);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [closeOnClick, id]);
}

export default useClick;
