import { FC, useRef } from 'react';
import ConstructorIconBotton from '../../../../../../ui/buttons/constructor-icon-botton/constructor-icon-botton';
import { BUTTON_NAME } from '../../../../../../utils/constants';

type TButtonProps = {
  type: BUTTON_NAME;
  isActive?: boolean;
  icon: string;
  accept: string;
};

const Button: FC<TButtonProps> = ({
  type,
  icon,
  accept,
  isActive,
}): JSX.Element => {
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
