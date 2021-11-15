import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useState } from 'react'
  
const HotelCard = ({hotelName, hotelBrandId, id}) => {
  // puting the hotelColor state inside HotelCard
  // makes the color state change w/o re-rendering the entire app.

  // The keys here MUST match the id's in the array hotels.
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
      text: `Brand ID: ${hotelBrandId}`
    },
    series: [{
      data: [1, 2, 3]
    }]
  }



  return (
    <React.Fragment>
      <Col sm={12} md={6} lg={4}>
        <Card className="hotelCard">
          <Card.Header>
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
            <h2 className={hotelColor[id].color}>{hotelName}</h2>
          </Card.Header>
          <Card.Body >
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