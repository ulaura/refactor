import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Row from 'react-bootstrap/Row'
import hotels from './hotels';

function App() {
  const [hotel1Color, setHotel1Color] = useState('text-primary');
  const [hotel2Color, setHotel2Color] = useState('text-primary');
  const [hotel3Color, setHotel3Color] = useState('text-primary');

  const options = {
    title: {
      text: 'My chart'
    },
    series: [{
      data: [1, 2, 3]
    }]
  }

  return (
    <Container>
      <Card>
        <Card.Header>Welcome To Your Dashboard</Card.Header>
        <Row>
          <Col>
            <Card>
              <Card.Header>{hotels[0].name} 
                <Button size='sm' variant='primary' onClick={() => setHotel1Color('text-primary')}>Primary Color</Button>
                <Button size='sm' variant='secondary' onClick={() => setHotel1Color('text-secondary')}>Secondary Color</Button>
              </Card.Header>
              <Card.Body className={hotel1Color}>
                <Card.Title>Welcome to the lovely {hotels[0].name}!</Card.Title>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>{hotels[1].name}
                <Button size='sm' variant='primary' onClick={() => setHotel2Color('text-primary')}>Primary Color</Button>
                <Button size='sm' variant='secondary' onClick={() => setHotel2Color('text-secondary')}>Secondary Color</Button>
              </Card.Header>
              <Card.Body className={hotel2Color}>
              <Card.Title>Welcome to the lovely {hotels[1].name}!</Card.Title>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>{hotels[2].name}
                <Button size='sm' variant='primary' onClick={() => setHotel3Color('text-primary')}>Primary Color</Button>
                <Button size='sm' variant='secondary' onClick={() => setHotel3Color('text-secondary')}>Secondary Color</Button>
              </Card.Header>
              <Card.Body className={hotel3Color}>
              <Card.Title>Welcome to the lovely {hotels[2].name}!</Card.Title>
                <HighchartsReact 
                  highcharts={Highcharts}
                  options={options}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default App;
