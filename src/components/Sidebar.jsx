// src/components/Sidebar.jsx
import React, { useEffect, useState } from 'react';
import { Menu, Layout, Drawer, Button } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = ({ collapsed, setCollapsed }) => {
  const [isMobile, setIsMobile] = useState(false); // Detecta si es móvil
  const [drawerOpen, setDrawerOpen] = useState(false); // Controla la apertura del Drawer

  // Detecta si la pantalla es móvil
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Comprobación inicial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { key: 'home', icon: <DesktopOutlined />, label: <Link to="/">Inicio</Link> },
    { key: 'about', icon: <UserOutlined />, label: <Link to="/about">Sobre mí</Link> },
    { key: 'projects', icon: <PieChartOutlined />, label: <Link to="/projects">Proyectos</Link> },
    { key: 'contact', icon: <FileOutlined />, label: <Link to="/contact">Contacto</Link> },
  ];

  const renderMenu = (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['home']}
      items={menuItems}
    />
  );

  if (isMobile) {
    return (
      <>
        {/* Botón para abrir/cerrar el Drawer */}
        <Button
          icon={<MenuOutlined />}
          type="primary"
          onClick={() => setDrawerOpen((prev) => !prev)} // Alterna el estado
          style={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: 1001,
          }}
        />
        <Drawer
          title="Menú"
          placement="left"
          onClose={() => setDrawerOpen(false)} // Cierra el Drawer
          open={drawerOpen} // Estado que controla la visibilidad
          width={250}
          bodyStyle={{ padding: 0 }}
        >
          {renderMenu}
        </Drawer>
      </>
    );
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)} // Actualiza el estado colapsado
      width={250}
      style={{
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        className="logo"
        style={{
          padding: 16,
          textAlign: 'center',
          color: 'white',
          fontSize: '18px',
        }}
      >
        {collapsed ? 'M' : 'Mi Portafolio'}
      </div>
      {renderMenu}
    </Sider>
  );
};

export default Sidebar;
