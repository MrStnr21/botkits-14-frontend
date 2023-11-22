/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './create-mailing.module.scss';
import Typography from '../../../ui/typography/typography';
import AsideMailing from '../../../components/mailing/aside/aside';
import ChevronIcon from '../../../components/icons/Chevron/ChevronIcon';
import BotFace from '../../../components/icons/Bot/BotIcon';
import MailingForm from '../../../components/mailing/mailing-form/mailing-form';
import MailingConditions from '../../../components/mailing/mailing-conditions/mailing-condition';

const CreateMailing: FC = () => {
  const navigate = useNavigate();
  const [currentComponent, setCurrentComponent] = useState('MailingForm');

  const [nameValue, setNameValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [isAsideVisible, setAsideVisible] = useState(true);

  const handleClickButton = () => {
    setCurrentComponent('Conditions');
  };

  const handleChevronClick = () => {
    setAsideVisible(!isAsideVisible);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.create}>
      <div>
        <button
          type="button"
          className={styles.create__sideButton}
          onClick={handleChevronClick}
        >
          <ChevronIcon position={isAsideVisible ? 'right' : 'left'} />
        </button>
        {!isAsideVisible && (
          <div className={styles.create__blue}>
            <BotFace width={64} height={64} />
          </div>
        )}
      </div>
      <MailingForm
        nameValue={nameValue}
        textValue={textValue}
        setNameValue={setNameValue}
        setTextValue={setTextValue}
        handleBack={handleBack}
        handleClickButton={handleClickButton}
      />
      {/* <div className={styles.create__wrapper}>
        {currentComponent === 'MailingForm' && (
        )}
        {currentComponent === 'Conditions' && (
          <MailingConditions title={nameValue} />
        )}
        <div className={styles.create__buttons}>
          <button
            type="button"
            className={styles.create__commonButton}
            onClick={handleBack}
          >
            <Typography tag="p" className={styles.create__buttonText}>
              Выйти
            </Typography>
          </button>
          <button
            type="button"
            className={
              nameValue && textValue
                ? styles.create__greenActiveButton
                : styles.create__greenButton
            }
            onClick={handleClickButton}
          >
            <Typography
              tag="p"
              className={
                nameValue && textValue
                  ? styles.create__blackText
                  : styles.create__buttonText
              }
            >
              Далее
            </Typography>
          </button>
        </div>
      </div> */}
      {isAsideVisible && <AsideMailing title={nameValue} text={textValue} />}
    </div>
  );
};

export default CreateMailing;
