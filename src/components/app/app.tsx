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
import ChatMobile from '../../pages/chat-page/chat-mobile';
import MobileDialog from '../chat/chat-dialogue/mobile-dialogue/mobile-dialogue';
import MobileDialogInformation from '../chat/Information/MobileDialogInformation';

const App: FC = (): JSX.Element => {
  const path = useLocation().pathname;
  const isMobile = useMediaQuery('(max-width: 620px)');

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
          <ProtectedRoute notAuth>
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
            <ProtectedRoute notAuth>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path={routesUrl.addBot}
          element={
            <ProtectedRoute notAuth>
              <AddBotPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={routesUrl.botBuilder}
          element={
            <ProtectedRoute notAuth>
              <BotBuilder />
            </ProtectedRoute>
          }
        />
        <Route
          path={routesUrl.chat}
          element={
            <ProtectedRoute notAuth>
              {isMobile ? <ChatMobile /> : <Chat />}
            </ProtectedRoute>
          }
        />
        {isMobile && (
          <Route
            path="chat/:id"
            element={
              <ProtectedRoute notAuth>
                <MobileDialog />
              </ProtectedRoute>
            }
          />
        )}
        {isMobile && (
          <Route
            path="chat/:id/info"
            element={
              <ProtectedRoute notAuth>
                <MobileDialogInformation />
              </ProtectedRoute>
            }
          />
        )}
        <Route
          path={routesUrl.mailing}
          element={
            <ProtectedRoute notAuth>
              <Mailing />
            </ProtectedRoute>
          }
        >
          {/* <Route path="" element={<First... />} />
              <Route path="start" element={<My... />} />
              <Route path="add" element={<Create... />} />
              <Route path="conditions" element={<Conditions.. />} /> */}
        </Route>
        <Route
          path={routesUrl.partnership}
          element={
            <ProtectedRoute notAuth>
              <Partnership />
            </ProtectedRoute>
          }
        />
        <Route
          path={routesUrl.share}
          element={
            <ProtectedRoute notAuth>
              <Share />
            </ProtectedRoute>
          }
        />
        <Route
          path={routesUrl.subscription}
          element={
            <ProtectedRoute notAuth>
              <Subscription />
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
