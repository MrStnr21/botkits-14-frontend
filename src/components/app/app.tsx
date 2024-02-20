import { FC } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import ResetPassword from '../../pages/reset-password/reset-password';
import Subscription from '../../pages/subscription/subscription';
import AddBotPage from '../../pages/add-bot-page/add-bot-page';
import Partnership from '../../pages/partnership/partnership';
import BotBuilder from '../../pages/bot-builder/bot-builder';
import Dashboard from '../../pages/dashboard/dashboard';
import Mailing from '../../pages/mailing/mailing';
import Layout from '../layout/layout';
import Signup from '../../pages/signup/signup';
import Signin from '../../pages/signin/signin';
import NotFound from '../../pages/not-found';
import Share from '../../pages/share/share';
import Chat from '../../pages/chat-page/chat-page';
import UsersPage from '../../pages/users-page/users-page';

import routesUrl from '../../utils/routesData';

import ProtectedRoute from '../../routes/protected-route';
import Statistics from '../../pages/statistics/statistics';
import ChatMobile from '../../pages/chat-page/chat-mobile';
import MobileDialog from '../chat/chat-dialogue/mobile-dialogue/mobile-dialogue';
import MobileDialogInformation from '../chat/Information/MobileDialogInformation';
import CreateMailing from '../../pages/mailing/create-mailing/create-mailing';
import MailingConditions from '../mailing/mailing-conditions/mailing-conditions';
import BotTemplates from '../../pages/bot-templates/bot-templates';
import Promocodes from '../../pages/promocodes/promocodes';
import ErrorNotificator from '../error-notificator/error-notificator';
import Tariffs from '../../pages/tariffs/tariffs';

const App: FC = () => {
  const path = useLocation().pathname;
  const isMobile = useMediaQuery('(max-width: 860px)');

  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute notAuth />}>
          <Route path={routesUrl.signup} element={<Signup />} />
          <Route path={routesUrl.signin} element={<Signin />} />
          <Route path={routesUrl.reset} element={<ResetPassword />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route
            path={routesUrl.homePage}
            element={
              <Layout
                type={
                  path === `/${routesUrl.botBuilder}` ? 'compact' : 'default'
                }
                width={
                  path === `/${routesUrl.botBuilder}` ? 'unset' : 'limited'
                }
              />
            }
          >
            <Route path={routesUrl.homePage} element={<Dashboard />} />
            <Route path={routesUrl.addBot} element={<AddBotPage />} />
            <Route path={routesUrl.botBuilder} element={<BotBuilder />} />
            <Route
              path={routesUrl.chat}
              element={isMobile ? <ChatMobile /> : <Chat />}
            />
            <Route path={routesUrl.partnership} element={<Partnership />} />
            <Route path={routesUrl.bottemplates} element={<BotTemplates />} />
            <Route path={routesUrl.share} element={<Share />} />
            <Route path={routesUrl.subscription} element={<Subscription />} />
            <Route path={routesUrl.tariffs} element={<Tariffs />} />
            <Route path={routesUrl.statistics} element={<Statistics />} />
            <Route path={routesUrl.users} element={<UsersPage />} />
            <Route path={routesUrl.promocodes} element={<Promocodes />} />
            <Route path={`${routesUrl.mailing}/*`} element={<Mailing />} />
            {isMobile && (
              <Route
                path={`${routesUrl.chat}/:id`}
                element={<MobileDialog />}
              />
            )}
            {isMobile && (
              <Route
                path={`${routesUrl.chat}/:id/info`}
                element={<MobileDialogInformation />}
              />
            )}
            <Route path="create" element={<CreateMailing />}>
              <Route path="conditions" element={<MailingConditions />} />
            </Route>
          </Route>
          <Route path={routesUrl.notFound} element={<NotFound />} />
        </Route>
      </Routes>
      <ErrorNotificator />
    </>
  );
};

export default App;
