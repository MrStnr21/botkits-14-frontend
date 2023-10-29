import { FC } from 'react';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames/bind';

import PlusIcon from '../../../images/icon/24x24/constructor/plus.svg';
import Horizontal from '../../../images/icon/24x24/constructor/horizontal.svg';
import Vertical from '../../../images/icon/24x24/constructor/vertical.svg';
import Message from '../../../images/icon/24x24/add block/message-square.svg';
import Table from '../../../images/icon/24x24/add block/table.svg';
import Deeplink from '../../../images/icon/24x24/add block/deeplink.svg';
import GitBranch from '../../../images/icon/24x24/add block/git-branch.svg';
import Headphones from '../../../images/icon/24x24/add block/headphones.svg';
import CreditCard from '../../../images/icon/24x24/add block/credit-card.svg';
import Sliders from '../../../images/icon/24x24/add block/sliders.svg';
import Api from '../../../images/icon/24x24/add block/api.svg';
import MapPin from '../../../images/icon/24x24/add block/map-pin.svg';
import Photo from '../../../images/icon/24x24/add content/image.svg';

import stylesConstructorAddButton from './constructor-add-button.module.scss';
import Typography from '../../typography/typography';

enum IconsFree {
  add = 'add',
  horizontalInline = 'horizontal inline',
  verticalInline = 'vertical inline',
}

enum IconsHard {
  message = 'message block',
  table = 'saving data in CRM',
  deeplink = 'deeplink',
  gitBranch = 'conditional block',
  headphones = 'transfer to the operator',
  creditCard = 'payment',
  sliders = 'managing variables',
  api = 'api',
  mapPin = 'coordinates',
  photo = 'photo',
}

export const Icons = {
  ...IconsFree,
  ...IconsHard,
};

// type Icons = IconsFree | IconsHard;

/* export enum Icons1 {
  add = 'add',
  horizontalInline = 'horizontal inline',
  verticalInline = 'vertical inline',
  message = 'message block',
  table = 'saving data in CRM',
  deeplink = 'deeplink',
  gitBranch = 'conditional block',
  headphones = 'transfer to the operator',
  creditCard = 'payment',
  sliders = 'managing variables',
  api = 'api',
  mapPin = 'coordinates',
} */

export interface IConstructorAddButton {
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  onClick?: VoidFunction;
  disabled?: boolean;
  children: React.ReactNode;
  icon?: string;
  picture?: React.ReactNode;
  width?: string;
}

const cx = classNames.bind(stylesConstructorAddButton);

const ConstructorAddButton: FC<IConstructorAddButton> = ({
  buttonHtmlType = 'button',
  onClick,
  disabled,
  children,
  icon = 'add',
  picture,
  width,
}) => {
  const getIcon = () => {
    switch (icon) {
      case Icons.add: {
        return PlusIcon;
      }
      case Icons.horizontalInline: {
        return Horizontal;
      }
      case Icons.verticalInline: {
        return Vertical;
      }
      case Icons.message: {
        // buttonType = 'hard';
        return Message;
      }
      case Icons.table: {
        return Table;
      }
      case Icons.deeplink: {
        return Deeplink;
      }
      case Icons.gitBranch: {
        return GitBranch;
      }
      case Icons.headphones: {
        return Headphones;
      }
      case Icons.creditCard: {
        return CreditCard;
      }
      case Icons.sliders: {
        return Sliders;
      }
      case Icons.api: {
        return Api;
      }
      case Icons.mapPin: {
        return MapPin;
      }
      case Icons.photo: {
        return Photo;
      }
      default: {
        return PlusIcon;
      }
    }
  };

  const buttonType = Object.values(IconsFree).includes(icon as IconsFree)
    ? 'free'
    : 'hard';

  return (
    <section
      style={width ? { width } : {}}
      className={
        buttonType === 'free'
          ? stylesConstructorAddButton.wrapper
          : stylesConstructorAddButton.wrapperAddNewBlock
      }
    >
      <button
        className={stylesConstructorAddButton.button}
        onClick={onClick}
        // eslint-disable-next-line react/button-has-type
        type={buttonHtmlType}
        disabled={disabled}
      >
        {' '}
        <ReactSVG src={getIcon()} />
        <Typography tag="p" className={cx('text')}>
          {children}
        </Typography>
      </button>
    </section>
  );
};

export default ConstructorAddButton;
