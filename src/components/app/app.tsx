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

import routesUrl from '../../utils/routesData';

import ProtectedRoute from '../../routes/protected-route';
import Statistics from '../../pages/statistics/statistics';
import ChatMobile from '../../pages/chat-page/chat-mobile';
import MobileDialog from '../chat/chat-dialogue/mobile-dialogue/mobile-dialogue';
import MobileDialogInformation from '../chat/Information/MobileDialogInformation';
import CreateMailing from '../../pages/mailing/create-mailing/create-mailing';

const App: FC = (): JSX.Element => {
  const path = useLocation().pathname;
  const isMobile = useMediaQuery('(max-width: 860px)');

  return (
    <Routes>
      <Route
        path={routesUrl.signup}
        element={
          <ProtectedRoute notAuth>
            <Signup />
          </ProtectedRoute>
        }
      />
      <Route
        path={routesUrl.signin}
        element={
          <ProtectedRoute notAuth>
            <Signin />
          </ProtectedRoute>
        }
      />
      <Route
        path={routesUrl.reset}
        element={
          <ProtectedRoute notAuth>
            <ResetPassword />
          </ProtectedRoute>
        }
      />
      <Route
        path={routesUrl.homePage}
        element={
          <ProtectedRoute>
            <Layout
              type={path === `/${routesUrl.botBuilder}` ? 'compact' : 'default'}
              width={path === `/${routesUrl.botBuilder}` ? 'unset' : 'limited'}
            />
          </ProtectedRoute>
        }
      >
        <Route
          path={routesUrl.homePage}
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path={routesUrl.addBot}
          element={
            <ProtectedRoute>
              <AddBotPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={routesUrl.botBuilder}
          element={
            <ProtectedRoute>
              <BotBuilder />
            </ProtectedRoute>
          }
        />
        <Route
          path={routesUrl.chat}
          element={
            <ProtectedRoute>
              {isMobile ? <ChatMobile /> : <Chat />}
            </ProtectedRoute>
          }
        />
        {isMobile && (
          <Route
            path="chat/:id"
            element={
              <ProtectedRoute>
                <MobileDialog />
              </ProtectedRoute>
            }
          />
        )}
        {isMobile && (
          <Route
            path="chat/:id/info"
            element={
              <ProtectedRoute>
                <MobileDialogInformation />
              </ProtectedRoute>
            }
          />
        )}
        <Route
          path={routesUrl.mailing}
          element={
            <ProtectedRoute>
              <Mailing />
            </ProtectedRoute>
          }
        >
          <Route path="create" element={<CreateMailing />} />
          {/* <Route path="" element={<First... />} />
              <Route path="start" element={<My... />} />
              <Route path="add" element={<Create... />} />
              <Route path="conditions" element={<Conditions.. />} /> */}
        </Route>
        <Route
          path={routesUrl.partnership}
          element={
            <ProtectedRoute>
              <Partnership />
            </ProtectedRoute>
          }
        />
        <Route
          path={routesUrl.share}
          element={
            <ProtectedRoute>
              <Share />
            </ProtectedRoute>
          }
        />
        <Route
          path={routesUrl.subscription}
          element={
            <ProtectedRoute>
              <Subscription />
            </ProtectedRoute>
          }
        />
        <Route
          path={routesUrl.statistics}
          element={
            <ProtectedRoute>
              <Statistics />
            </ProtectedRoute>
          }
        />
        <Route path={routesUrl.notFound} element={<NotFound />} />
      </Route>
      <Route path={routesUrl.notFound} element={<NotFound />} />
    </Routes>
  );
};

export default App;
