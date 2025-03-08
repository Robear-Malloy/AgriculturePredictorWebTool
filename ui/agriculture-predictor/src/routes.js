import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.js';
import ExamplePage from './pages/ExamplePage/ExamplePage.js';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/example" element={<ExamplePage/>} />
    </Routes>
  </Router>
);

export default AppRoutes;
