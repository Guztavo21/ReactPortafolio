import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const CustomFooter = () => (
  <Footer style={{ textAlign: 'center', backgroundColor: '#f0f2f5', padding: '10px 20px' }}>
    © {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.
  </Footer>
);

export default CustomFooter;
