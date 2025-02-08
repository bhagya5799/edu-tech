import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaCheckCircle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";
import {courseDetails} from "./courseDatajson"; // Import JSON data
import { useNavigate } from "react-router-dom";

const CourseOverview = () => {
    const navigate =useNavigate()
    const onCLickCurriculm =()=>{
        navigate('/curriculum')
    }
  return (
    <section className="container py-5">
      <div className="row">
        {/* Left Content Section */}
        <div className="col-lg-8">
          {/* Tabs */}
          <div className="d-flex border-bottom pb-2">
            <span className="fw-bold text-warning me-3" >OVERVIEW</span>
            <span className="fw-bold text-dark" style={{ cursor: "pointer" }} onClick={onCLickCurriculm}>CURRICULUM</span>
          </div>

          {/* Overview Section */}
          <h3 className="fw-bold mt-4">Overview</h3>
          {courseDetails.description.map((desc, index) => (
            <p key={index} className="text-muted">{desc}</p>
          ))}

          {/* Learning Outcomes */}
          <h4 className="fw-bold mt-4">What You’ll Learn From This Course</h4>
          <div className="row">
            {courseDetails.learningOutcomes.map((outcome, index) => (
              <div className="col-md-6" key={index}>
                <p><FaCheckCircle className="text-warning me-2" /> {outcome}</p>
              </div>
            ))}
          </div>

          {/* Certification Section */}
          <h4 className="fw-bold mt-4">Certification</h4>
          <p className="text-muted">{courseDetails.certificationInfo}</p>

          {/* Social Media Icons */}
          <h5 className="fw-bold mt-4">Share On:</h5>
          <div className="d-flex gap-3">
            <FaFacebook className="fs-4 text-dark" />
            <FaTwitter className="fs-4 text-dark" />
            <FaInstagram className="fs-4 text-dark" />
            <FaLinkedin className="fs-4 text-dark" />
            <FaYoutube className="fs-4 text-dark" />
          </div>
        </div>

        {/* Right Course Card Section */}
        <div className="col-lg-4">
          <div className="card shadow p-3">
            <img src={courseDetails.image} alt="Course" className="card-img-top rounded" />
            <div className="card-body">
              <h4 className="fw-bold">{courseDetails.title}</h4>
              <p><strong>Price:</strong> <span className="text-warning fw-bold">{courseDetails.price}</span></p>
              <p><strong>Instructor:</strong> {courseDetails.instructor}</p>
              <p><strong>Duration:</strong> {courseDetails.duration}</p>
              <p><strong>Language:</strong> {courseDetails.language}</p>
              <p><strong>Certifications:</strong> {courseDetails.certification}</p>
              <button className="btn btn-warning w-100 fw-bold rounded-pill">GET STARTED</button>
              <button className="btn btn-dark w-100 mt-2 rounded-pill">BUY NOW</button>
              <p className="text-center text-muted mt-2"><em>start learning!</em></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
