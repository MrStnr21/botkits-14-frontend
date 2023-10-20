import { FC } from 'react';
import stylesChatDesktop from './chat.module.scss';
import InputDialogsues from '../../components/chat/InputDialogsues/InputDialogsues';
// import Information from '../../components/chat/Information/Information';
// import MenuSimple from '../../ui/menus/menu-simple/menu-simple';

const ChatDesktop: FC = (): JSX.Element => {
  // const array = ['Сначала новые', 'Сначала старые', 'Неотвеченные'];
  // const active = true;
  return (
    <div>
      <div className={stylesChatDesktop.title}>ChatDesktop</div>
      <InputDialogsues />
      {/* <Information /> */}
      {/* <MenuSimple
        buttons={array}
        isScroll={false}
        isActive={active}
        size="chat"
      /> */}
    </div>
  );
};

export default ChatDesktop;
