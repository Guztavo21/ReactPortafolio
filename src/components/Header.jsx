// src/components/Header.jsx
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const CustomHeader = () => (
  <Header
    style={{
      position: 'fixed', // Fijo en la parte superior
      zIndex: 1000, // Asegura que esté encima de otros elementos
      width: '100%', // Ancho completo
      background: '#001529', // Color del header
    }}
  >
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
      <Menu.Item key="home">
        <Link to="/">Inicio</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="/about">Sobre mí</Link>
      </Menu.Item>
      <Menu.Item key="projects">
        <Link to="/projects">Proyectos</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact">Contacto</Link>
      </Menu.Item>
    </Menu>
  </Header>
);

export default CustomHeader;
