import { FC, useRef } from 'react';
import ConstructorAddButton from '../../../../../ui/buttons/constructor-add-button/constructor-add-button';
import { BUTTON_NAME } from '../../../../../utils/constants';

type TButtonProps = {
  type: BUTTON_NAME;
  icon: string;
  accept: string;
};

const Button: FC<TButtonProps> = ({ type, icon, accept }): JSX.Element => {
  const ref = useRef<null | HTMLInputElement>(null);

  const onClick = () => {
    if (ref.current) {
      ref.current.click();
    }
  };
  return (
    <div>
      <input
        ref={ref}
        type="file"
        id={type}
        name={type}
        accept={accept}
        hidden
      />
      <label htmlFor={type}>
        <ConstructorAddButton onClick={onClick} icon={icon}>
          Добавить фото
        </ConstructorAddButton>
      </label>
    </div>
  );
};

export default Button;
