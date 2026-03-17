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
    extraContentStyles,
  } = formData;

  // ✅ designation full form
  const fullDesignation =
    designation === "Dr."
      ? "Doctor"
      : designation === "Prof."
      ? "Professor"
      : designation === "HOD"
      ? "Head Of Department"
      : designation;

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
        boxShadow: "0 4px 8px #343579",
      }}
    >
      {/* Name */}
      <div style={{ marginBottom: "8px" }}>
        <p style={{ marginBottom: "3px", fontWeight: "bold" }}>
          ______________________
        </p>

        <h3
          style={{
            marginBottom: "3px",
            fontWeight: "bold",
            color: "#343579",
          }}
        >
          {name}
        </h3>

        {position && <p>{position}</p>}

        {fullDesignation && <p>{fullDesignation}</p>}

        {department && <p>{department}</p>}

        {section && <p>Section: {section}</p>}
      </div>

      {/* Numbers */}
      <div style={{ marginBottom: "8px" }}>
        <p style={{ marginBottom: "3px", fontWeight: "bold" }}>
          ______________________
        </p>

        {workNumber && (
          <p>
            <b>W-</b> {workNumber}
          </p>
        )}

        {phone && (
          <p>
            <b>P-</b> {phone}
          </p>
        )}

        {email && (
          <p>
            <b>M-</b> {email}
          </p>
        )}
      </div>

      {/* Logo */}
      <div style={{ marginBottom: "8px" }}>
        <img
          src="https://aimsr.ac.in/wp-content/uploads/2023/03/AITR-logo.jpg"
          alt="logo"
          width="80%"
          height="80"
        />

        <p style={{ marginTop: "4px" }}>
          <a
            href="https://aitr.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#343579",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Visit Us
          </a>
        </p>
      </div>

      {/* Social */}
      <div style={{ marginBottom: "8px" }}>
        {socialMedia.linkedin && (
          <a href={socialMedia.linkedin} target="_blank">
            <img
              src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-512.png"
              width="21"
              height="21"
              alt="linkedin"
            />
          </a>
        )}

        {socialMedia.portfolio && (
          <a href={socialMedia.portfolio} target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
              width="21"
              height="21"
              alt="web"
            />
          </a>
        )}
      </div>

      {/* Extra */}
      {extraContent && (
        <div style={extraContentStyle}>
          {extraContent}
          <p style={{ fontWeight: "bold" }}>
            ______________________
          </p>
        </div>
      )}

      {/* Copy Button */}
      <button
        onClick={() => {
          const signatureHtml = `
<div style="font-family:Arial;width:400px">

<p><b>______________________</b></p>

<h3 style="color:#343579">${name}</h3>

${position ? `<p>${position}</p>` : ""}

${fullDesignation ? `<p>${fullDesignation}</p>` : ""}

${department ? `<p>${department}</p>` : ""}

${section ? `<p>Section: ${section}</p>` : ""}

<p><b>______________________</b></p>

${workNumber ? `<p><b>W-</b> ${workNumber}</p>` : ""}

${phone ? `<p><b>P-</b> ${phone}</p>` : ""}

${email ? `<p><b>M-</b> ${email}</p>` : ""}

<img src="https://aimsr.ac.in/wp-content/uploads/2023/03/AITR-logo.jpg" width="300"/>

<p>
<a href="https://aitr.ac.in/">Visit Us</a>
</p>

${
  socialMedia.linkedin
    ? `<a href="${socialMedia.linkedin}">
<img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-512.png" width="21"/>
</a>`
    : ""
}

${
  socialMedia.portfolio
    ? `<a href="${socialMedia.portfolio}">
<img src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" width="21"/>
</a>`
    : ""
}

</div>
`;

          copyHtmlToClipboard(signatureHtml);
          alert("Copied");
        }}
      >
        Copy Email Signature
      </button>
    </div>
  );
};

export default GeneratedSignature;
