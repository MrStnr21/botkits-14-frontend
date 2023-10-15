import { useEffect } from 'react';
import { Options, OverlayScrollbars } from 'overlayscrollbars';

const config: Options = {
  paddingAbsolute: false,
  showNativeOverlaidScrollbars: false,
  update: {
    elementEvents: [['img', 'load']],
    debounce: [0, 33],
    attributes: null,
    ignoreMutation: null,
  },
  overflow: {
    x: 'scroll',
    y: 'scroll',
  },
  scrollbars: {
    theme: 'os-theme-dark',
    visibility: 'visible',
    autoHide: 'never',
    autoHideDelay: 1300,
    autoHideSuspend: false,
    dragScroll: true,
    clickScroll: false,
    pointers: ['mouse', 'touch', 'pen'],
  },
};

const useScrollbar = (
  root: React.RefObject<HTMLDivElement>,
  hasScroll: boolean
) => {
  useEffect(() => {
    if (root.current && hasScroll) {
      OverlayScrollbars(root.current, config);
    }

    return () => {};
  }, [root, hasScroll]);
};

export default useScrollbar;
