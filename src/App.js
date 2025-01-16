// src/App.js
import React from 'react';
import './index.css';
import { Layout, Breadcrumb } from 'antd';
import CustomHeader from './components/Header'; // Importa el Header
import CustomFooter from './components/Footer'; // Ajusta la ruta según sea necesario
import Sidebar from './components/Sidebar'; // Importa el Sidebar

const { Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main layout */}
      <Layout>
        {/* Header (Navbar) */}
        <CustomHeader />

        {/* Main content */}
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>

          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: 'white', // Puedes modificar esto si usas el tema de Ant Design
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
            }}
          >
            Contenido principal
          </div>
        </Content>

        {/* Footer */}
        <CustomFooter />
      </Layout>
    </Layout>
  );
};

export default App;
