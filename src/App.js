import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Row from 'react-bootstrap/Row'
// import hotels from './hotels';

function App() {

  // make sure the id's here matches the id in useState for <HotelCard/>
  const hotels = [
    {
      id: 0,
      brandId: '12345',
      name: 'Boardwalk Hotel',
    },
    {
      id: 1,
      brandId: '8675309',
      name: 'The Jenny Hotel & Suites',
    },
    {
      id: 2,
      brandId: 'ABC123',
      name: 'Alpha Numeric Inn',
    }
  ]


  const HotelCard = ({hotelName, key, id}) => {
    // puting the hotelColor state inside HotelCard
    // makes the color state change w/o re-rendering the entire app.
    const [hotelColor, setHotelColor] = useState({
      0: {
        color: 'text-primary'
      },
      1: {
        color: 'text-primary'
      },
      2: {
        color: 'text-primary'
      },
    });
  
  
    const changeHotelColorPrimary = (id) => {
      setHotelColor({
        ...hotelColor,
        [id]: {color: 'text-primary'},
      });
    }
  
    
    const changeHotelColorSecondary = (id) => {
      setHotelColor({
        ...hotelColor,
        [id]: {color: 'text-secondary'},
      });
    }
  
  
    const options = {
      title: {
        text: 'My chart'
      },
      series: [{
        data: [1, 2, 3]
      }]
    }
  
  
  
    return (
      <React.Fragment key={key}>
        <Col>
          <Card>
            <Card.Header>
              {hotelName} 
              <Button size='sm' variant='primary' onClick={() => changeHotelColorPrimary(id)}>Primary Color</Button>
              <Button size='sm' variant='secondary' onClick={() => changeHotelColorSecondary(id)}>Secondary Color</Button>
            </Card.Header>
            <Card.Body className={hotelColor[id].color}>
              <Card.Title>Welcome to the lovely {hotelName}!</Card.Title>
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </Card.Body>
          </Card>
        </Col>
      </React.Fragment>
    );
  }

  return (
    <Container>
      <Card>
        <Card.Header>Welcome To Your Dashboard</Card.Header>
        <Row>
          {hotels.map(hotel => (
            <HotelCard 
              key={hotel.id}
              id={hotel.id}
              hotelName={hotel.name}
            />
         ))}
        </Row>
      </Card>
    </Container>
  );
}

export default App;
