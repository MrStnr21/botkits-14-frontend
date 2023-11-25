import { FC, useRef } from 'react';
import ConstructorIconBotton from '../../../../../../ui/buttons/constructor-icon-botton/constructor-icon-botton';
import { BUTTON_NAME } from '../../../../../../utils/constants';

type TButtonProps = {
  type: BUTTON_NAME;
  isActive?: boolean;
  icon: string;
  accept: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Button: FC<TButtonProps> = ({
  type,
  icon,
  accept,
  isActive,
  onChange,
}): JSX.Element => {
  const ref = useRef<null | HTMLInputElement>(null);

  const onClick = () => {
    if (ref.current) {
      ref.current.click();
    }
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
    if (ref.current) {
      ref.current!.value = '';
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
        onChange={changeHandler}
        hidden
        disabled={isActive}
      />
      <label htmlFor={type}>
        <ConstructorIconBotton
          value={type}
          onClick={onClick}
          active={isActive}
          icon={icon}
        />
      </label>
    </div>
  );
};

export default Button;
