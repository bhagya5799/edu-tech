import React from "react";
import ReactFlow, { Background, Controls, MiniMap } from "react-flow-renderer";

// Custom Node Style
const nodeStyle = {
  background: "#000",
  color: "#fff",
  padding: "10px",
  borderRadius: "8px",
  fontSize: "16px", // Increased font size
  fontWeight: "bold", // Optional: Make text bold
  textAlign: "center",
  width: "250px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};


// Define Nodes (VERTICAL LAYOUT)
const nodes = [
  {
    id: "1",
    data: { label: "Front-end" },
    position: { x: 400, y: 0 },
    type: "input",
    style: { ...nodeStyle, background: "orange" },
  },
  {
    id: "2",
    data: { label: "Internet" },
    position: { x: 400, y: 100 },
    style: nodeStyle,
  },
  {
    id: "3",
    data: { label: "HTML" },
    position: { x: 400, y: 200 },
    style: nodeStyle,
  },
  {
    id: "4",
    data: { label: "CSS" },
    position: { x: 400, y: 300 },
    style: nodeStyle,
  },
  {
    id: "5",
    data: { label: "JavaScript" },
    position: { x: 400, y: 400 },
    style: nodeStyle,
  },

  // Internet Subtopics (Vertically Below)
  {
    id: "6",
    data: { label: "How does the internet work?" },
    position: { x: 150, y: 500 },
    style: nodeStyle,
  },
  {
    id: "7",
    data: { label: "What is HTTP?" },
    position: { x: 250, y: 600 },
    style: nodeStyle,
  },
  {
    id: "8",
    data: { label: "What is Domain Name?" },
    position: { x: 350, y: 700 },
    style: nodeStyle,
  },
  {
    id: "9",
    data: { label: "What is Hosting?" },
    position: { x: 450, y: 800 },
    style: nodeStyle,
  },

  // HTML Subtopics
  {
    id: "10",
    data: { label: "Learn the basics" },
    position: { x: 550, y: 500 },
    style: nodeStyle,
  },
  {
    id: "11",
    data: { label: "Writing Semantic HTML" },
    position: { x: 550, y: 600 },
    style: nodeStyle,
  },
  {
    id: "12",
    data: { label: "Forms & Validations" },
    position: { x: 550, y: 700 },
    style: nodeStyle,
  },
  {
    id: "13",
    data: { label: "Accessibility" },
    position: { x: 550, y: 800 },
    style: nodeStyle,
  },
  {
    id: "14",
    data: { label: "SEO Basics" },
    position: { x: 550, y: 900 },
    style: nodeStyle,
  },

  // Version Control Systems
  {
    id: "15",
    data: { label: "GitHub" },
    position: { x: 750, y: 500 },
    style: nodeStyle,
  },
  {
    id: "16",
    data: { label: "GitLab" },
    position: { x: 750, y: 600 },
    style: nodeStyle,
  },
  {
    id: "17",
    data: { label: "Bitbucket" },
    position: { x: 750, y: 700 },
    style: nodeStyle,
  },
];

// Define Edges (Connections)
const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true, style: { strokeWidth: 3, stroke: "#004392" } },
  { id: "e1-3", source: "1", target: "3", animated: true, style: { strokeWidth: 3, stroke: "#004392" } },
  { id: "e1-4", source: "1", target: "4", animated: true, style: { strokeWidth: 3, stroke: "#004392" } },
  { id: "e1-5", source: "1", target: "5", animated: true, style: { strokeWidth: 3, stroke: "#004392" } },

  { id: "e2-6", source: "2", target: "6", animated: true, style: { strokeWidth: 3, stroke: "#ff9800" } },
  { id: "e2-7", source: "2", target: "7", animated: true, style: { strokeWidth: 3, stroke: "#ff9800" } },
  { id: "e2-8", source: "2", target: "8", animated: true, style: { strokeWidth: 3, stroke: "#ff9800" } },
  { id: "e2-9", source: "2", target: "9", animated: true, style: { strokeWidth: 3, stroke: "#ff9800" } },

  { id: "e3-10", source: "3", target: "10", animated: true, style: { strokeWidth: 3, stroke: "#28a745" } },
  { id: "e3-11", source: "3", target: "11", animated: true, style: { strokeWidth: 3, stroke: "#28a745" } },
  { id: "e3-12", source: "3", target: "12", animated: true, style: { strokeWidth: 3, stroke: "#28a745" } },
  { id: "e3-13", source: "3", target: "13", animated: true, style: { strokeWidth: 3, stroke: "#28a745" } },
  { id: "e3-14", source: "3", target: "14", animated: true, style: { strokeWidth: 3, stroke: "#28a745" } },

  { id: "e5-15", source: "5", target: "15", animated: true, style: { strokeWidth: 3, stroke: "#d32f2f" } },
  { id: "e5-16", source: "5", target: "16", animated: true, style: { strokeWidth: 3, stroke: "#d32f2f" } },
  { id: "e5-17", source: "5", target: "17", animated: true, style: { strokeWidth: 3, stroke: "#d32f2f" } },
];


const CourseRoadmap = () => {
  return (
    <div
    
      style={{
        width: "100vw",
        height: "90vh",
        backgroundColor: "#f5f5f5",
        padding: "rem",
      }}
    >
      {/* <h1>Root map</h1> */}
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default CourseRoadmap;
