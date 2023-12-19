import IconMapping from './icon-mapping';

type IconNames = keyof typeof IconMapping;

type IconStyle = {
  width: string;
  height: string;
};

export type IconGroup = {
  names: Partial<IconNames>[];
  style: IconStyle;
};

type IconGroups = Record<string, IconGroup>;

const Groups: IconGroups = {
  notification: {
    names: ['notificationsCircle'],
    style: {
      width: '14px',
      height: '14px',
    },
  },
  sync: {
    names: ['syncDone', 'syncUpdate'],
    style: {
      width: '16px',
      height: '16px',
    },
  },
  chevron: {
    names: ['chevronDown', 'chevronUp'],
    style: {
      width: '20px',
      height: '20px',
    },
  },
  addBlock: {
    names: [
      'api',
      'creditCard',
      'deeplink',
      'gitBranch',
      'headphones',
      'mapPin',
      'messageSquare',
      'sliders',
      'table',
    ],
    style: {
      width: '24px',
      height: '24px',
    },
  },
  addContent: {
    names: ['button', 'file', 'image', 'music', 'video'],
    style: {
      width: '24px',
      height: '24px',
    },
  },
  common: {
    names: [
      'calendar',
      'check',
      'chevronBig',
      'close',
      'cloud',
      'copy',
      'export',
      'filter',
      'help',
      'menu',
      'commonMore',
      'notifications',
      'pause',
      'play',
      'search',
      'slash',
      'sort',
      'tag',
      'upload',
      'user',
      'xCircle',
      'zap',
    ],
    style: {
      width: '24px',
      height: '24px',
    },
  },
  constructor_icons: {
    names: [
      'arrowUpCircle',
      'askPhone',
      'bracket',
      'delete',
      'emoji',
      'horizontal',
      'constructorPlus',
      'constructorUrl',
      'constructorVertical',
    ],
    style: {
      width: '24px',
      height: '24px',
    },
  },
  dropDown: {
    names: [
      'dropdownClose',
      'dropdownCopyBot',
      'dropdownEdit',
      'dropdownInfo',
      'dropdownLink',
      'dropdownLogout',
      'dropdownNotificationsSetting',
      'dropdownPayment',
      'dropdownSettings',
      'dropdownShare',
      'dropdownTrash',
    ],
    style: {
      width: '24px',
      height: '24px',
    },
  },
  markdown: {
    names: ['bold', 'code', 'italic'],
    style: {
      width: '24px',
      height: '24px',
    },
  },
  radioButton: {
    names: ['off', 'on'],
    style: {
      width: '24px',
      height: '24px',
    },
  },
  screenNavigation: {
    names: [
      'screenNavigationFit',
      'screenNavigationFullScreen',
      'screenNavigationMinus',
      'screenNavigationPage',
      'screenNavigationPlus',
    ],
    style: {
      width: '24px',
      height: '24px',
    },
  },
  variables: {
    names: [
      'equalNot',
      'equalWithoutCase',
      'equal',
      'inLineWithoutCase',
      'inLine',
      'lessOrEqual',
      'less',
      'moreOrEqual',
      'more',
      'notInLineWithoutCase',
      'notInLine',
    ],
    style: {
      width: '24px',
      height: '24px',
    },
  },
  add: {
    names: ['add'],
    style: {
      width: '36px',
      height: '36px',
    },
  },
  platforms: {
    names: [
      'alisaDefault',
      'alisaHover',
      'alisaInactive',
      'facebookDefault',
      'facebookHover',
      'facebookInactive',
      'googleDefault',
      'googleHover',
      'googleInactive',
      'instaDefault',
      'instaHover',
      'instaInactive',
      'mailruDefault',
      'mailruHover',
      'mailruInactive',
      'odnoklassnikiDefault',
      'odnoklassnikiHover',
      'odnoklassnikiInactive',
      'telegramDefault',
      'telegramHover',
      'telegramInactive',
      'twitterDefault',
      'twitterHover',
      'twitterInactive',
      'viberDefault',
      'viberHover',
      'viberInactive',
      'vkDefault',
      'vkHover',
      'vkInactive',
      'webDefault',
      'webHover',
      'webInactive',
      'whatsappDefault',
      'whatsappHover',
      'whatsappInactive',
      'yandexDefault',
      'yandexHover',
      'yandexInactive',
      'youtubeDefault',
      'youtubeHover',
      'youtubeInactive',
    ],
    style: {
      width: '40px',
      height: '40px',
    },
  },
  template: {
    names: [
      'answeringMachine',
      'banking',
      'beauty',
      'carsharing',
      'closeChatr',
      'demoBot',
      'eLearning',
      'eCommerce',
      'entertainment',
      'foodDelivery',
      'internetShopping',
      'leadGeneration',
      'medical',
      'poll',
      'privateClub',
      'question',
      'realEstate',
      'tickets',
    ],
    style: {
      width: '104px',
      height: '104px',
    },
  },
};

export default Groups;
