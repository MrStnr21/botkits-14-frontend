import { FC } from 'react';
import Input from '../../ui/inputs/input/input';
import Button from '../../ui/buttons/button/button';
import ButtonIconCopy from '../../ui/buttons/button-icon-copy/button-icon-copy';

import stylesPartnership from './partnership.module.scss';

const Partnership: FC = (): JSX.Element => {
  return (
    <div className={stylesPartnership.wrapper}>
      <div className={stylesPartnership.flex_wrapper}>
        <div>
          <h2 className={stylesPartnership.title}>Партнерская программа</h2>
          <div className={stylesPartnership.flex_container}>
            <div className={stylesPartnership.input_wrapper}>
              <Input
                onChange={() => {}}
                value="botkits.ru/?ref=12345"
                styled="main"
                textColor="blue"
              />
            </div>
            <ButtonIconCopy />
          </div>
        </div>
        <div className={stylesPartnership.button_wrapper}>
          <Button
            variant="default"
            size="small"
            color="green"
            buttonHtmlType="submit"
          >
            Запросить выплату
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
