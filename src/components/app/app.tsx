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

import routesUrl from '../../utils/routesData';

// import ProtectedRoute from '../../routes/protected-route';

const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routesUrl.signup}
          element={
            // ProtectedRoute notAuth>
            <Signup />
            // </ProtectedRoute>
          }
        />
        <Route
          path={routesUrl.signin}
          element={
            // ProtectedRoute notAuth>
            <Signin />
            // /ProtectedRoute>
          }
        />
        <Route
          path={routesUrl.reset}
          element={
            // ProtectedRoute notAuth>
            <ResetPassword />
            // /ProtectedRoute>
          }
        />
        <Route
          path={routesUrl.homePage}
          element={
            // ProtectedRoute>
            <Layout />
            // /ProtectedRoute>
          }
        >
          <Route
            path={routesUrl.homePage}
            element={
              // ProtectedRoute>
              <Dashboard />
              // /ProtectedRoute>
            }
          />
          <Route
            path={routesUrl.addBot}
            element={
              // ProtectedRoute>
              <AddBotPage />
              // /ProtectedRoute>
            }
          />
          <Route
            path={routesUrl.botBuilder}
            element={
              // ProtectedRoute>
              <BotBuilder />
              // /ProtectedRoute>
            }
          />
          <Route
            path={routesUrl.chat}
            element={
              // ProtectedRoute>
              <Chat />
              // /ProtectedRoute>
            }
          />
          <Route
            path={routesUrl.mailing}
            element={
              // <ProtectedRoute>
              <Mailing />
              // /ProtectedRoute>
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
              // <ProtectedRoute>
              <Partnership />
              // </ProtectedRoute>
            }
          />
          <Route
            path={routesUrl.share}
            element={
              // <ProtectedRoute>
              <Share />
              // </ProtectedRoute>
            }
          />
          <Route
            path={routesUrl.subscription}
            element={
              // <ProtectedRoute>
              <Subscription />
              // </ProtectedRoute>
            }
          />
          <Route path={routesUrl.notFound} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
