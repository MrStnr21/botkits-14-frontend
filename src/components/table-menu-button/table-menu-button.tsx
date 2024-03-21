import { FC, useRef, useState } from 'react';
import MoreIcon from '../../ui/icons/More/MoreIcon';
import Menu from '../../ui/menus/menu/menu';
import style from './table-menu-button.module.scss';
import ModalPopup from '../popups/modal-popup/modal-popup';
import useModal from '../../services/hooks/use-modal';
import ConfirmDeletePopup from '../popups/confirm-delete-popup/confirm-delete-popup';

interface IProps {
  onRemove?: () => void;
  options?: { label: string; value: string }[];
}

const TableMenuButton: FC<IProps> = ({ onRemove, options = [] }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);
  const { isModalOpen, closeModal, openModal } = useModal();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpen(!isOpen);
  };

  const onItemClick = () => {
    setOpen(false);
    openModal();
  };

  return (
    <td className={style.cell}>
      <button className={style.button} type="button" onClick={handleClick}>
        <MoreIcon />
      </button>
      {isOpen && (
        <Menu
          ref={menuRef}
          options={options}
          onItemClick={onItemClick}
          layoutClassName={style.dropdown}
        />
      )}
      {isModalOpen && (
        <ModalPopup onClick={closeModal}>
          <ConfirmDeletePopup
            onCancelClick={closeModal}
            onSubmitClick={onRemove}
          />
        </ModalPopup>
      )}
    </td>
  );
};

export default TableMenuButton;
