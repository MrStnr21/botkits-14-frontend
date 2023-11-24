/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { useMatch, useNavigate } from 'react-router';
import { useMediaQuery } from '@mui/material';
import styles from './create-mailing.module.scss';
import AsideMailing from '../../../components/mailing/aside/aside';
import ChevronIcon from '../../../components/icons/Chevron/ChevronIcon';
import BotFace from '../../../components/icons/Bot/BotIcon';
import MailingForm from '../../../components/mailing/form/mailing-form';
import MailingConditions from '../../../components/mailing/mailing-conditions/mailing-conditions';
import ModalPopup from '../../../components/popups/modal-popup/modal-popup';

const CreateMailing: FC = () => {
  const navigate = useNavigate();
  const matchConditions = useMatch('/mailing/create/conditions');
  const [nameValue, setNameValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [isAsideVisible, setAsideVisible] = useState(true);
  const isMobile = useMediaQuery('(max-width: 860px)');

  const handleClickButton = () => {
    if (nameValue && textValue) {
      navigate('/mailing/create/conditions');
    }
  };

  const handleChevronClick = () => {
    setAsideVisible(!isAsideVisible);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={styles.create}>
        {!isMobile && (
          <button
            type="button"
            className={styles.create__sideButton}
            onClick={handleChevronClick}
          >
            <ChevronIcon position={isAsideVisible ? 'right' : 'left'} />
          </button>
        )}
        {/* {!isAsideVisible && (
        <div className={styles.create__blue}>
          <BotFace width={64} height={64} />
        </div>
      )} */}
        {matchConditions ? (
          <MailingConditions
            title={nameValue}
            handleBack={handleBack}
            // handleClickButton={handleClickButton}
          />
        ) : (
          <MailingForm
            nameValue={nameValue}
            textValue={textValue}
            setNameValue={setNameValue}
            setTextValue={setTextValue}
            handleBack={handleBack}
            handleClickButton={handleClickButton}
          />
        )}
        {isAsideVisible &&
          (isMobile ? (
            <ModalPopup onClick={() => setAsideVisible(false)}>
              <AsideMailing title={nameValue} text={textValue} />
            </ModalPopup>
          ) : (
            <AsideMailing title={nameValue} text={textValue} />
          ))}
      </div>
      {(!isAsideVisible || isMobile) && (
        <div
          onClick={isMobile ? handleChevronClick : () => {}}
          className={styles.create__blue}
        >
          <BotFace width={64} height={64} />
        </div>
      )}
    </>
  );
};

export default CreateMailing;
