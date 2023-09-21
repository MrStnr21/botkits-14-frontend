import { FC } from 'react';
import ReactDom from 'react-dom';

import stylesModalPopup from './modal-popup.module.scss';

import ModalOverlayPopup from '../modal-overlay-popup/modal-overlay-popup';

import { ReactComponent as Close } from '../../../images/icon/24x24/common/close.svg';

const modalContainer = document.querySelector('#modals') as HTMLElement;

interface IModalPopup {
  onClick: () => void;
  children: JSX.Element;
}

const ModalPopup: FC<IModalPopup> = ({ onClick, children }): JSX.Element => {
  return ReactDom.createPortal(
    <div className={stylesModalPopup.modal}>
      <ModalOverlayPopup onClick={onClick} />
      <div className={stylesModalPopup.content}>
        {children}
        <button
          className={stylesModalPopup.close}
          onClick={onClick}
          type="button"
        >
          <Close />
        </button>
      </div>
    </div>,
    modalContainer
  );
};

export default ModalPopup;
