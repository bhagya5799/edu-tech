import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const courses = [
  { title: "DESIGN FUNDAMENTALS", image: "https://www.understood.org/_next/image?url=https%3A%2F%2Fcdn-images.understood.org%2Fp0qf7j048i0q%2F3pCq2k6pWQVtJ0npZkAT5q%2Fd25bb77e80058bc231d5465cfd48cc76%2FG1500127559.png&w=3840&q=75&dpl=dpl_7XXe2ZMuicf4Vs8KZrYExfH2ycNt" },
  { title: "BOOTCAMP VUE.JS FRAMEWORK", image: "https://st4.depositphotos.com/1000975/23884/i/450/depositphotos_238843622-stock-photo-young-female-student-in-front.jpg" },
  { title: "DESIGN FUNDAMENTALS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ZTlKcptYOMcPK8N4iu0WdSDVRPwKnV2Ktw&s" },
  { title: "BOOTCAMP VUE.JS FRAMEWORK", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC0WKwqdOKYGgEhyBEgqnQrdPik50pW7u2lA&s" },
  { title: "DESIGN FUNDAMENTALS", image: "https://pic.millionairematch.com/b/377a56af0ff5eea4145394628778c50d.jpg" },
  { title: "BOOTCAMP VUE.JS FRAMEWORK", image: "https://erepublic.brightspotcdn.com/dims4/default/3cb84c5/2147483647/strip/true/crop/4096x2136+0+0/resize/840x438!/quality/90/?url=http%3A%2F%2Ferepublic-brightspot.s3.us-west-2.amazonaws.com%2F2b%2F37%2Ff4e2a40449dbade591f580fd0c03%2Fhttps-download.shutterstock.com%2Fgatekeeper%2FW3siZCI6ICJzaHV0dGVyc3RvY2stbWVkaWEiLCAiayI6ICJwaG90by8xODE2MTcyODQ2L2h1Z2UuanBnIiwgImRjIjogImlkbF8xMjMiLCAiZSI6IDE2MzM3NTI5OTQsICJtIjogMX0sICJsQStHMTlqanNNYS93VVRpcjhNb21TNkhSRWciXQ%3D%3D%2Fshutterstock_1816172846.jpg" }
];

const mentorData = {
  id: 1,
  name: "Bhagya",
  image: "https://randomuser.me/api/portraits/men/45.jpg",
  description:
    "Passionate React Developer with expertise in building dynamic and interactive web applications. Skilled in React.js, JavaScript, TypeScript, Redux, and modern front-end technologies. Dedicated to creating seamless user experiences and optimized performance.",
  courseDuration: "12 hours",
  lessons: 40,
  buttons: ["1:1", "Code Review", "Career Guidance"],
};




const CourseSection = () => {
  return (
    <Container className="py-5">
      <Row>
        {/* Left: Course Cards */}
        <Col md={8}>
          <Row xs={1} md={2} className="g-4">
            {courses.map((course, index) => (
              <Col key={index}>
                <Card className="text-white">
                  <div style={{
                    backgroundImage: `url(${course.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "180px",
                    borderRadius: "10px",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      borderRadius: "10px"
                    }}></div>
                    <div style={{ position: "relative", textAlign: "center" }}>
                      <h5>{course.title}</h5>
                      <Button variant="warning" size="sm" className="mt-2">
                        Start journey today
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Right: Mentor Card */}
        <Col md={4}>
      <Card className="shadow-lg p-3" style={{ borderRadius: "10px", backgroundColor: "#ffcc00" }}>
        <Card.Body className="text-center">
          <img
            src={mentorData.image}
            alt={mentorData.name}
            className="rounded-circle"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
          <h4 className="mt-3">{mentorData.name}</h4>
          <p className="small text-dark">{mentorData.description}</p>

          {/* Dynamic Buttons */}
          <div className="d-flex justify-content-center gap-2 mb-3">
            {mentorData.buttons.map((btnText, index) => (
              <Button key={index} variant="light" size="sm">
                {btnText}
              </Button>
            ))}
          </div>

          <Button variant="dark" className="w-100 mb-3">
            Book a free call
          </Button>

          <div className="d-flex justify-content-between text-dark">
            <span>📌 Course Duration</span> <span>{mentorData.courseDuration}</span>
          </div>
          <div className="d-flex justify-content-between text-dark">
            <span>📘 Lessons</span> <span>{mentorData.lessons}</span>
          </div>
        </Card.Body>
      </Card>
    </Col>
      </Row>
    </Container>
  );
};

export default CourseSection;
