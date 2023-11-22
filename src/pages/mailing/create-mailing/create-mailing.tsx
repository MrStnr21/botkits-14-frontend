/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { useMatch, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Input from '../../../ui/inputs/input/input';
import styles from './create-mailing.module.scss';
import TextField from '../../../ui/text-field/text-field';
import Typography from '../../../ui/typography/typography';
import ButtonAddContent from '../../../ui/buttons/button-add-content/button-add-content';
import CheckIcon from '../../../components/icons/Check/CheckIcon';
import AsideMailing from '../../../components/mailing/aside/aside';
import ChevronIcon from '../../../components/icons/Chevron/ChevronIcon';
import BotFace from '../../../components/icons/Bot/BotIcon';
import MailingPopup from '../../../components/popups/mailing-popup/mailing-popup';
import MailingForm from '../../../components/mailing/mailing-form/mailing-form';
import MailingConditions from '../../../components/mailing/mailing-conditions/mailing-condition';

const CreateMailing: FC = () => {
  const navigate = useNavigate();
  const [currentComponent, setCurrentComponent] = useState('MailingForm');

  const [nameValue, setNameValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [isAsideVisible, setAsideVisible] = useState(true);
  const isLinkDisabled = !nameValue && !textValue;

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
      <div className={styles.create__wrapper}>
        {currentComponent === 'MailingForm' && (
          <MailingForm
            nameValue={nameValue}
            textValue={textValue}
            setNameValue={setNameValue}
            setTextValue={setTextValue}
          />
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
      </div>
      {isAsideVisible && <AsideMailing title={nameValue} text={textValue} />}
    </div>
  );
};

export default CreateMailing;
