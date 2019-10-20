import React, { useState } from 'react';
import logo from './logo.png';
import light_on from './light-on.png';
import light_off from './light-off.png';
import fan_on from './fan-on.png';
import fan_off from './fan-off.png';
import './App.css';
import { Navbar, Container, Row, Col, Image } from 'react-bootstrap';

function App() {
  const [lightStatusOn, setLightStatusOn] = useState(false);
  const [fanStatusOn, setFanStatusOn] = useState(false);

  const toogleLight = () => {
    setLightStatusOn(!lightStatusOn);
  };
  const toogleFan = () => {
    setFanStatusOn(!fanStatusOn);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            style={{marginRight: 10}}
            className="d-inline-block align-top"
          />
          {' Automação Residencial'}
        </Navbar.Brand>
      </Navbar>
      <Container fluid>
        <Row>
          <Col xs={12} style={{ textAlign: 'center', marginTop: 50 }}>
            <Image src={lightStatusOn ? light_on : light_off} style={{ width: 150, height: 190 }} onClick={toogleLight} />
          </Col>
          <Col xs={12} style={{ textAlign: 'center', marginTop: 50 }}>
            <Image src={fanStatusOn ? fan_on : fan_off} style={{ width: 150, height: 150 }} onClick={toogleFan} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
