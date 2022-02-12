import { lazy } from 'react';

export const lazyLoaderForPage = name =>
  lazy(() =>
    import(`../pages/${name}`).then(module => ({ default: module[name] }))
  );
