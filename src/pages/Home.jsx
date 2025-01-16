import React from 'react';
import { Typography, Card, Row, Col, Button, Space } from 'antd';
import { CodeOutlined, AppstoreAddOutlined, DesktopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const Home = () => (
  <div style={{ padding: '40px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
    <Card
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '30px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        backgroundColor: '#ffffff',
      }}
    >
      <Title level={2} style={{ textAlign: 'center', marginBottom: '20px', color: '#1890ff' }}>
        Servicios que ofrezco
      </Title>
      <Text
        style={{
          fontSize: '18px',
          color: '#555',
          lineHeight: '1.6',
          textAlign: 'center',
          display: 'block',
          marginBottom: '30px',
        }}
      >
        Como desarrollador frontend, me especializo en crear aplicaciones web interactivas y escalables con
        tecnologías modernas. Aquí te muestro algunos de los servicios que puedo ofrecerte:
      </Text>

      <Row gutter={[16, 16]} justify="center" style={{ marginTop: '50px' }}>
        <Col xs={24} sm={12} md={8}>
          <Card
            style={{
              textAlign: 'center',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <CodeOutlined style={{ fontSize: '40px', color: '#1890ff', marginBottom: '10px' }} />
            <Title level={4}>Desarrollo Frontend</Title>
            <Text style={{ fontSize: '16px', color: '#555' }}>
              Creación de interfaces de usuario modernas, funcionales y optimizadas utilizando tecnologías como React.
            </Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            style={{
              textAlign: 'center',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <AppstoreAddOutlined style={{ fontSize: '40px', color: '#52c41a', marginBottom: '10px' }} />
            <Title level={4}>Aplicaciones Web</Title>
            <Text style={{ fontSize: '16px', color: '#555' }}>
              Desarrollo de aplicaciones web completas que mejoran la experiencia del usuario y son fáciles de mantener.
            </Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            style={{
              textAlign: 'center',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <DesktopOutlined style={{ fontSize: '40px', color: '#f5222d', marginBottom: '10px' }} />
            <Title level={4}>Optimización de Rendimiento</Title>
            <Text style={{ fontSize: '16px', color: '#555' }}>
              Mejora de la velocidad y el rendimiento de tus aplicaciones para garantizar una experiencia fluida.
            </Text>
          </Card>
        </Col>
      </Row>

      <Space style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <Button
          type="primary"
          size="large"
          style={{
            borderRadius: '5px',
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: '500',
          }}
        >
          <Link to="/projects" style={{ color: '#fff' }}>
            Ver mis proyectos
          </Link>
        </Button>
      </Space>
    </Card>
  </div>
);

export default Home;
