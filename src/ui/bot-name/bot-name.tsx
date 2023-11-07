import { FC } from 'react';
import stylesBotName from './bot-name.module.scss';
import fb from '../../images/icon/40x40/facebook/hover.svg';
import DoneIcon from '../../components/icons/Done/Done';
import Typography from '../typography/typography';

export interface IBotName {
  platform_icon: string;
}

const BotName: FC<IBotName> = ({ platform_icon = fb }): JSX.Element => {
  return (
    <div className={stylesBotName.container}>
      <img className={stylesBotName.icon} src={platform_icon} alt="иконка" />
      <Typography tag="p" fontFamily="secondary" className={stylesBotName.text}>
        Название бота
      </Typography>
      <DoneIcon size={20} />
    </div>
  );
};

export default BotName;
