import React from 'react';
import { Breadcrumb } from 'antd';
import { useLocation, Link } from 'react-router-dom';

const DynamicBreadcrumb = () => {
  const location = useLocation();

  // Divide la ruta actual en partes
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  // Genera dinámicamente los items del Breadcrumb
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
    ...pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{_}</Link>
        </Breadcrumb.Item>
      );
    }),
  ];

  return <Breadcrumb style={{ margin: '5px 5px' }}>{breadcrumbItems}</Breadcrumb>;
};

export default DynamicBreadcrumb;
