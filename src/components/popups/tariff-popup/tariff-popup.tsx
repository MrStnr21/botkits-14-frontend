import { FC } from 'react';
import styles from './tariff-popup.module.scss';
import Input from '../../../ui/inputs/input/input';
import ModalPopup from '../modal-popup/modal-popup';
import Typography from '../../../ui/typography/typography';
import Button from '../../../ui/buttons/button/button';

type TTariffPopupProps = {
  closePopup: () => void;
};

const TariffPopup: FC<TTariffPopupProps> = ({ closePopup }) => {
  return (
    <ModalPopup onClick={closePopup}>
      <form className={styles.form}>
        <Typography tag="h3" fontFamily="primary">
          Добавить тариф
        </Typography>
        <div className={styles.content}>
          <div className={styles.input}>
            <span className={styles.label}>Название тарифа</span>
            <Input
              textColor="black"
              placeholder="Введите название тарифа"
              styled="secondary"
              onChange={() => {}}
              minLength={0}
            />
          </div>
          <div className={styles.input}>
            <span className={styles.label}>Цена</span>
            <Input
              textColor="black"
              type="number"
              placeholder="Введите цену"
              styled="secondary"
              onChange={() => {}}
              minLength={0}
            />
          </div>
          <div className={styles.input}>
            <span className={styles.label}>Кол-во ботов</span>
            <Input
              textColor="black"
              type="number"
              placeholder="Введите кол-во ботов"
              styled="secondary"
              onChange={() => {}}
              minLength={0}
            />
          </div>
          <div className={styles.input}>
            <span className={styles.label}>Кол-во подписчиков</span>
            <Input
              textColor="black"
              type="number"
              placeholder="Введите кол-во подписчиков"
              styled="secondary"
              onChange={() => {}}
              minLength={0}
            />
          </div>
          <div className={styles.input}>
            <span className={styles.label}>Длительность</span>
            <Input
              textColor="black"
              type="number"
              placeholder="Введите длительность"
              styled="secondary"
              onChange={() => {}}
              minLength={0}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} type="button">
            СТЕРЕТЬ ВСЕ
          </button>
          <Button variant="default">Добавить</Button>
        </div>
      </form>
    </ModalPopup>
  );
};

export default TariffPopup;
