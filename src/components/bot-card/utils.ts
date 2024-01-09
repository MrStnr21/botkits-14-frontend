import { IconName } from '../../ui/icon/icon-mapping';

type ImageMap = {
  [key: string]: IconName;
};

const messengerIcons: ImageMap = {
  Facebook: 'facebookHover',
  Telegram: 'telegramHover',
  Viber: 'viberHover',
  VK: 'vkHover',
  Odnoklassniki: 'odnoklassnikiHover',
  Алиса: 'alisaHover',
  Whatsapp: 'whatsappHover',
  Instagram: 'instaHover',
  'Веб-сайт': 'webHover',
};

export default messengerIcons;
