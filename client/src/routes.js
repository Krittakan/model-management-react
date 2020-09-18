import React from 'react';
const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));

const ModelList = React.lazy(() => import('./views/Model/List'));
const ModelAdd = React.lazy(() => import('./views/Model/Add'));
const ModelDetail = React.lazy(() => import('./views/Model/Detail'));

const routes = [
  { path: '', exact: true, name: '' },
  { path: '/model', exact: true, name: 'Model List', component: ModelList },
  { path: '/model/add', exact: true, name: 'Model Add', component: ModelAdd },
  { path: '/model/:id', exact: true, name: 'Model Detail', component: ModelDetail },
  
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  
];

export default routes;
