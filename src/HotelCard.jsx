import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useState } from 'react'
  
const HotelCard = ({hotelName, hotelBrandId, id}) => {
  // puting the hotelColor state inside HotelCard
  // makes the color state change w/o re-rendering the entire app.

  // The keys here MUST match the id's in the array hotels (eg, hotels[0].id). See hotels.js
  const [hotelColor, setHotelColor] = useState({
    0: {
      color: '#0D6EFD'
    },
    1: {
      color: '#0D6EFD'
    },
    2: {
      color: '#0D6EFD'
    },
  });

  const changeHotelColorPrimary = (id) => {
    setHotelColor({
      ...hotelColor,
      [id]: {color: '#0D6EFD'},
    });
  }
  
  const changeHotelColorSecondary = (id) => {
    setHotelColor({
      ...hotelColor,
      [id]: {color: '#333333'},
    });
  }

  const options = {
    title: {
      text: `Brand ID: ${hotelBrandId}`
    },
    series: [{
      data: [1, 2, 3]
    }]
  }

  return (
    <React.Fragment>
      <Col sm={12} md={12} lg={4} className="hotelCardWrapper">
        <Card className="hotelCard">
          <Card.Header className="cardHeader">
            <Form className="form">
              <Form.Label className="formLabel">Change Title Color</Form.Label>
              <Form.Check
                inline
                defaultChecked
                label="Primary"
                name="group1"
                type="radio"
                id={`inline-radio-1`}
                onChange={() => changeHotelColorPrimary(id)}
              />
              <Form.Check
                inline
                label="Secondary"
                name="group1"
                type="radio"
                id={`inline-radio-2`}
                onChange={() => changeHotelColorSecondary(id)}
              />
            </Form>
            <h2 className={`hotelName`} style={{color: hotelColor[id].color}}>{hotelName}</h2>
          </Card.Header>
          <Card.Body>
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

export default HotelCard;