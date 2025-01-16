import React from 'react';
import { Typography, Card, Row, Col, Divider } from 'antd';
import { UserOutlined, CodeOutlined, RocketOutlined } from '@ant-design/icons';

const About = () => (
  <div style={{ padding: '40px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
    <Card
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
      }}
    >
      <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>
        Sobre mí
      </Typography.Title>
      <Typography.Paragraph style={{ fontSize: '16px', lineHeight: '1.8', textAlign: 'center' }}>
        ¡Hola! Soy un <strong>analista programador</strong> apasionado por crear soluciones modernas y efectivas.
        Con experiencia en <strong>React</strong>, <strong>JavaScript</strong> y herramientas de última generación,
        estoy comprometido con el desarrollo de proyectos que generen impacto.
      </Typography.Paragraph>

      <Divider />

      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8}>
          <Card
            style={{
              textAlign: 'center',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <UserOutlined style={{ fontSize: '40px', color: '#1890ff', marginBottom: '10px' }} />
            <Typography.Title level={4}>¿Quién soy?</Typography.Title>
            <Typography.Paragraph>
              Un apasionado de la tecnología, enfocado en aprender y mejorar constantemente.
            </Typography.Paragraph>
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
            <CodeOutlined style={{ fontSize: '40px', color: '#52c41a', marginBottom: '10px' }} />
            <Typography.Title level={4}>Habilidades</Typography.Title>
            <Typography.Paragraph>
              Desarrollo frontend con React, diseño de interfaces modernas y optimización de rendimiento.
            </Typography.Paragraph>
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
            <RocketOutlined style={{ fontSize: '40px', color: '#f5222d', marginBottom: '10px' }} />
            <Typography.Title level={4}>Proyectos</Typography.Title>
            <Typography.Paragraph>
              Desarrollo de aplicaciones innovadoras para resolver problemas reales en múltiples industrias.
            </Typography.Paragraph>
          </Card>
        </Col>
      </Row>
    </Card>
  </div>
);

export default About;
