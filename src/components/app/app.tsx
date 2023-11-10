import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
import {
  AUTH_URL_M,
  AUTH_URL_Y,
  AUTH_URL_V,
  AUTH_URL_G,
  BASE_URL,
  CLIENT_ID_M,
  CLIENT_ID_Y,
} from '../../utils/config';

import routesUrl from '../../utils/routesData';

import ProtectedRoute from '../../routes/protected-route';

console.log(
  AUTH_URL_M,
  AUTH_URL_Y,
  AUTH_URL_V,
  AUTH_URL_G,
  BASE_URL,
  CLIENT_ID_M,
  CLIENT_ID_Y
);

const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
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
              <Layout />
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
                <Chat />
              </ProtectedRoute>
            }
          />
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
