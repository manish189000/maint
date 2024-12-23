import React from "react";
import { FaHome, FaInfoCircle, FaArrowRight } from "react-icons/fa";

const Mainpage = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
  };

  const headerStyle = {
    fontSize: "2.5rem",
    color: "#333",
    margin: "20px 0",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    color: "#555",
    lineHeight: "1.6",
    maxWidth: "800px",
    margin: "10px 0",
  };

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>
        <FaHome /> Welcome to Our Website
      </h1>
      <p style={paragraphStyle}>
        <FaInfoCircle /> At our website, we are dedicated to bringing you the
        latest updates and resources to help you stay informed and inspired.
        Our mission is to provide a platform where you can explore topics that
        matter to you.
      </p>
      <p style={paragraphStyle}>
        <FaInfoCircle /> Whether you are looking for insightful articles,
        engaging stories, or practical tips, our team works tirelessly to
        ensure the content you find here is both valuable and enjoyable.
      </p>
      <p style={paragraphStyle}>
        <FaInfoCircle /> Thank you for visiting us today. Feel free to explore
        and discover all the wonderful things we have in store for you.
      </p>
      <button style={buttonStyle}>
        Learn More <FaArrowRight />
      </button>
    </div>
  );
};

export default Mainpage;
