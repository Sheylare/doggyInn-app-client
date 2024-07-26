import React from "react";
import dog1 from "../assets/mufasa2.jpg";
import dog2 from "../assets/milka.jpg";
import dog3 from "../assets/gorda.jpg";
import { Col, Container, Image, Row } from "react-bootstrap";

function About() {
  return (
    <div className="about-us">
      <h2>
        <b> About Doggy Inn</b>
      </h2>
      <br />
      <p>
        Doggy Inn is the ideal app for finding reliable and loving dog sitters.
        Designed with the needs of both pet owners and dog sitters in mind, our
        platform makes caring for your dog easy and safe.
      </p>
      <p>
        Created with passion and dedication, Doggy Inn is the result of the
        efforts of three talented junior developers:{" "}
        <b>Mufasa, Milka and Gorda</b>. Together, they have built a tool that
        connects dog owners with verified and passionate caregivers, ensuring
        that your furry friend receives the best possible care while you're
        away.
      </p>
      <br />
      <Container className="img-perritos">
        <Row>
          <Col xs={6} md={4}>
            <Image src={dog1} roundedCircle height="130px" />
            <p>MUFASA</p>
          </Col>
          <Col xs={6} md={4}>
            <Image src={dog2} roundedCircle width="100px" />
            <p>MILKA</p>
          </Col>
          <Col xs={6} md={4}>
            <Image src={dog3} roundedCircle width="100px" />
            <p>GORDA</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
