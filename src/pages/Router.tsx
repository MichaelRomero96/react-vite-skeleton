import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { paths } from '../constants/routesPaths';
import Layout from '../components/Layout';
import VitePage from './Technologies/Vite';
import ReactPage from './Technologies/React';
import HelloWorldPage from './HelloWorld';
import HomePage from './Home';

export default function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path={paths.home} element={<HomePage />} />
        <Route path={paths.helloWorld} element={<HelloWorldPage />} />
        <Route
          path={`${paths.technologies}`}
          children={
            [<Route
              path={`/${paths.technologies}/${paths.vite}`}
              element={<VitePage />}
            />,
            <Route
              path={`/${paths.technologies}/${paths.react}`}
              element={<ReactPage />}
            />]
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
