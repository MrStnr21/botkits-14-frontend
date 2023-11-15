import { FC } from 'react';
import stylesSendButton from './button-edit.module.scss';
import EditIcon from '../../../components/icons/Edit/Edit';

interface IEditButton {
  onClick?: VoidFunction;
}

const EditButton: FC<IEditButton> = ({ onClick }): JSX.Element => {
  return (
    <button type="button" className={stylesSendButton.button} onClick={onClick}>
      <EditIcon />
    </button>
  );
};

export default EditButton;
