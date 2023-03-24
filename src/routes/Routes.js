import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import Layout from './../components/Layout';
import { NotFound } from './../components/NotFound';
import Home from './../components/pages/Home';

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />

      <Route path='*' element={<NotFound />} />
    </Route>
  )
);
