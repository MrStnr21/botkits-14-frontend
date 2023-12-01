import { FC, useEffect, useId, useState } from 'react';
import IconMapping, { IconName } from './icon-mapping';

export interface IIcon {
  /** Имя иконки. Возможны два формата: если в макете иконка задана как `24x24/screen-navigation/plus.svg`,
   * то её имя будет `plus` либо `screenNavigationPlus`
   */
  icon: IconName;
  /** Размер в пикселях */
  size: number;
  /** Цвет иконки в формате HEX. Если не задан, то будет использован оригинальный цвет иконки */
  color?: string;
  /** Дополнительная стилизация иконки */
  extraClass?: string;
}

const Icon: FC<IIcon> = ({ icon, size, color, extraClass }) => {
  const filterId = useId();
  const [iconSrc, setIconSrc] = useState<string | null>(null);

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

  // Если не задан цвет - используется оригинальный цвет иконки
  const filter = color ? (
    <filter id={filterId}>
      <feFlood floodColor={color} />
      <feComposite in2="SourceAlpha" operator="in" />
    </filter>
  ) : null;

  return (
    <svg width={size} height={size} className={extraClass}>
      {filter}
      {iconSrc && (
        <image
          href={iconSrc}
          filter={color ? `url(#${filterId})` : undefined}
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
