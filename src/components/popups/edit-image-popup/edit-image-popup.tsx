import { FC, useState, FormEvent, ChangeEvent, SetStateAction } from 'react';
import Typography from '../../../ui/typography/typography';
import stylesPopup from './edit-image-popup.module.scss';
import InputTemplate from '../../../ui/inputs/input-template/input-template';

interface IEditImagePopup {
  closeModal: () => void;
  editImage: (e: SetStateAction<string>) => void;
}

const EditImagePopup: FC<IEditImagePopup> = ({ closeModal, editImage }) => {
  const [imageEdit, setImageEdit] = useState<string>();

  const clearInputs = () => {
    setImageEdit('');
    closeModal();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editImage(imageEdit!);
    setImageEdit('');
    closeModal();
  };

  return (
    <div className={stylesPopup.popup}>
      <form onSubmit={handleSubmit}>
        <div className={stylesPopup.popup__content}>
          <Typography tag="h3" className={stylesPopup.popup__heading}>
            Добавить аватар
          </Typography>
          <InputTemplate
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setImageEdit(e.target.value)
            }
            size="small"
            placeholder="Ссылка аватара"
            value={imageEdit}
          />
          <div className={stylesPopup.popup__buttons}>
            <button
              type="button"
              className={stylesPopup.popup__rejectBtn}
              onClick={clearInputs}
            >
              <Typography tag="p" className={stylesPopup.popup__rejectText}>
                Отмена
              </Typography>
            </button>
            <button type="submit" className={stylesPopup.popup__confirmBtn}>
              <Typography tag="p" className={stylesPopup.popup__confirmText}>
                Сохранить
              </Typography>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditImagePopup;
