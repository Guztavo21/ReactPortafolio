import React from 'react';
import { Form, Input, Button, Card, Typography, Row, Col } from 'antd';
import { MailOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';

const Contact = () => {
  const handleSubmit = (values) => {
    console.log('Información enviada:', values);
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Card
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '30px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
        }}
      >
        <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>
          Contáctame
        </Typography.Title>
        <Typography.Paragraph style={{ textAlign: 'center', marginBottom: '40px', fontSize: '16px' }}>
          ¿Tienes alguna consulta o proyecto en mente? ¡No dudes en escribirme!
        </Typography.Paragraph>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item
                label="Nombre"
                name="name"
                rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Tu nombre" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Correo electrónico"
                name="email"
                rules={[
                  { required: true, message: 'Por favor ingresa tu correo' },
                  { type: 'email', message: 'Por favor ingresa un correo válido' },
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder="tu correo@ejemplo.com" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Mensaje"
                name="message"
                rules={[{ required: true, message: 'Por favor escribe un mensaje' }]}
              >
                <Input.TextArea
                  prefix={<MessageOutlined />}
                  rows={4}
                  placeholder="Escribe tu mensaje aquí"
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Enviar Mensaje
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Contact;
