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
    textDecoration: formData.extraContentStyles.underline
      ? "underline"
      : "none",
  };

  return (
    <div className="container mt-5" style={{ fontFamily: "'Roboto', sans-serif" }}>
      <h2 className="mb-4 text-center" style={{ fontWeight: "bold" }}>
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
            style={{ fontWeight: "bold" }}
          />
        </Form.Group>

<Form.Group className="mb-3" controlId="department">
  <Form.Label>Department:</Form.Label>
  <Form.Select
    name="department"
    value={formData.department}
    onChange={handleChange}
    required
  >
    <option value="">Select Department</option>
    <optgroup label="AITR">
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
      <option value="CSE Data Science (DS)">CSE Data Science (DS)</option>
      <option value="CSE Cyber Security">CSE Cyber Security</option>
      <option value="CSE Indian Language">CSE Indian Language</option>
      <option value="Electronics & Communication (EC)">
        Electronics & Communication (EC)
      </option>
      <option value="Electronics & Communication (VLSI Design & Technology)">
        Electronics & Communication (VLSI Design & Technology)
      </option>
      <option value="Electronics & Communication (Advanced Communications)">
        Electronics & Communication (Advanced Communications)
      </option>
      <option value="Civil Engineering">Civil Engineering</option>
      <option value="Mechanical Engineering">Mechanical Engineering</option>
      <option value="Faculty of Computer Application (FCA)">
        Faculty of Computer Application (FCA)
      </option>
    </optgroup>
    <optgroup label="AFMR">
      <option value="MBA">MBA</option>
    </optgroup>
    <optgroup label="AIPER">
      <option value="D. PHARM">D. PHARM</option>
      <option value="B. PHARM">B. PHARM</option>
      <option value="M. PHARM">M. PHARM</option>
    </optgroup>
    <optgroup label="AIMSR">
      <option value="BBA">BBA</option>
      <option value="B.COM">B.COM</option>
      <option value="B.SC">B.SC</option>
      <option value="M.SC">M.SC</option>
      <option value="B.A.">B.A.</option>
      <option value="M.COM">M.COM</option>
      <option value="MA">MA</option>
    </optgroup>
    <optgroup label="AIL">
      <option value="B.A. LLB">B.A. LLB</option>
      <option value="BBA LLB">BBA LLB</option>
      <option value="LLB">LLB</option>
    </optgroup>
  </Form.Select>
</Form.Group>

        <Form.Group className="mb-3" controlId="position">
          <Form.Label>Role:</Form.Label>
          <Form.Select
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
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
            style={extraContentStyle}
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
          />
        </Form.Group>

        <Form.Group className="mb-3 d-none" controlId="imageLink">
          <Form.Control
            type="text"
            placeholder="Enter your custom image link"
            name="imageLink"
            value={formData.imageLink}
            onChange={handleChange}
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
              />
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <Form.Control
                type="text"
                placeholder="Personal Website/Portfolio URL"
                name="portfolio"
                value={formData.socialMedia.portfolio}
                onChange={handleSocialMediaChange}
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

        <Button variant="primary" type="submit" className="mb-3">
          Generate Email Signature
        </Button>
      </Form>

      {generatedSignature && <GeneratedSignature formData={formData} />}
    </div>
  );
};

export default EmailSignatureForm;
