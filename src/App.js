import React from 'react';
import './App.css';
import { Button, Row, Col, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


function App() {
  return (
    <div className="App">
      <div className={'ant-card ant-card ant-card-bordered ant-card-wider-padding'}>
        <Row gutter={0}>
          <Col xs={24}>
            <Row gutter={0} type={'flex'}>
              <Col xs={6}>
                <Card title="Backlogs" className="task-title">
                  <Button icon={<PlusOutlined />} type="primary">Add Task</Button>
                </Card>
              </Col>
              <Col xs={6}>
                <Card title="Development" className="task-title">
                  <Button icon={<PlusOutlined />} type="primary">Add Task</Button>
                </Card>
              </Col>
              <Col xs={6}>
                <Card title="Code Review" className="task-title">
                  <Button icon={<PlusOutlined />} type="primary">Add Task</Button>
                </Card>
              </Col>
              <Col xs={6}>
                <Card title="Acceptance" className="task-title">
                  <Button icon={<PlusOutlined />} type="primary">Add Task</Button>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
