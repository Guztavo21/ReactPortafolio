import { Typography, Button } from 'antd';

const Home = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <Typography.Title>¡Hola, soy Guztavo!</Typography.Title>
    <Typography.Text>Desarrollador Frontend apasionado por crear soluciones modernas.</Typography.Text>
    <br />
    <Button type="primary" size="large" style={{ marginTop: '20px' }}>
      Ver mis proyectos
    </Button>
  </div>
);

export default Home;