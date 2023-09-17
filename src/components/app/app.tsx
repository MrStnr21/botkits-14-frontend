/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import stylesApp from './app.module.scss'; // возможно не понадобится

import AddBotPage from '../../pages/add-bot-page/add-bot-page';
import BotBuilder from '../../pages/bot-builder/bot-builder';
import Chat from '../../pages/chat/chat';
import Layout from '../../pages/layout/layout';
import Dashboard from '../../pages/dashboard/dashboard';
import Mailing from '../../pages/mailing/mailing';
import Partnership from '../../pages/partnership/partnership';
import Share from '../../pages/share/share';
import Subscription from '../../pages/subscription/subscription';
import NotFound from '../../pages/not-found';
import Signup from '../../pages/signup/signup';

const App: FC = (): JSX.Element => {
  const [authenticated, setAuthenticated] = useState(true); // ?

  return (
    <BrowserRouter>
      {/* {!authenticated && <Auth />}
      {authenticated && ( */}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="add-bot" element={<AddBotPage />} />
          <Route path="bot-builder" element={<BotBuilder />} />
          <Route path="chat" element={<Chat />} />
          <Route path="mailing" element={<Mailing />}>
            {/* <Route path="" element={<First... />} />
              <Route path="start" element={<My... />} />
              <Route path="add" element={<Create... />} />
              <Route path="conditions" element={<Conditions.. />} /> */}
          </Route>
          <Route path="partnership" element={<Partnership />} />
          <Route path="share" element={<Share />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* )} */}
    </BrowserRouter>
  );
};

export default App;
