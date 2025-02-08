import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle } from "react-icons/fa";

const FrontendRoadmap = () => {
  return (
    <section className="container py-5">
      <div className="row">
        {/* Left Box - Beginner Friendly */}
        <div className="col-md-5">
          <div className="border p-4 rounded shadow">
            <p className="mb-3">
              This is the beginner-friendly version of the Frontend roadmap.
              Make sure to:
            </p>
            <button className="btn btn-dark w-100">Visit the Detailed Version</button>
          </div>
        </div>

        {/* Center - Roadmap */}
        <div className="col-md-2 text-center">
          <h3 className="fw-bold">Front-end</h3>
          <div className="d-flex flex-column align-items-center mt-3">
            <div className="roadmap-box">HTML</div>
            <div className="roadmap-box">CSS</div>
            <div className="roadmap-box">JavaScript</div>
            <div className="roadmap-box">React</div>
          </div>
        </div>

        {/* Right Box - Detailed Version */}
        <div className="col-md-5">
          <div className="border p-4 rounded shadow">
            <p className="mb-3">
              Find the detailed version of this roadmap along with other similar
              roadmaps:
            </p>
            <button className="btn btn-primary w-100">roadmap.sh</button>
          </div>
        </div>
      </div>

      {/* Important Tip Section */}
      <div className="text-center mt-5">
        <h4 className="fw-bold">Important Tip</h4>
        <p className="text-muted">
          Make sure to build as many projects as possible for each node of the
          roadmap.
        </p>
      </div>

      {/* Learning Outcomes */}
      <div className="row mt-4">
        <div className="col-md-6">
          <p>
            <FaCheckCircle className="text-warning me-2" /> You should be able
            to find an intern or Junior Frontend Developer job after learning
            these three.
          </p>
        </div>
        <div className="col-md-6">
          <p>
            <FaCheckCircle className="text-warning me-2" /> Start applying for
            jobs and keep learning.
          </p>
        </div>
      </div>
    </section>
  );
};
// export default  FrontendRoadmap;
// // Custom styles for the roadmap boxes
const styles = `
  .roadmap-box {
    background-color: yellow;
    padding: 10px 20px;
    margin: 10px 0;
    border-radius: 8px;
    font-weight: bold;
    border: 2px solid black;
    display: inline-block;
  }
`;

//Inject styles into the document
const RoadmapStyles = () => <style>{styles}</style>;

export default function App() {
  return (
    <>
      <RoadmapStyles />
      <FrontendRoadmap />
    </>
  );
}
