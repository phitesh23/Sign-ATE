import React, { useState } from "react";
import { Form, Button, Row, Col, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GeneratedSignature from "./GeneratedSignature";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    position: "",
    section: "",
    designation: "",
    workNumber: "",
    phone: "",
    email: "",
    socialMedia: {
      linkedin: "",
      portfolio: "",
    },
    extraContent: "",
    extraContentStyles: {
      bold: false,
      italic: false,
      underline: false,
    },
    imageLink: "",
  });

  const [generatedSignature, setGeneratedSignature] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      socialMedia: { ...prevData.socialMedia, [name]: value },
    }));
  };

  const handleStyleChange = (styles) => {
    setFormData((prevData) => ({
      ...prevData,
      extraContentStyles: {
        bold: styles.includes("bold"),
        italic: styles.includes("italic"),
        underline: styles.includes("underline"),
      },
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setGeneratedSignature(true);
  };

  const extraContentStyle = {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: formData.extraContentStyles.bold ? "bold" : "normal",
    fontStyle: formData.extraContentStyles.italic ? "italic" : "normal",
    textDecoration: formData.extraContentStyles.underline ? "underline" : "none",
  };

  return (
    <div className="container mt-5" style={{ fontFamily: "'Roboto', sans-serif" }}>
      <h2 className="mb-4 text-center">
        Acropolis Email Signature Generator
      </h2>

      <Form
        onSubmit={handleFormSubmit}
        className="bg-light rounded p-4 shadow"
        style={{ marginBottom: "50px", fontFamily: "'Roboto', sans-serif" }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ fontFamily: "'Roboto', sans-serif" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="department">
          <Form.Label>Department:</Form.Label>
          <Form.Select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <option value="">Select Department</option>
            <option value="AIML">AIML</option>
            <option value="CIVIL">CIVIL</option>
            <option value="CSE">CSE</option>
            <option value="CSE(Cyber security)">CSE(Cyber security)</option>
            <option value="CSIT">CSIT</option>
            <option value="DS">DS</option>
            <option value="ECE">ECE</option>
            <option value="IT">IT</option>
            <option value="Mechanical">Mechanical</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="position">
          <Form.Label>Role:</Form.Label>
          <Form.Select
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <option value="">Select Position</option>
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
            <option value="Staff Member">Staff Member</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="section">
          <Form.Label>Section:</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. CSIT-1 (ignore this field if faculty)"
            name="section"
            value={formData.section}
            onChange={handleChange}
            style={{ fontFamily: "'Roboto', sans-serif" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="designation">
          <Form.Label>Designation:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            style={{ fontFamily: "'Roboto', sans-serif" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="workNumber">
          <Form.Label>Work Number:</Form.Label>
          <Form.Control
            type="tel"
            placeholder="e.g. +91 7489###609"
            name="workNumber"
            value={formData.workNumber}
            onChange={handleChange}
            style={{ fontFamily: "'Roboto', sans-serif" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone:</Form.Label>
          <Form.Control
            type="tel"
            placeholder="e.g. +91 7489###608"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ fontFamily: "'Roboto', sans-serif" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="example@acropolis.in"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ fontFamily: "'Roboto', sans-serif" }}
          />
        </Form.Group>

        <Form.Group className="mb-3 d-none" controlId="imageLink">
          <Form.Control
            type="text"
            placeholder="Enter your custom image link"
            name="imageLink"
            value={formData.imageLink}
            onChange={handleChange}
            style={{ fontFamily: "'Roboto', sans-serif" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="socialMedia">
          <Form.Label>Social Media Links:</Form.Label>
          <Row>
            <Col xs={12} md={6} className="mb-3">
              <Form.Control
                type="text"
                placeholder="LinkedIn profile URL"
                name="linkedin"
                value={formData.socialMedia.linkedin}
                onChange={handleSocialMediaChange}
                style={{ fontFamily: "'Roboto', sans-serif" }}
              />
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <Form.Control
                type="text"
                placeholder="Personal Website/Portfolio URL"
                name="portfolio"
                value={formData.socialMedia.portfolio}
                onChange={handleSocialMediaChange}
                style={{ fontFamily: "'Roboto', sans-serif" }}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="extraContent">
          <Form.Label>Extra Content:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter extra content (e.g. Quotations, a message or anything else)"
            name="extraContent"
            value={formData.extraContent}
            onChange={handleChange}
            style={extraContentStyle}
          />
          <div className="mt-2">
            <ToggleButtonGroup
              type="checkbox"
              value={Object.keys(formData.extraContentStyles).filter(
                (key) => formData.extraContentStyles[key]
              )}
              onChange={handleStyleChange}
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              <ToggleButton id="tbg-btn-1" value="bold">
                Bold
              </ToggleButton>
              <ToggleButton id="tbg-btn-2" value="italic">
                Italic
              </ToggleButton>
              <ToggleButton id="tbg-btn-3" value="underline">
                Underline
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Form.Group>

        <Button 
          variant="primary" 
          type="submit" 
          className="mb-3"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Generate Email Signature
        </Button>
      </Form>

      {generatedSignature && <GeneratedSignature formData={formData} />}
    </div>
  );
};

export default StudentForm;
