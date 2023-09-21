import { FC } from 'react';

import stylesModalOverlayPopup from './modal-overlay-popup.module.scss';

interface IModalOverlayPopup {
  onClick: () => void;
}

const ModalOverlayPopup: FC<IModalOverlayPopup> = ({
  onClick,
}): JSX.Element => {
  return (
    <div className={stylesModalOverlayPopup.modal_overlay} onClick={onClick} />
  );
};

export default ModalOverlayPopup;
