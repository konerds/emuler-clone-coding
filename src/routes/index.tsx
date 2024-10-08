import { memo } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import PageLanding from '../pages/PageLanding';
import PageNotFound from '../pages/PageNotFound';
import PagePrivacyPolicy from '../pages/PagePrivacyPolicy';

const PATH_ROUTE_ROOT = '/';
const PATH_ROUTE_PRIVACY_POLICY = 'privacy-policy';
const PATH_ROUTE_NOT_FOUND = 'not-found';

const RoutesApp = () => {
  return (
    <Routes>
      <Route path={PATH_ROUTE_ROOT} element={<PageLanding />} />
      <Route
        path={`${PATH_ROUTE_ROOT}${PATH_ROUTE_PRIVACY_POLICY}`}
        element={<PagePrivacyPolicy />}
      />
      <Route
        path={`${PATH_ROUTE_ROOT}${PATH_ROUTE_NOT_FOUND}`}
        element={<PageNotFound />}
      />
      <Route
        path="*"
        element={
          <Navigate
            to={`${PATH_ROUTE_ROOT}${PATH_ROUTE_NOT_FOUND}`}
            replace={true}
          />
        }
      />
    </Routes>
  );
};

export default memo(RoutesApp);
