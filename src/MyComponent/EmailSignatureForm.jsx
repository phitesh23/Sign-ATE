import React, { useState } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GeneratedSignature from "./GeneratedSignature";

const EmailSignatureForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    department: "",
    position: "",
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

  const [generatedSignature, setGeneratedSignature] = useState(false);

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
    fontFamily: "Roboto, sans-serif",
    fontWeight: formData.extraContentStyles.bold ? "bold" : "normal",
    fontStyle: formData.extraContentStyles.italic ? "italic" : "normal",
    textDecoration: formData.extraContentStyles.underline
      ? "underline"
      : "none",
    border: "2px solid green",
    backgroundColor: "#eaffea",
    minHeight: "100px",
    padding: "10px",
  };

  return (
    <div className="container mt-5" style={{ fontFamily: "'Roboto', sans-serif" }}>
      <h2 className="mb-4 text-center" style={{ fontWeight: "bold" }}>
        Acropolis Email Signature Generator
      </h2>

      <Form
        onSubmit={handleFormSubmit}
        className="bg-light rounded p-4 shadow"
        style={{ marginBottom: "50px" }}
      >

        {/* Name */}
        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Institution */}
        <Form.Group className="mb-3">
          <Form.Label>Institution:</Form.Label>
          <Form.Select
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            required
          >
            <option value="">Select Institution</option>
            <option value="Acropolis Group of Institutions">Acropolis Group of Institutions</option>
            <option value="Acropolis Institute of Technology & Research">Acropolis Institute of Technology & Research</option>
            <option value="Acropolis Institute of Pharmaceutical, Education and Research">Acropolis Institute of Pharmaceutical, Education and Research</option>
            <option value="Acropolis Institute of Management, Studies and Research">Acropolis Institute of Management, Studies and Research</option>
            <option value="Acropolis Institute of Law">Acropolis Institute of Law</option>
            <option value="Acropolis Faculty of Management and Research">Acropolis Faculty of Management and Research</option>
          </Form.Select>
        </Form.Group>

        {/* Department */}
        <Form.Group className="mb-3">
          <Form.Label>Department:</Form.Label>
          <Form.Select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
          <optgroup label="Acropolis Institute of Technology & Research">
      <option value="Computer Science & Engineering (CSE)">
        Computer Science & Engineering (CSE)
      </option>
      <option value="Information Technology (IT)">
        Information Technology (IT)
      </option>
      <option value="Computer Science & Information Technology (CS&IT)">
        Computer Science & Information Technology (CS&IT)
      </option>
      <option value="CSE Artificial Intelligence & Machine Learning (AI&ML)">
        CSE Artificial Intelligence & Machine Learning (AI&ML)
      </option>
      <option value="CSE Data Science (DS)">
        CSE Data Science (DS)
      </option>
      <option value="CSE Cyber Security">
        CSE Cyber Security
      </option>
      <option value="CSE Indian Language">
        CSE Indian Language
      </option>
      <option value="Electronics & Communication (EC)">
        Electronics & Communication (EC)
      </option>
      <option value="Electronics & Communication (VLSI Design & Technology)">
        Electronics & Communication (VLSI Design & Technology)
      </option>
      <option value="Electronics & Communication (Advanced Communications)">
        Electronics & Communication (Advanced Communications)
      </option>
      <option value="Civil Engineering">
        Civil Engineering
      </option>
      <option value="Mechanical Engineering">
        Mechanical Engineering
      </option>
      <option value="Faculty of Computer Application (FCA)">
        Faculty of Computer Application (FCA)
      </option>
    </optgroup>

    <optgroup label="Acropolis Faculty of Management & Research">
      <option value="MBA">MBA</option>
    </optgroup>

    <optgroup label="Acropolis Institute of Pharmaceutical Education & Research">
      <option value="D. PHARM">D. PHARM</option>
      <option value="B. PHARM">B. PHARM</option>
      <option value="M. PHARM">M. PHARM</option>
      <option value="Acropolis Food Testing Lab">
        Acropolis Food Testing Lab
      </option>
    </optgroup>

    <optgroup label="Acropolis Institute of Management Studies & Research">
      <option value="BBA">BBA</option>
      <option value="B.COM">B.COM</option>
      <option value="B.SC">B.SC</option>
      <option value="M.SC">M.SC</option>
      <option value="B.A.">B.A.</option>
      <option value="M.COM">M.COM</option>
      <option value="MA">MA</option>
    </optgroup>

    <optgroup label="Acropolis Institute of Law">
      <option value="B.A. LLB">B.A. LLB</option>
      <option value="BBA LLB">BBA LLB</option>
      <option value="LLB">LLB</option>
    </optgroup>

    <optgroup label="AcroCare">
      <option value="AcroCare">AcroCare</option>
    </optgroup>
  </Form.Select>
</Form.Group>

        {/* Role */}
        <Form.Group className="mb-3">
          <Form.Label>Role:</Form.Label>
          <Form.Control
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Designation */}
        <Form.Group className="mb-3">
          <Form.Label>Designation:</Form.Label>
          <Form.Select
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          >
            <option value="">Select designation</option>
            <option value="Dr.">Dr.</option>
            <option value="Prof.">Prof.</option>
            <option value="HOD">HOD</option>
          </Form.Select>
        </Form.Group>

        {/* Contact */}
        <Form.Group className="mb-3" controlId="workNumber">
          <Form.Label>Work Number:</Form.Label>
          <Form.Control
            type="tel"
            placeholder="e.g. 123..."
            name="workNumber"
            value={formData.workNumber}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone:</Form.Label>
          <Form.Control
            type="tel"
            placeholder="e.g. +91 1234567890"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Social */}
        <Form.Group className="mb-3">
          <Form.Label>Social Media:</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="LinkedIn"
                name="linkedin"
                value={formData.socialMedia.linkedin}
                onChange={handleSocialMediaChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Portfolio"
                name="portfolio"
                value={formData.socialMedia.portfolio}
                onChange={handleSocialMediaChange}
              />
            </Col>
          </Row>
        </Form.Group>

        {/* Extra Content */}
       <Form.Group className="mb-3" controlId="extraContent">
<Form.Label>Additional Information:</Form.Label>
<Form.Control
  as="textarea"
  rows={4}
  placeholder="Additional Information here (e.g. Quotations, a message or anything else)"
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
            >
              <ToggleButton id="tbg-btn-1" value="bold">Bold</ToggleButton>
              <ToggleButton id="tbg-btn-2" value="italic">Italic</ToggleButton>
              <ToggleButton id="tbg-btn-3" value="underline">Underline</ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-3">
          Generate Email Signature
        </Button>
      </Form>

      {generatedSignature && <GeneratedSignature formData={formData} />}
    </div>
  );
};

export default EmailSignatureForm;
