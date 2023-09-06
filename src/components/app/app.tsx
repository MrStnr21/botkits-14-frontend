import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import stylesApp from './app.module.scss';
import Sidebar from '../sidebar/sidebar';

const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
