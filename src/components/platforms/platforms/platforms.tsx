import { FC, useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDraggable } from 'react-use-draggable-scroll';

import styles from './platforms.module.scss';

import ButtonAddSocial from '../../../ui/buttons/button-add-social/button-add-social';
import { IBot } from '../../../utils/types';
import { useAppDispatch, useAppSelector } from '../../../services/hooks/hooks';
import { getPlatformsAction } from '../../../services/actions/platforms/getPlatforms';
import { getPlatformsSel } from '../../../utils/selectorData';
import Typography from '../../../ui/typography/typography';

interface IPlatforms {
  onClick: (name: string, pages: boolean, botURI: boolean) => void;
  bot: IBot;
}

const Platforms: FC<IPlatforms> = ({ onClick, bot }) => {
  const { platforms } = useAppSelector(getPlatformsSel);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPlatformsAction());
  }, [dispatch]);

  const ref =
    useRef<HTMLDivElement>() as unknown as React.MutableRefObject<HTMLUListElement>;
  const { events } = useDraggable(ref);

  return (
    <div>
      <Typography tag="h2" fontFamily="secondary" className={styles.title}>
        Добавить бота
      </Typography>
      <ul className={styles.list} {...events} ref={ref}>
        {platforms?.map((platform) => (
          <li key={platform.title} className={styles.item}>
            <ButtonAddSocial
              social={platform.icon}
              onClick={() =>
                onClick(
                  platform.title,
                  platform.formFields.pages,
                  platform.formFields.url
                )
              }
              buttonHtmlType="button"
              extraClass={
                bot
                  ? platform.title !== bot?.name
                    ? 'disabled'
                    : 'active'
                  : ''
              }
            >
              {platform.title}
            </ButtonAddSocial>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Platforms;
