import React from 'react';
import { Form, Input, Button } from 'antd';

const Contact = () => {
  const handleSubmit = (values) => {
    console.log('Información enviada:', values);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Contacto</h2>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Nombre" name="name" rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Correo electrónico" name="email" rules={[{ required: true, message: 'Por favor ingresa tu correo' }]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Mensaje" name="message" rules={[{ required: true, message: 'Por favor escribe un mensaje' }]}>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
