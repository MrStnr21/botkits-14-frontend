import { FC } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './add-promo-popup.module.scss';
import Input from '../../../ui/inputs/input/input';
import ModalPopup from '../modal-popup/modal-popup';
import Typography from '../../../ui/typography/typography';
import Button from '../../../ui/buttons/button/button';
import useForm, { TInputValue } from '../../../services/hooks/use-form';
import { postPromocode } from '../../../api/promocodes';

type TPromoFormState = {
  name: TInputValue<string>;
  amount: TInputValue;
  maxUsage: TInputValue;
  date: TInputValue<string>;
};

const initialState: TPromoFormState = {
  name: { value: '' },
  amount: { value: '' },
  maxUsage: { value: '' },
  date: { value: '' },
};

type TPromoPopupProps = {
  closePopup: () => void;
};

const AddPromoPopup: FC<TPromoPopupProps> = ({ closePopup }) => {
  const { values, handleChange, setValues, isFormValid } =
    useForm<TPromoFormState>(initialState);

  const postData = () => {
    const data = {
      code: values.name.value || uuid(),
      amount: Number(values.amount.value) || 1,
      activationCount: 0,
      maxActivationCount: Number(values.maxUsage.value) || 0,
      actionPeriod: values.date.value,
      status: false,
    };

    postPromocode(data).then(() => {
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
            <span className={styles.label}>Промокод</span>
            <Input
              name="name"
              textColor="black"
              placeholder="Введите промокод"
              styled="secondary"
              onChange={handleChange}
              minLength={0}
              value={values.name?.value}
            />
          </div>
          <div className={styles.input}>
            <span className={styles.label}>Ценность</span>
            <Input
              name="amount"
              textColor="black"
              type="number"
              placeholder="Введите ценность"
              styled="secondary"
              onChange={handleChange}
              minLength={0}
              value={values.amount.value}
            />
          </div>
          <div className={styles.input}>
            <span className={styles.label}>Максимальное кол-во активаций</span>
            <Input
              name="maxUsage"
              textColor="black"
              type="number"
              placeholder="Максимальное кол-во активаций"
              styled="secondary"
              onChange={handleChange}
              minLength={0}
              value={values.maxUsage.value}
            />
          </div>
          <div className={styles.input}>
            <span className={styles.label}>Активировать до</span>
            <input
              name="date"
              value={values.date.value}
              className={styles.date}
              onChange={handleChange}
              type="datetime-local"
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={cleanForm} className={styles.button} type="button">
            СТЕРЕТЬ ВСЕ
          </button>
          <Button variant="default" onClick={postData} disabled={!isFormValid}>
            Добавить
          </Button>
        </div>
      </form>
    </ModalPopup>
  );
};

export default AddPromoPopup;
