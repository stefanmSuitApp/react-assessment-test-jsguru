import * as React from 'react';

import { Navigate, RouteObject } from 'react-router-dom';

// Lazy-loaded components
const HomePage = React.lazy(() =>
  import('../../pages/HomePage').then(({ HomePage }) => ({
    default: HomePage,
  })),
);

const ImageLibraryPage = React.lazy(() =>
  import('../../pages/ImageLibraryPage').then(({ ImageLibraryPage }) => ({
    default: ImageLibraryPage,
  })),
);

// Route configuration
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <HomePage pageLabel="pages.home" />,
  },
  {
    path: '/image-library',
    element: <ImageLibraryPage pageLabel="pages.imageLibrary" />,
  },
  {
    path: '*',
    element: <Navigate to="/home" />,
  },
];

export default routes;
