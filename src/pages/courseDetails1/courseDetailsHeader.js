import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaClock, FaStar, FaStarHalfAlt } from "react-icons/fa";
import {courseData} from "./courseDatajson"; // Import JSON data

const CourseSection = () => {
  return (
    <section className="bg-warning text-dark py-5">
      <div className="container h-100 d-flex align-items-center">
        <div className="row g-4">
          {courseData.map((course) => (
            <div className="col-lg-8 col-md-10" key={course.id}>
              <h2 className="fw-bold mb-3">{course.title}</h2>
              <p className="text-muted mb-4">{course.description}</p>

              <div className="d-flex align-items-center gap-2">
                <span className="fw-bold">{course.rating}</span>
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStarHalfAlt className="text-warning" />
              </div>

              <div className="d-flex align-items-center gap-2 mt-3">
                <FaClock />
                <span>{course.duration}</span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
