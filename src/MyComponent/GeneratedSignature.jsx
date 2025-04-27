import React from "react";

const GeneratedSignature = ({ formData }) => {
  const {
    name,
    department,
    section,
    phone,
    email,
    socialMedia,
    extraContent,
    position,
    designation,
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
      {/* Name, Role, Designation */}
      <div style={{ marginBottom: "10px" }}>
        <h3 style={{ marginBottom: "5px" }}>{name}</h3>
        {position && (
          <p style={{ marginBottom: "3px", fontWeight: "bold" }}>{position}</p>
        )}
        {designation && (
          <p style={{ marginBottom: "5px", fontStyle: "italic" }}>
            {designation}
          </p>
        )}
        {department && (
          <p style={{ marginBottom: "0" }}>
            {department} {section && `- ${section}`}
          </p>
        )}
      </div>

      {/* Phone and Email */}
      <div style={{ marginBottom: "10px" }}>
        {phone && (
          <p
            style={{ marginBottom: "0", display: "flex", alignItems: "center" }}
          >
            <span style={{ fontSize: "21px" }}>☎</span>
            <span style={{ marginLeft: "5px" }}>{phone}</span>
          </p>
        )}
        {email && (
          <p
            style={{ marginBottom: "0", display: "flex", alignItems: "center" }}
          >
            <span style={{ fontSize: "22px" }}>✉</span>
            <span style={{ marginLeft: "5px" }}>{email}</span>
          </p>
        )}
      </div>

      {/* Logo */}
      <div style={{ marginBottom: "10px" }}>
        <img
          src="https://aitr.ac.in/wp-content/uploads/2023/03/White-Logos-for-Acropolis.png"
          alt={name}
          width="80%"
          height="80"
          style={{
            display: "block",
          }}
        />
      </div>

      {/* Social Media Links */}
      <div style={{ marginBottom: "10px" }}>
        <div style={{ textAlign: "start" }}>
          {socialMedia.facebook && (
            <span
              style={{
                margin: "0 5px",
                display: "inline-block",
                marginRight: "15px",
              }}
            >
              <a
                href={socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png"
                  alt="Facebook"
                  width="23"
                  height="23"
                />
              </a>
            </span>
          )}
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
          {socialMedia.twitter && (
            <span
              style={{
                margin: "0 5px",
                display: "inline-block",
                marginRight: "15px",
              }}
            >
              <a
                href={socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png"
                  alt="Twitter"
                  width="21"
                  height="21"
                />
              </a>
            </span>
          )}
          {socialMedia.instagram && (
            <span
              style={{
                margin: "0 5px",
                display: "inline-block",
                marginRight: "15px",
              }}
            >
              <a
                href={socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3661/3661391.png"
                  alt="Instagram"
                  width="21"
                  height="21"
                />
              </a>
            </span>
          )}
        </div>
      </div>

      {/* Extra Content */}
      {extraContent && (
        <p style={{ marginBottom: "0", fontStyle: "italic" }}>{extraContent}</p>
      )}

      {/* Copy Button */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => {
            const signatureHtml = `
              <div style="font-family: Arial, sans-serif; width: 400px;">
                <h3 style="margin-bottom: 5px;">${name}</h3>
                ${
                  position
                    ? `<p style="margin-bottom: 3px; font-weight: bold;">${position}</p>`
                    : ""
                }
                ${
                  designation
                    ? `<p style="margin-bottom: 5px; font-style: italic;">${designation}</p>`
                    : ""
                }
                ${
                  department || section
                    ? `<p style="margin-bottom: 1px;">${department}${
                        section ? ` - ${section}` : ""
                      }</p>`
                    : ""
                }
                ${
                  phone
                    ? `<p style="margin-bottom: 0;"><span>☎</span> ${phone}</p>`
                    : ""
                }
                ${
                  email
                    ? `<p style="margin-bottom: 0;"><span>✉</span> ${email}</p>`
                    : ""
                }
                <img src="https://aitr.ac.in/wp-content/uploads/2023/03/White-Logos-for-Acropolis.png" alt="${name}" width="212" height="50" style="display: block; text-align: left; margin-top:10px;" />
                <div style="margin-top: 10px;">
                  ${
                    socialMedia.facebook
                      ? `<a href="${socialMedia.facebook}" target="_blank"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" width="23" height="23" style="margin-right: 10px;" /></a>`
                      : ""
                  }
                  ${
                    socialMedia.linkedin
                      ? `<a href="${socialMedia.linkedin}" target="_blank"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-512.png" width="21" height="21" style="margin-right: 10px;" /></a>`
                      : ""
                  }
                  ${
                    socialMedia.twitter
                      ? `<a href="${socialMedia.twitter}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png" width="21" height="21" style="margin-right: 10px;" /></a>`
                      : ""
                  }
                  ${
                    socialMedia.instagram
                      ? `<a href="${socialMedia.instagram}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3661/3661391.png" width="21" height="21" /></a>`
                      : ""
                  }
                </div>
              </div>
            `;
            copyHtmlToClipboard(signatureHtml);
            alert("Email signature copied to clipboard!");
          }}
          className="btn-btn"
        >
          Copy Email Signature
        </button>
      </div>
    </div>
  );
};

export default GeneratedSignature;
