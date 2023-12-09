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
  chevron?: boolean;
}

const MailingPopup: FC<IProps> = ({
  caption,
  elements,
  handleClick,
  chevron,
}) => {
  const [isOpened, setOpened] = useState(false);
  const [selectedElements, setSelectedElements] = useState<string[] | null>(
    null
  );

  const onButtonClick = (el: string) => {
    if (handleClick) {
      handleClick(el);
    }

    const isSelected = selectedElements?.includes(el);

    if (isSelected) {
      setSelectedElements(
        (prev) => prev?.filter((selectedEl) => selectedEl !== el) || null
      );
    } else {
      setSelectedElements((prev) => (prev ? [...prev, el] : [el]));
    }
  };

  const renderCaption = () => {
    switch (true) {
      case selectedElements && selectedElements.length > 1:
        return `Выбрано несколько`;
      case selectedElements && selectedElements.length === 1:
        return selectedElements![0];
      default:
        return caption;
    }
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
            !selectedElements ? styles.modal__caption : styles.modal__selected
          }
        >
          {renderCaption()}
        </Typography>
        {chevron && (
          <ChevronIcon
            position={`${isOpened ? 'up' : 'down'}`}
            color="#BFC9D9"
          />
        )}
      </div>
      {isOpened && elements.length > 0 && (
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
              {selectedElements?.includes(el) && <CheckIcon />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MailingPopup;
