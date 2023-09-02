import { FC } from "react";

import stylesApp from "./app.module.scss";

const App: FC = (): JSX.Element => {
  return <div className={stylesApp.app}></div>;
};

export { App };
