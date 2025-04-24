import React from "react";

const aboutStyles = {
  container: {
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "30px",
    color: "#333",
    marginBottom: "20px",
    borderBottom: "2px solid #ccc",
    paddingBottom: "10px",
  },
  section: {
    marginBottom: "20px",
  },
  subsection: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  paragraph: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#555",
  },
  decorativeSymbol: {
    fontSize: "24px",
    color: "#555",
    marginRight: "10px",
  },
};

const About = () => {
  return (
    <div style={aboutStyles.container}>
      <h1 style={aboutStyles.heading}>
        <span style={aboutStyles.decorativeSymbol}>✉️</span>Welcome to EmailSign
        - Your Email Sign-Up Solution
      </h1>
      <div style={aboutStyles.section}>
        <div style={aboutStyles.subsection}>
          <h2>Our Mission</h2>
          <p style={aboutStyles.paragraph}>
            At EmailSign, our mission is to provide a seamless and efficient
            solution for managing email sign-ups. We are dedicated to helping
            you build and maintain a strong subscriber base for your newsletters
            and updates.
          </p>
        </div>
        <div style={aboutStyles.subsection}>
          <h2>Easy Integration</h2>
          <p style={aboutStyles.paragraph}>
            We've designed our platform for easy integration. Whether you're a
            website owner, a blogger, or an online store, you can quickly add
            EmailSign's sign-up forms to your web pages and start collecting
            subscribers.
          </p>
        </div>
        <div style={aboutStyles.subsection}>
          <h2>Customization Options</h2>
          <p style={aboutStyles.paragraph}>
            Customize the look and feel of your email sign-up forms to match
            your brand. Choose colors, fonts, and layouts that resonate with
            your audience.
          </p>
        </div>
        <div style={aboutStyles.subsection}>
          <h2>Subscriber Management</h2>
          <p style={aboutStyles.paragraph}>
            Manage your subscribers efficiently with EmailSign. Keep track of
            new sign-ups and handle unsubscribes. We provide the tools you need
            to grow and engage your subscriber list.
          </p>
        </div>
        <div style={aboutStyles.subsection}>
          <h2>Join Us Today</h2>
          <p style={aboutStyles.paragraph}>
            We're excited to be part of your email marketing journey. Join us
            today and experience how EmailSign can streamline your email sign-up
            process and enhance communication with your subscribers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;