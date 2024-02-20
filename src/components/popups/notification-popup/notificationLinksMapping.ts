import routesUrl from '../../../utils/routesData';

export type TLinksMapping = {
  readonly [name: string]: string;
};

// keys - для примера, настоящие пока неизвестны
const linksMapping: TLinksMapping = {
  myBots: routesUrl.homePage,
  addBot: routesUrl.addBot,
  botBuilder: routesUrl.botBuilder,
  chat: routesUrl.chat,
  mailing: routesUrl.mailing,
  partnership: routesUrl.partnership,
  bottemplates: routesUrl.bottemplates,
  share: routesUrl.share,
  promocodes: routesUrl.promocodes,
  subscription: routesUrl.subscription,
  statistics: routesUrl.statistics,
  users: routesUrl.users,
  tariffs: routesUrl.tariffs,
};

export default linksMapping;
