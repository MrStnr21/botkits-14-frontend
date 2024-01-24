import { FC, useEffect, useId, useState } from 'react';
import IconMapping from './icon-mapping';
import { IconName } from './utils';

export interface IIcon {
  /** Имя иконки. Возможны два формата: если в макете иконка задана как `24x24/screen-navigation/plus.svg`,
   * то её имя будет `plus` либо `screenNavigationPlus`
   */
  icon: IconName;
  /** Можно ли управлять цветом иконки через css. Запрещено, например, для многоцветных иконок */
  isColored: boolean;
  /** Cтилизация иконки: цвет, размер, дополнительные анимации */
  extraClass?: string;
}

interface IconModule {
  default: string | null;
}

const Icon: FC<IIcon> = ({ icon, isColored, extraClass }) => {
  const filterId = useId();
  const [iconSrc, setIconSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchIcon = async () => {
      try {
        const iconPath = IconMapping[icon];
        const iconModule = (await import(
          `../../assets/icons/${iconPath}`
        )) as IconModule;
        setIconSrc(iconModule.default);
      } catch (error) {
        console.error('Ошибка при загрузке иконки:', error);
      }
    };

    fetchIcon();
  }, [icon]);

  return (
    <svg className={extraClass} width="100%" height="100%">
      {isColored && (
        <filter id={filterId}>
          <feFlood in="SourceGraphic" floodColor="currentColor" />
          <feComposite in2="SourceAlpha" operator="in" />
        </filter>
      )}
      {iconSrc && (
        <image
          href={iconSrc}
          filter={`url(#${filterId})`}
          width="100%"
          height="100%"
          x="0"
          y="0"
          preserveAspectRatio="xMidYMid meet"
        />
      )}
    </svg>
  );
};

export default Icon;
