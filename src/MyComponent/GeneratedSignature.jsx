import React from "react";

const GeneratedSignature = ({ formData }) => {
  const { name, department, section, phone, email, socialMedia, extraContent } = formData;

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

  // New function to handle "Import to Mail"
  const importToMail = () => {
    const signatureHtml = `
      <div style="font-family: Arial, sans-serif; width: 400px;">
        <div style="margin-bottom: 1px;">
          <h3 style="margin-bottom: 0;">${name}</h3>
          ${
            department && section
              ? `<p style="margin-bottom: 1px;">${department} - ${section}</p>`
              : ""
          }
        </div>
        <div style="margin-bottom: 2px;">
          ${
            phone
              ? `<p style="margin-bottom: 0; display: flex; align-items: center;">
              <span style="margin-left: 5px;">${phone}</span></p>`
              : ""
          }
          ${
            email
              ? `<p style="margin-bottom: 0; display: flex; align-items: center;">
                <span style="margin-left: 5px;">${email}</span></p>`
              : ""
          }
        </div>
        <div style="margin-bottom: 1px;">
          <img src="https://aitr.ac.in/wp-content/uploads/2023/03/White-Logos-for-Acropolis.png" alt="${name}" width="212" height="50" style="display: block;  text-align: left;" />
        </div>
        <div style="margin-bottom: 10px; display: flex; justify-content: space-around;">
          ${
            socialMedia.facebook
              ? `<span style="display: inline-block; margin-right:15px"><a href="${socialMedia.facebook}" target="_blank" rel="noopener noreferrer"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" alt="Facebook" width="23" height="23"/></a>&nbsp;&nbsp</span>`
              : ""
          }
          ${
            socialMedia.linkedin
              ? `<span style="display: inline-block; margin-right:15px"><a href="${socialMedia.linkedin}" target="_blank" rel="noopener noreferrer"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-512.png" alt="LinkedIn" width="21" height="21"/></a>&nbsp;&nbsp</span>`
              : ""
          }
          ${
            socialMedia.twitter
              ? `<span style="display: inline-block; margin-right:15px"><a href="${socialMedia.twitter}" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png" alt="Twitter" width="21" height="21"/></a>&nbsp;&nbsp</span>`
              : ""
          }
          ${
            socialMedia.instagram
              ? `<span style="display: inline-block; margin-right:15px"><a href="${socialMedia.instagram}" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/3661/3661391.png" alt="Instagram" width="21" height="21"/> </a></span>`
              : ""
          }
        </div>
      </div>
    `;

    // Use mailto: with body (HTML will be rendered in Gmail/Outlook web, not all clients)
    const mailtoLink = `mailto:?subject=My Email Signature&body=${encodeURIComponent(signatureHtml)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    // main div
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        width: "400px",
        margin: "50px auto",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >

      {/* //name and desig. */}
      <div style={{ marginBottom: "10px" }}>
        {/* Name and Designation */}
        <h3 style={{ marginBottom: "0" }}>{name}</h3>
        {department && (
          <p style={{ marginBottom: "0" }}>
            {department} {section && `- ${section}`}
          </p>
        )}
      </div>

      {/* // phone number */}
      <div style={{ marginBottom: "10px" }}>
        {phone && (
          <p
            style={{ marginBottom: "0", display: "flex", alignItems: "center" }}
          >
            <span style={{fontSize:"21px"}}>☎</span>
            {" "}
            <span style={{ marginLeft: "5px" }}>{phone}</span>
          </p>
        )}
        {email && (
          <p
            style={{ marginBottom: "0", display: "flex", alignItems: "center" }}
          >
            <span style={{fontSize:"22px"}}>✉</span>
            <span style={{ marginLeft: "5px" }}>{email}</span>
          </p>
        )}
      </div>


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


      {/* //social media */}
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

      {extraContent && (
  <p style={{ marginBottom: "0", fontStyle: "italic" }}>{extraContent}</p>
)}

      

     
      {/* //copy to clipboard */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => {
            const signatureHtml = `
              <div style="font-family: Arial, sans-serif; width: 400px;">
               
                <div style="margin-bottom: 1px;">
                  <h3 style="margin-bottom: 0;">${name}</h3>
                  ${
                    department || section
                      ? `<p style="margin-bottom: 1px;"><strong>Role:</strong> ${department}${section ? ` - ${section}` : ""}</p>`
                      : ""
                  }
                </div>
                <div style="margin-bottom: 2px;">
                  ${
                    phone
                      ? `<p style="margin-bottom: 0; display: flex; align-items: center;">
                      <span style="margin-left: 5px;">${phone}</span></p>`
                      : ""
                  }
                  ${
                    email
                      ? `<p style="margin-bottom: 0; display: flex; align-items: center;">
                      <span style="margin-left: 5px;">${email}</span></p>`
                      : ""
                  }
                </div>
                 <div style="margin-bottom: 1px;">
                  <img src="https://aitr.ac.in/wp-content/uploads/2023/03/White-Logos-for-Acropolis.png" alt="${name}" width="212" height="50" style="display: block;  text-align: left;" />
                </div>
                <div style="margin-bottom: 10px; display: flex; justify-content: space-around;">
                  ${
                    socialMedia.facebook
                      ? `<span style="display: inline-block; margin-right:15px"><a href="${socialMedia.facebook}" target="_blank" rel="noopener noreferrer"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" alt="Facebook" width="23" height="23"/></a>&nbsp;&nbsp</span>`
                      : ""
                  }
                    ${
                      socialMedia.linkedin
                        ? `<span style="display: inline-block; margin-right:15px"><a href="${socialMedia.linkedin}" target="_blank" rel="noopener noreferrer"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-512.png" alt="LinkedIn" width="21" height="21"/></a>&nbsp;&nbsp</span>`
                        : ""
                    }
                    ${
                      socialMedia.twitter
                        ? `<span style="display: inline-block; margin-right:15px"><a href="${socialMedia.twitter}" target="_blank" rel="noopener noreferrer"><img src"https://cdn-icons-png.flaticon.com/512/5968/5968958.png" alt="Twitter" width="21" height="21"/></a>&nbsp;&nbsp</span>`
                        : ""
                    }
                    ${
                      socialMedia.instagram
                        ? `<span style="display: inline-block; margin-right:15px"><a href="${socialMedia.instagram}" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/3661/3661391.png" alt="Instagram" width="21" height="21"/> </a></span>`
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

        {/* <button
          onClick={importToMail}
          className="btn-btn"
        >
          Import to Mail
        </button> */}
      </div>
    </div>
  );
};

export default GeneratedSignature;
