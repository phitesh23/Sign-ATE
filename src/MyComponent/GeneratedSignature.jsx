import React from "react";

const GeneratedSignature = ({ formData }) => {
  if (!formData) return null;

  const {
    name = "",
    institution = "",
    department = "",
    workNumber = "",
    phone = "",
    email = "",
    socialMedia = {},
    extraContent = "",
    position = "",
    designation = "",
    extraContentStyles = {},
  } = formData;

  // Safe social media destructure
  const { linkedin = "", portfolio = "" } = socialMedia;

  // designation mapping
  let fullDesignation = "";
  if (designation === "Dr.") fullDesignation = "Doctor";
  else if (designation === "Prof.") fullDesignation = "Professor";
  else if (designation === "HOD") fullDesignation = "Head Of Department";
  else fullDesignation = designation;

  const extraStyle = {
    fontWeight: extraContentStyles.bold ? "bold" : "normal",
    fontStyle: extraContentStyles.italic ? "italic" : "normal",
    textDecoration: extraContentStyles.underline ? "underline" : "none",
  };

  return (
    <div style={{ fontFamily: "Arial", width: "400px", margin: "20px auto" }}>
      <p><b>______________________</b></p>

      <h3 style={{ color: "#343579" }}>{name}</h3>

      {position && <p>{position}</p>}
      {fullDesignation && <p>{fullDesignation}</p>}
      {institution && <p>{institution}</p>}
      {department && <p>{department}</p>}

      <p><b>______________________</b></p>

      {workNumber && <p><b>W-</b> {workNumber}</p>}
      {phone && <p><b>P-</b> {phone}</p>}
      {email && <p><b>M-</b> {email}</p>}

      <img
        src="https://aimsr.ac.in/wp-content/uploads/2023/03/AITR-logo.jpg"
        width="250"
        alt="logo"
      />

      <p>
        <a href="https://aitr.ac.in/">Visit Us</a>
      </p>

      {linkedin && (
        <a href={linkedin}>
          <img
            src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-512.png"
            width="20"
            alt=""
          />
        </a>
      )}

      {portfolio && (
        <a href={portfolio}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
            width="20"
            alt=""
          />
        </a>
      )}

      {extraContent && (
        <div style={extraStyle}>
          {extraContent}
        </div>
      )}
    </div>
  );
};

export default GeneratedSignature;
