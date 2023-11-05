import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Movies from 'pages/Movies';
import Home from 'pages/Home';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </div>
  );
};
