import React, { FC, useState } from 'react';
import stylesPromoCodePopup from './activate-promo-code-popup.module.scss';
import Button from '../../../ui/buttons/button/button';
import Input from '../../../ui/inputs/input/input';
import Typography from '../../../ui/typography/typography';

interface IActivatePromoCodePopup {
  onClick?: () => void;
}
const ActivatePromoCodePopup: FC<IActivatePromoCodePopup> = ({
  onClick,
}): JSX.Element | null => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={stylesPromoCodePopup.wrapper}>
      <Typography tag="h3">Активация промокода</Typography>
      <Input
        placeholder="Введите промокод"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        onClick={onClick}
        size="large"
        variant="default"
        color="blue"
        buttonHtmlType="submit"
      >
        Активировать
      </Button>
    </div>
  );
};

export default ActivatePromoCodePopup;