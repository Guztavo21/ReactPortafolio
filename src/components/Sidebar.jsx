// src/components/Sidebar.jsx
import React from 'react';
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'; // Importar Link para redirecciones

// Función para generar los items del menú

const Sidebar = ({ collapsed, setCollapsed }) => {
  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={250}
      style={{
        position: 'fixed',  // Fija el Sidebar
        height: '100vh',     // Ocupa toda la altura de la ventana
        left: 0,             // Pegado a la izquierda
        top: 0,              // Pegado a la parte superior
        zIndex: 1000,        // Asegura que esté por encima del contenido
        transition: 'all 0.3s', // Suaviza la transición al cambiar el estado
      }}
    >
      <div
        className="logo"
        style={{
          padding: 16,
          textAlign: 'center',
          color: 'white',
          fontSize: '18px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          transition: 'all 0.3s',
        }}
      >
        {collapsed ? (
          <div style={{ fontSize: '24px' }}>M</div>
        ) : (
          'Mi Portafolio'
        )}
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        
        {/* Agregar los botones del header aquí */}
        <Menu.Item key="home" icon={<DesktopOutlined />}>
          <Link to="/">Inicio</Link>
        </Menu.Item>
        <Menu.Item key="about" icon={<UserOutlined />}>
          <Link to="/about">Sobre mí</Link>
        </Menu.Item>
        <Menu.Item key="projects" icon={<PieChartOutlined />}>
          <Link to="/projects">Proyectos</Link>
        </Menu.Item>
        <Menu.Item key="contact" icon={<FileOutlined />}>
          <Link to="/contact">Contacto</Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
