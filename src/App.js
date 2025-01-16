// src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import { Layout } from 'antd';

import CustomHeader from './components/Header';
import CustomFooter from './components/Footer';
import Sidebar from './components/Sidebar';

import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// DynamicBreadcrumb es un componente que genera un breadcrumb dinámico
import DynamicBreadcrumb from './components/DynamicBreadcrumb';

const { Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main layout */}
      <Layout style={{ marginLeft: collapsed ? 80 : 250 }}> {/* Ancho dinámico según el estado del Sidebar */}
        {/* Header */}
        <CustomHeader />

        {/* Main content */}
        <Content style={{ marginTop: 50, padding: '24px 16px', background: '#fff' }}>
          {/* Breadcrumb */}
        <DynamicBreadcrumb />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Content>

        {/* Footer */}
        <CustomFooter />
      </Layout>
    </Layout>
  );
};

export default App;
