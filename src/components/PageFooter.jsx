import React from "react";

function PageFooter() {
  const footerStyles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 3rem",
      background: "#ffffff",
      fontSize: "0.875rem",
      flexWrap: "wrap", // helps responsiveness
      textAlign: "center",
      rowGap: "1rem",
    },
    left: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    center: {
      fontSize: "1.5rem",
      fontWeight: 700,
      color: "#374151",
    },
    right: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
  };

  return (
    <div style={footerStyles.container}>
      <div style={footerStyles.left}>
        <span>Designed and developed by ZoroTeam</span>
      </div>
      <div style={footerStyles.center}>
        Talari Srinivas
      </div>
      <div style={footerStyles.right}>
        <span>© 2025 Zoro innovations</span>
      </div>
    </div>
  );
}

export default PageFooter;
