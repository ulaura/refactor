import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import HotelCard from './HotelCard'
import hotels from './hotels';

const HotelPage = () => {
  return (
    <Container>
      <p className="pageHeader">Welcome To Your Dashboard!</p>
      <Row>
        {hotels.map(hotel => (
          <HotelCard 
            key={hotel.id}
            id={hotel.id}
            hotelName={hotel.name}
            hotelBrandId={hotel.brandId}
          />
        ))}
      </Row>
    </Container>
  )
}

export default HotelPage;