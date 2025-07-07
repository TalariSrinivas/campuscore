import React from "react";

function RoleToggle({ role, setRole }) {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "rgb(221, 230, 239)",
      borderRadius: "8px",
      padding: "4px",
      height: "48px",
      width: "120px", 
      margin: "0 auto 2rem auto",
    },
    button: (isActive) => ({
      flex: 1,
      padding: "0.75rem",
      border: "none",
      background: isActive ? "#3b82f6" : "white",
      borderRadius: "1px",
      fontWeight: 500,
      cursor: "pointer",
      transition: "all 0.2s ease",
      color: isActive ? "white" : "#64748b",
      fontSize: "0.9rem",
      boxShadow: isActive
        ? "0 2px 4px rgba(59, 130, 246, 0.25)"
        : "none",
    }),
  };

  return (
    <div style={styles.container}>
      <button
        type="button"
        onClick={() => setRole("Student")}
        style={styles.button(role === "Student")}
      >
        Student
      </button>
      <button
        type="button"
        onClick={() => setRole("Faculty")}
        style={styles.button(role === "Faculty")}
      >
        Faculty
      </button>
    </div>
  );
}

export default RoleToggle;
