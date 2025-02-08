import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'

const CourseSection = () => {
  const navigate =useNavigate()

  const clickexploreBtn =()=>{
    navigate('/CourseDetails')
  }
  return (
    <section
      style={{
        background: "linear-gradient(to right, #ffcc00, #ffffff)",
        padding: "50px 0",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Side with Text */}
          <Col xs={12} md={6} className="text-center text-md-start px-4">
            <h2 className="fw-bold" style={{ fontSize: "2rem" }}>
              Choose Your Journey
            </h2>
            <p style={{ margin: "10px 0" }}>
            Embark on an exciting path to growth and success.<br/>
Discover new opportunities, learn valuable skills, and unlock your full potential.
            </p>
            <Button
              variant="light"
              className="fw-bold mt-2"
              style={{
                width: "180px",
                color: "black",
                // border: "1px solid black",
                padding: "10px",
              }}
              onClick={clickexploreBtn}
            >
              Explore Courses
            </Button>
          </Col>

          {/* Right Side with Image */}
          <Col xs={12} md={6} className="d-flex justify-content-center mt-4 mt-md-0">
            <img
              src="https://img.freepik.com/free-photo/businesspeople-having-good-time-meeting_1098-1786.jpg"
              alt="Business Meeting"
              className="img-fluid rounded"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CourseSection;
