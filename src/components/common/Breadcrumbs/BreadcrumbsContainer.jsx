import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import Breadcrumbs from './Breadcrumbs';

const BreadcrumbsContainer = connect()(Breadcrumbs);

export default BreadcrumbsContainer;
