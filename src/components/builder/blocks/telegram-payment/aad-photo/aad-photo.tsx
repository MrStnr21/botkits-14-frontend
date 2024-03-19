import { FC, useRef } from 'react';

import ConstructorAddButton from '../../../buttons/constructor-add-button/constructor-add-button';

import { BUTTON_NAME } from '../../../../../utils/constants';

type TAadPhotodProps = {
  image?: boolean;
  addFile?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AadPhoto: FC<TAadPhotodProps> = ({ image, addFile }) => {
  const ref = useRef<null | HTMLInputElement>(null);

  const onClickAddPhoto = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  return (
    <div>
      <input
        ref={ref}
        type="file"
        id={BUTTON_NAME.IMAGE}
        name={BUTTON_NAME.IMAGE}
        accept=".jpg, .png, .gif"
        onChange={addFile}
        hidden
        disabled={image}
      />
      <label htmlFor={BUTTON_NAME.IMAGE}>
        <ConstructorAddButton
          maxWidth="100%"
          icon="photo"
          onClick={onClickAddPhoto}
        >
          Добавить фото
        </ConstructorAddButton>
      </label>
    </div>
  );
};

export default AadPhoto;
