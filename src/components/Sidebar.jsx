import React from 'react';
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'; // Importar Link para redirecciones

// Función para generar los items del menú
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined />, '/option1'),
  getItem('Option 2', '2', <DesktopOutlined />, '/option2'),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3', null, '/user/tom'),
    getItem('Bill', '4', null, '/user/bill'),
    getItem('Alex', '5', null, '/user/alex'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6', null, '/team/1'),
    getItem('Team 2', '8', null, '/team/2'),
  ]),
  getItem('Files', '9', <FileOutlined />, '/files'),
];

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
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.children ? (
              <span>{item.label}</span>
            ) : (
              <Link to={item.children || item.label}>{item.label}</Link>
            )}
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
