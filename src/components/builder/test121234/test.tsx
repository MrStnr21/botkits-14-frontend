import React, { FC } from 'react';

import { ReactSVG } from 'react-svg';
import ConstructorAddButton, {
  Icons,
} from '../../../ui/buttons/constructor-add-button/constructor-add-button';
import Img from '../../icons/Emoji/EmojiIcon';
import pic from '../../../images/icon/24x24/constructor/ask-phone.svg';

const Test: FC = () => {
  const getPicture = () => pic;
  return (
    <p style={{ width: 150 }}>
      <ConstructorAddButton icon={Icons.table}>
        <p style={{ width: 100 }}>любая иконка</p>
      </ConstructorAddButton>
      <p>пример</p>
      <ConstructorAddButton picture=<Img /> icon="vertical inline">
        <p style={{ width: 100 }}>другая иконка</p>
      </ConstructorAddButton>
      <p>пример</p>
      <ConstructorAddButton
        picture={<ReactSVG src={getPicture()} />}
        icon="vertical inline"
      >
        <p style={{ width: 100 }}>другая иконка</p>
      </ConstructorAddButton>
    </p>
  );
};

export default Test;

// {<ReactSVG src={getPicture()} />}
