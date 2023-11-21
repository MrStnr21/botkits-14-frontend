/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import Typography from '../../../ui/typography/typography';
import ChevronIcon from '../../icons/Chevron/ChevronIcon';
import styles from './mailing-popup.module.scss';
import CheckIcon from '../../icons/Check/CheckIcon';
import useClick from '../../../services/hooks/use-click';

interface IProps {
  caption: string;
  elements: string[];
  handleClick?: (selectedElement: string) => void;
}

const MailingModal: FC<IProps> = ({ caption, elements, handleClick }) => {
  const [isOpened, setOpened] = useState(false);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  const onButtonClick = (el: string) => {
    if (handleClick) {
      handleClick(el);
    }

    const newSelectedElement = selectedElement === el ? null : el;
    setSelectedElement(newSelectedElement);
  };

  useClick(() => setOpened(false), 'div');

  return (
    <div className={styles.modal}>
      <div
        id="div"
        className={styles.modal__wrapper}
        onClick={() => {
          setOpened(!isOpened);
        }}
      >
        <Typography
          tag="p"
          className={
            !selectedElement ? styles.modal__caption : styles.modal__selected
          }
        >
          {selectedElement !== null ? selectedElement : caption}
        </Typography>
        <ChevronIcon position={`${isOpened ? 'up' : 'down'}`} color="#BFC9D9" />
      </div>
      {isOpened && (
        <div className={styles.content}>
          {elements.map((el) => (
            <div
              key={el}
              className={styles.content__element}
              onClick={() => onButtonClick(el)}
            >
              <button type="button" className={styles.content__button}>
                <Typography tag="span" className={styles.content__text}>
                  {el}
                </Typography>
              </button>
              {selectedElement === el && <CheckIcon />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MailingModal;
