import React, { FC } from 'react';
import stylesChatCompPopup from './chat-comp-popup.module.scss';
import logout from '../../../images/icon/24x24/drop down/logOutBlue.svg';
import check from '../../../images/icon/24x24/common/checkBlue.svg';
import docCircle from '../../../images/icon/47x47/doc-circle.svg';
import Typography from '../../../ui/typography/typography';

const items = [
  {
    title: 'Инфо1.pdf',
    info: '2.4 KB / 2.4 KB',
    icon: docCircle,
    checkIcon: check,
  },
  {
    title: 'Инфо2.doc',
    info: '2.4 KB / 2.4 KB',
    icon: docCircle,
    checkIcon: check,
  },
  {
    title: 'Инфо3.png',
    info: '2.4 KB / 2.4 KB',
    icon: docCircle,
    checkIcon: check,
  },
  {
    title: 'Инфо4.xls',
    info: '2.4 KB / 2.4 KB',
    icon: docCircle,
    checkIcon: check,
  },
  {
    title: 'Инфо4.xls',
    info: '2.4 KB / 2.4 KB',
    icon: docCircle,
    checkIcon: check,
  },
  {
    title: 'Инфо4.xls',
    info: '2.4 KB / 2.4 KB',
    icon: docCircle,
    checkIcon: check,
  },
  {
    title: 'Инфо4.xls',
    info: '2.4 KB / 2.4 KB',
    icon: docCircle,
    checkIcon: check,
  },
  {
    title: 'Инфо4.xls',
    info: '2.4 KB / 2.4 KB',
    icon: docCircle,
    checkIcon: check,
  },
  {
    title: 'Инфо4.xls',
    info: '2.4 KB / 2.4 KB',
    icon: docCircle,
    checkIcon: check,
  },
];

const ChatCompPopup: FC = (): JSX.Element => {
  return (
    <div className={stylesChatCompPopup.container}>
      <div className={stylesChatCompPopup.popUp}>
        <div className={stylesChatCompPopup.dropSector}>
          <div className={stylesChatCompPopup.dropSectorWrapper}>
            <div className={stylesChatCompPopup.logOutParent}>
              <img
                className={stylesChatCompPopup.logOutIcon}
                alt="logout"
                src={logout}
              />
              <div className={stylesChatCompPopup.dropSectorText}>
                <Typography tag="p">
                  Перетяните файл <br /> или
                </Typography>
              </div>
            </div>
            <div className={stylesChatCompPopup.downloadText}>Загрузите</div>
          </div>
        </div>
        <div className={stylesChatCompPopup.itemSector}>
          <div className={stylesChatCompPopup.itemsContainer}>
            {items.map((item, index) => (
              <div key={index} className={stylesChatCompPopup.itemWrapper}>
                <img
                  className={stylesChatCompPopup.iconDocument}
                  alt=""
                  src={item.icon}
                />
                <div className={stylesChatCompPopup.itemInfoWrapper}>
                  <div className={stylesChatCompPopup.itemTitle}>
                    {item.title}
                  </div>
                  <div className={stylesChatCompPopup.itemInfo}>
                    {item.info}
                  </div>
                </div>
                <img
                  className={stylesChatCompPopup.iconCommonCheck}
                  alt=""
                  src={item.checkIcon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCompPopup;
