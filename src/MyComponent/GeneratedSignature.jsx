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

 //  convert designation
  let fullDesignation = "";
  if (designation === "Dr.") fullDesignation = "Dr.";
  else if (designation === "Prof.") fullDesignation = "Professor";
  else if (designation === "HOD") fullDesignation = "Head Of Department";
  else fullDesignation = designation;

  const extraStyle = {
    fontWeight: extraContentStyles.bold ? "bold" : "normal",
    fontStyle: extraContentStyles.italic ? "italic" : "normal",
    textDecoration: extraContentStyles.underline ? "underline" : "none",
  };

  const copyHtmlToClipboard = () => {
    const html = `
<div style="font-family:Arial;width:400px">

<p><b>______________________</b></p>

<h3 style="color:#343579">${name || ""}</h3>

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

    const el = document.createElement("div");
    el.innerHTML = html;
    document.body.appendChild(el);

    const range = document.createRange();
    range.selectNode(el);

    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    document.execCommand("copy");

    document.body.removeChild(el);

    alert("Copied");
  };

  return (
    <div
      style={{
        fontFamily: "Arial",
        width: "400px",
        margin: "40px auto",
        padding: "20px",
        boxShadow: "0 0 8px #343579",
      }}
    >
      <p><b>______________________</b></p>

      <h3 style={{ color: "#343579" }}>{name}</h3>

      {position && <p>{position}</p>}

      {fullDesignation && <p>{fullDesignation}</p>}

      {department && <p>{department}</p>}

      {section && <p>Section: {section}</p>}

      <p><b>______________________</b></p>

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

      <img
        src="https://aimsr.ac.in/wp-content/uploads/2023/03/AITR-logo.jpg"
        width="300"
        alt=""
      />

      <p>
        <a href="https://aitr.ac.in/">Visit Us</a>
      </p>

      {socialMedia.linkedin && (
        <a href={socialMedia.linkedin}>
          <img
            src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-512.png"
            width="21"
            alt=""
          />
        </a>
      )}

      {socialMedia.portfolio && (
        <a href={socialMedia.portfolio}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
            width="21"
            alt=""
          />
        </a>
      )}

      {extraContent && (
        <div style={extraStyle}>
          {extraContent}
          <p><b>______________________</b></p>
        </div>
      )}

      <button onClick={copyHtmlToClipboard}>
        Copy Email Signature
      </button>
    </div>
  );
};

export default GeneratedSignature;
