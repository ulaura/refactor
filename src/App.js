import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import HotelCard from './HotelCard'


function App() {

  // make sure the id's here matches the id's in useState for <HotelCard/>
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
