import { FC, useEffect, useRef, useState } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import styles from './templates.module.scss';

import { useAppDispatch, useAppSelector } from '../../../services/hooks/hooks';
import { getTemplatesBotsAction } from '../../../services/actions/bots/templatesBots';
import { getTemplatesBotsSel } from '../../../utils/selectorData';
import Typography from '../../../ui/typography/typography';
import Template from '../template/template';

const Templates: FC = () => {
  const { botTemplates } = useAppSelector(getTemplatesBotsSel);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTemplatesBotsAction());
  }, [dispatch]);

  const [isExpanded, setIsExpanded] = useState(false);

  const ref =
    useRef<HTMLDivElement>() as unknown as React.MutableRefObject<HTMLUListElement>;
  const { events } = useDraggable(ref);

  return (
    <div className={styles.container}>
      <div className={styles.header_wrapper}>
        <Typography tag="h2" fontFamily="secondary">
          Шаблоны
        </Typography>
        <div className={styles.accordion_wrapper}>
          <button
            className={styles.accordion_button}
            type="button"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
            aria-label="xs"
          >
            Все шаблоны
          </button>

          <button
            className={`${styles.accordion_ico_plus} ${
              isExpanded ? styles.accordion_ico_minus : ''
            }`}
            type="button"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
            aria-label="xs"
          />
        </div>
      </div>
      <ul
        className={`
          ${styles.list} ${
            isExpanded ? styles.expanded : styles.not_expanded
          } `}
        {...events}
        ref={ref}
      >
        {botTemplates !== null &&
          botTemplates.map((templateBot) => (
            <Template
              // eslint-disable-next-line no-underscore-dangle
              key={templateBot._id}
              template={templateBot}
            />
          ))}
      </ul>
    </div>
  );
};

export default Templates;
