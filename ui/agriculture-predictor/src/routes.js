import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
