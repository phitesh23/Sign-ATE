import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GeneratedSignature from "./GeneratedSignature";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    position: "",
    section: "",
    designation: "",
    phone: "",
    email: "",
    socialMedia: {
      facebook: "",
      linkedin: "",
      twitter: "",
      instagram: "",
    },
    extraContent: "",
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setGeneratedSignature(true);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">
        AITR Student Email Signature Generator
      </h2>

      <Form
        onSubmit={handleFormSubmit}
        className="bg-light rounded p-4 shadow"
        style={{ marginBottom: "50px" }}
      >
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
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
          <Form.Label>Position:</Form.Label>
          <Form.Select
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          >
            <option value="">Select Position</option>
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
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
                placeholder="Facebook profile URL"
                name="facebook"
                value={formData.socialMedia.facebook}
                onChange={handleSocialMediaChange}
              />
            </Col>
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
                placeholder="Twitter profile URL"
                name="twitter"
                value={formData.socialMedia.twitter}
                onChange={handleSocialMediaChange}
              />
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <Form.Control
                type="text"
                placeholder="Instagram profile URL"
                name="instagram"
                value={formData.socialMedia.instagram}
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
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-3">
          Generate Email Signature
        </Button>
      </Form>

      {generatedSignature && <GeneratedSignature formData={formData} />}
    </div>
  );
};

export default StudentForm;