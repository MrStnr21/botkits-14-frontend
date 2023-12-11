import { FC, useEffect, useId, useRef, useState } from 'react';
import IconMapping, { IconName } from './icon-mapping';

export interface IIcon {
  /** Имя иконки. Возможны два формата: если в макете иконка задана как `24x24/screen-navigation/plus.svg`,
   * то её имя будет `plus` либо `screenNavigationPlus`
   */
  icon: IconName;
  /** Размер в пикселях */
  size: number;
  /** Дополнительная стилизация иконки */
  extraClass?: string;
}

const Icon: FC<IIcon> = ({ icon, size, extraClass }) => {
  const filterId = useId();
  const [iconSrc, setIconSrc] = useState<string | null>(null);
  const iconRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const fetchIcon = async () => {
      try {
        const iconPath = IconMapping[icon];
        const iconModule = await import(`../../assets/icons/${iconPath}`);
        setIconSrc(iconModule.default);
      } catch (error) {
        console.error('Ошибка при загрузке иконки:', error);
      }
    };

    fetchIcon();
  }, [icon]);

  return (
    <svg width={size} height={size} className={extraClass} ref={iconRef}>
      {extraClass && (
        <filter id={filterId}>
          <feFlood in="SourceGraphic" floodColor="var(--flood-color)" />
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
