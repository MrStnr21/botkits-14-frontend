/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import stylesApp from './app.module.scss'; // возможно не понадобится

import ResetPassword from '../../pages/reset-password/reset-password';
import Subscription from '../../pages/subscription/subscription';
import AddBotPage from '../../pages/add-bot-page/add-bot-page';
import Partnership from '../../pages/partnership/partnership';
import BotBuilder from '../../pages/bot-builder/bot-builder';
import Dashboard from '../../pages/dashboard/dashboard';
import Mailing from '../../pages/mailing/mailing';
import Layout from '../../pages/layout/layout';
import Signup from '../../pages/signup/signup';
import Signin from '../../pages/signin/signin';
import NotFound from '../../pages/not-found';
import Share from '../../pages/share/share';
import Chat from '../../pages/chat/chat';

import routesUrl from '../../utils/routesData';

const App: FC = (): JSX.Element => {
  // const [authenticated, setAuthenticated] = useState(true); // ?

  return (
    <BrowserRouter>
      {/* {!authenticated && <Auth />}
      {authenticated && ( */}
      <Routes>
        <Route path={routesUrl.signup} element={<Signup />} />
        <Route path={routesUrl.signin} element={<Signin />} />
        <Route path={routesUrl.reset} element={<ResetPassword />} />
        <Route path={routesUrl.homePage} element={<Layout />}>
          <Route path={routesUrl.homePage} element={<Dashboard />} />
          <Route path={routesUrl.addBot} element={<AddBotPage />} />
          <Route path={routesUrl.botBuilder} element={<BotBuilder />} />
          <Route path={routesUrl.chat} element={<Chat />} />
          <Route path={routesUrl.mailing} element={<Mailing />}>
            {/* <Route path="" element={<First... />} />
              <Route path="start" element={<My... />} />
              <Route path="add" element={<Create... />} />
              <Route path="conditions" element={<Conditions.. />} /> */}
          </Route>
          <Route path={routesUrl.partnership} element={<Partnership />} />
          <Route path={routesUrl.share} element={<Share />} />
          <Route path={routesUrl.subscription} element={<Subscription />} />
          <Route path={routesUrl.notFound} element={<NotFound />} />
        </Route>
      </Routes>
      {/* )} */}
    </BrowserRouter>
  );
};

export default App;
