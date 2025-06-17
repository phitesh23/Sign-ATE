import React from "react";

const GeneratedSignature = ({ formData }) => {
  const {
    name,
    department,
    section,
    workNumber,
    phone,
    email,
    socialMedia,
    extraContent,
    position,
    designation,
    extraContentStyles
  } = formData;

  const copyHtmlToClipboard = (html) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    document.body.appendChild(tempElement);
    const range = document.createRange();
    range.selectNode(tempElement);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    document.body.removeChild(tempElement);
  };

  const extraContentStyle = {
    fontWeight: extraContentStyles.bold ? "bold" : "normal",
    fontStyle: extraContentStyles.italic ? "italic" : "normal",
    textDecoration: extraContentStyles.underline ? "underline" : "none",
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        width: "400px",
        margin: "50px auto",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Horizontal Line before Name */}
      <div style={{ marginBottom: "8px" }}>
        <p style={{ marginBottom: "3px", fontWeight: "bold" }}>______________________</p>
        <h3 style={{ marginBottom: "3px", fontWeight: "bold" }}>{name}</h3>
        {position === "Student" && (
          <p style={{ marginBottom: "2px" }}>{position}</p>
        )}
        {designation && (
          <p style={{ marginBottom: "3px" }}>{designation}</p>
        )}
         {department && (
          <p style={{ marginBottom: "2px" }}>{department}</p>
        )}
        {position === "Student" && section && (
          <p style={{ marginBottom: "0" }}>Section: {section}</p>
        )}
      </div>

      {/* Horizontal Line before Work Number */}
      <div style={{ marginBottom: "8px" }}>
        <p style={{ marginBottom: "3px", fontWeight: "bold" }}>______________________</p>
        {workNumber && (
          <p
            style={{ marginBottom: "0", display: "flex", alignItems: "center" }}
          >
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>W-</span>
            <span style={{ marginLeft: "5px" }}>{workNumber}</span>
          </p>
        )}
        {phone && (
          <p
            style={{ marginBottom: "0", display: "flex", alignItems: "center" }}
          >
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>P-</span>
            <span style={{ marginLeft: "5px" }}>{phone}</span>
          </p>
        )}
        {email && (
          <p
            style={{ marginBottom: "0", display: "flex", alignItems: "center" }}
          >
            <span style={{ fontSize: "16px", fontWeight: "bold"}}>M-</span>
            <span style={{ marginLeft: "5px" }}>{email}</span>
          </p>
        )}
      </div>

      {/* Logo */}
      <div style={{ marginBottom: "8px" }}>
        <img
          src="https://aimsr.ac.in/wp-content/uploads/2023/03/AITR-logo.jpg"
          alt={name}
          width="80%"
          height="80"
          style={{
            display: "block",
          }}
        />
      </div>

      {/* Social Media Links including Portfolio */}
      <div style={{ marginBottom: "8px" }}>
        <div style={{ textAlign: "start" }}>
          {socialMedia.linkedin && (
            <span
              style={{
                margin: "0 5px",
                display: "inline-block",
                marginRight: "15px",
              }}
            >
              <a
                href={socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-512.png"
                  alt="LinkedIn"
                  width="21"
                  height="21"
                />
              </a>
            </span>
          )}
          {socialMedia.portfolio && (
            <span
              style={{
                margin: "0 5px",
                display: "inline-block",
                marginRight: "15px",
              }}
            >
              <a
                href={socialMedia.portfolio}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
                  alt="Website"
                  width="21"
                  height="21"
                />
              </a>
            </span>
          )}
        </div>
      </div>

      {/* Extra Content with Horizontal Line below */}
      {extraContent && (
        <div style={{ marginBottom: "0", ...extraContentStyle }}>
          {extraContent}
          <p style={{ marginTop: "3px", fontWeight: "bold" }}>______________________</p>
        </div>
      )}

      {/* Copy Button */}
      <div style={{ marginTop: "15px" }}>
        <button
          onClick={() => {
            const signatureHtml = `
              <div style="font-family: Arial, sans-serif; width: 400px;">
                <p style="margin-bottom: 3px; font-weight: bold;">______________________</p>
                <h3 style="margin-bottom: 3px; font-weight: bold;">${name}</h3>
                ${
                  position === "Student"
                    ? `<p style="margin-bottom: 2px;">${position}</p>`
                    : ""
                }
                ${
                  designation
                    ? `<p style="margin-bottom: 3px;">${designation}</p>`
                    : ""
                }
                 ${
                  department
                    ? `<p style="margin-bottom: 2px;">${department}</p>`
                    : ""
                }
                ${
                  position === "Student" && section
                    ? `<p style="margin-bottom: 0;">Section: ${section}</p>`
                    : ""
                }
                <p style="margin-bottom: 3px; font-weight: bold;">______________________</p>
                ${
                  workNumber
                    ? `<p style="margin-bottom: 0;"><span style="font-weight: bold;">W-</span> ${workNumber}</p>`
                    : ""
                }
                ${
                  phone
                    ? `<p style="margin-bottom: 0;"><span style="font-weight: bold;">P-</span> ${phone}</p>`
                    : ""
                }
                ${
                  email
                    ? `<p style="margin-bottom: 0;"><span>✉</span> ${email}</p>`
                    : ""
                }
                <img src="https://aimsr.ac.in/wp-content/uploads/2023/03/AITR-logo.jpg" alt="${name}" width="212" height="50" style="display: block; text-align: left; margin-top:8px;" />
                <div style="margin-top: 8px;">
                  ${
                    socialMedia.linkedin
                      ? `<a href="${socialMedia.linkedin}" target="_blank"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-512.png" width="21" height="21" style="margin-right: 10px;" /></a>`
                      : ""
                  }
                  ${
                    socialMedia.portfolio
                      ? `<a href="${socialMedia.portfolio}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/1051/1051309.png" width="21" height="21" style="margin-right: 10px;" /></a>`
                      : ""
                  }
                </div>
                ${
                  extraContent
                    ? `<div style="font-weight: ${extraContentStyles.bold ? 'bold' : 'normal'}; font-style: ${extraContentStyles.italic ? 'italic' : 'normal'}; text-decoration: ${extraContentStyles.underline ? 'underline' : 'none'};">${extraContent}<p style="margin-top: 3px; font-weight: bold;">______________________</p></div>`
                    : ""
                }
              </div>
            `;
            copyHtmlToClipboard(signatureHtml);
            alert("Email signature copied to clipboard!");
          }}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.target.style.boxShadow = "0 0 15px rgba(0, 123, 255, 0.7)")
          }
          onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
        >
          Copy Email Signature
        </button>
      </div>
    </div>
  );
};

export default GeneratedSignature;
