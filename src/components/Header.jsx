// src/components/Header.jsx
import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const CustomHeader = () => (
  <Menu mode="horizontal" defaultSelectedKeys={['home']}>
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
);

export default CustomHeader;
