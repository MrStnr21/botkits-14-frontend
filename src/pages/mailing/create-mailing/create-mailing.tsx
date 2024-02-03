/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState, useEffect } from 'react';
import { useMatch, useNavigate } from 'react-router';
import { useMediaQuery } from '@mui/material';
import { Descendant } from 'slate';
import styles from './create-mailing.module.scss';
import AsideMailing from '../../../components/mailing/aside/aside';
import ChevronIcon from '../../../components/icons/Chevron/ChevronIcon';
import BotFace from '../../../components/icons/Bot/BotIcon';
import MailingForm from '../../../components/mailing/form/mailing-form';
import MailingConditions from '../../../components/mailing/mailing-conditions/mailing-conditions';
import ModalPopup from '../../../components/popups/modal-popup/modal-popup';
import { baseSlateData } from '../../../utils/constants';
import { TFormData } from '../../../services/types/mailing';
import { createMailingAction } from '../../../services/actions/mailing/createMailing';
import { useAppDispatch } from '../../../services/hooks/hooks';
import { botId, platformsId } from '../ids-temp';

const CreateMailing: FC = () => {
  const navigate = useNavigate();
  const matchConditions = useMatch('/mailing/create/conditions');
  const [mobile, setMobile] = useState(false);
  const [isAsideVisible, setAsideVisible] = useState(false);
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<TFormData>({
    name: '',
    message: baseSlateData,
    bot: botId,
    platforms: platformsId,
    isActive: true,
    isActiveBotBuilder: false,
    schedule: {
      isNow: true,
      isRepeat: false,
    },
  });

  const isMobile = useMediaQuery('(max-width: 860px)');

  if (isMobile && isAsideVisible && !mobile) {
    setMobile(true);
    setAsideVisible(false);
  }

  if (!isMobile && mobile) {
    setMobile(false);
  }

  const handleClickButton = () => {
    if (formData.name && formData.message) {
      navigate('/mailing/create/conditions');
    }
  };

  const handleSendForm = () => {
    if (formData.name && formData.message) {
      console.log(formData);
      dispatch(createMailingAction(formData, () => navigate(`/mailing`)));
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
            formData={formData}
            setFormData={setFormData}
            handleBack={handleBack}
            handleClickButton={handleSendForm}
          />
        ) : (
          <MailingForm
            formData={formData}
            setFormData={setFormData}
            handleBack={handleBack}
            handleClickButton={handleClickButton}
          />
        )}
        {isAsideVisible &&
          (isMobile ? (
            <ModalPopup onClick={() => setAsideVisible(false)}>
              <AsideMailing title={formData.name} text={formData.message} />
            </ModalPopup>
          ) : (
            <AsideMailing title={formData.name} text={formData.message} />
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
