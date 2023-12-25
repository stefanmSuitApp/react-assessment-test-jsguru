import * as React from 'react';

import routes from './libs/react-router-dom/routes';

import { useRoutes } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PageLayout } from './features/pageLayout/PageLayout';

/**
 * App component responsible for rendering the application.
 * Uses React Router DOM for routing and an ErrorBoundary to catch errors.
 */
const App = () => {
  const element = useRoutes(routes);

  const { pageLabel } = element?.props.children.props;

  return (
    <ErrorBoundary>
      <React.Suspense>
        <PageLayout element={element} pageLabel={pageLabel} />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export { App };
