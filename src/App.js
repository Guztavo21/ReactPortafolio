// src/App.js
import React from 'react';
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
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main layout */}
      <Layout>
        {/* Header (Navbar) */}
        
        <CustomHeader />

        <DynamicBreadcrumb />
        {/* Main content */}
        <Content style={{ margin: '0 16px', padding: '24px', background: '#fff' }}>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Content>

        {/* Footer */}
        <CustomFooter />
      </Layout>
    </Layout>
  );
};

export default App;
