import React from "react";

function PageTitle({ title, subTitle, onHomeClick }) {
  const handleHomeClick = (event) => {
    event.preventDefault();
    if (onHomeClick) {
      onHomeClick();
    }
  };

  return (
    <div className="pagetitle">
      <h1>{title}</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/" onClick={handleHomeClick}>Home</a>
          </li>
          {/* Only display the breadcrumb title (current page) */}
          <li className="breadcrumb-item active">{subTitle}</li>
        </ol>
        {/* Render subbreadcrumb (Home / {section}) */}
       
      </nav>
    </div>
  );
}

export default PageTitle;
