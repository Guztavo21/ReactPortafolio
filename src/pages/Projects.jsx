import React from 'react';
import { Card, Row, Col } from 'antd';

const projects = [
  { title: 'Proyecto 1', description: 'Descripción breve del proyecto 1.' },
  { title: 'Proyecto 2', description: 'Descripción breve del proyecto 2.' },
  { title: 'Proyecto 3', description: 'Descripción breve del proyecto 3.' },
];

const Projects = () => (
  <div style={{ padding: '20px' }}>
    <h2>Proyectos</h2>
    <Row gutter={[16, 16]}>
      {projects.map((project, index) => (
        <Col key={index} xs={24} sm={12} md={8}>
          <Card title={project.title} bordered>
            {project.description}
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default Projects;
