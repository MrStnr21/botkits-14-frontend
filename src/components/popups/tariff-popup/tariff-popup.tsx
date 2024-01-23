import { FC } from 'react';
import styles from './tariff-popup.module.scss';
import Input from '../../../ui/inputs/input/input';
import ModalPopup from '../modal-popup/modal-popup';
import Typography from '../../../ui/typography/typography';
import Button from '../../../ui/buttons/button/button';
import useForm from '../../../services/hooks/use-form';
import { postTariff } from '../../../api/tariffs';

const initialState = {
  name: { value: '' },
  cost: { value: '' },
  botsAmount: { value: '' },
  usersAmount: { value: '' },
  duration: { value: '' },
};

type TTariffPopupProps = {
  closePopup: () => void;
};

const TariffPopup: FC<TTariffPopupProps> = ({ closePopup }) => {
  const { values, handleChange, setValues } = useForm(initialState);

  const postData = () => {
    const data = {
      name: values.name.value || '',
      price: Number(values.cost.value) || 1,
      botsCount: Number(values.botsAmount.value) || 1,
      subscribersCount: Number(values.usersAmount.value) || 1,
      duration: values.duration.value || '1D',
      status: false,
      isStarted: false,
    };

    postTariff(data).then(() => {
      closePopup();
    });
  };

  const cleanForm = () => {
    setValues(initialState);
  };

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
              name="name"
              textColor="black"
              placeholder="Введите название тарифа"
              styled="secondary"
              onChange={handleChange}
              minLength={0}
              value={values.name?.value}
            />
          </div>
          <div className={styles.input}>
            <span className={styles.label}>Цена</span>
            <Input
              name="cost"
              textColor="black"
              type="number"
              placeholder="Введите цену"
              styled="secondary"
              onChange={handleChange}
              minLength={0}
              value={values.cost?.value}
            />
          </div>
          <div className={styles.input}>
            <span className={styles.label}>Кол-во ботов</span>
            <Input
              name="botsAmount"
              textColor="black"
              type="number"
              placeholder="Введите кол-во ботов"
              styled="secondary"
              onChange={handleChange}
              minLength={0}
              value={values.botsAmount?.value}
            />
          </div>
          <div className={styles.input}>
            <span className={styles.label}>Кол-во подписчиков</span>
            <Input
              name="usersAmount"
              textColor="black"
              type="number"
              placeholder="Введите кол-во подписчиков"
              styled="secondary"
              onChange={handleChange}
              minLength={0}
              value={values.usersAmount?.value}
            />
          </div>
          <div className={styles.input}>
            <span className={styles.label}>Длительность</span>
            <Input
              name="duration"
              textColor="black"
              placeholder="Введите длительность"
              styled="secondary"
              onChange={handleChange}
              minLength={0}
              value={values.duration?.value}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={cleanForm} className={styles.button} type="button">
            СТЕРЕТЬ ВСЕ
          </button>
          <Button variant="default" onClick={postData}>
            Добавить
          </Button>
        </div>
      </form>
    </ModalPopup>
  );
};

export default TariffPopup;
