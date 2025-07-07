import React from "react";

function GoogleLoginButton({ onClick }) {
  const buttonStyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    padding: "0.875rem",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    background: "white",
    color: "#374151",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  const iconStyle = {
    width: "20px",
    height: "20px",
  };

  const hoverStyle = {
    borderColor: "#d1d5db",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
  };

  
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      style={isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        style={iconStyle}
      />
      Log In with Google
    </button>
  );
}

export default GoogleLoginButton;
