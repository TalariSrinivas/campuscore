import React, { useState } from "react";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import RoleToggle from "./RoleToggle";
import GoogleLoginButton from "./GoogleLoginButton";

function LoginForm() {
  const [role, setRole] = useState("Faculty");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { role, ...formData });
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const styles = {
    container: {
      flex: 1,
      background: "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
    },
    formBox: {
      width: "100%",
      maxWidth: "400px",
      background: "#ffffff",
      padding: "2rem",
      borderRadius: "20px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
      transition: "box-shadow 0.3s ease",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "#334155",
      textAlign: "center",
      marginBottom: "1.5rem",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1.25rem",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      fontSize: "0.9rem",
      fontWeight: 500,
      color: "#475569",
      marginBottom: "0.4rem",
    },
    inputWrapper: {
      position: "relative",
    },
    input: {
      width: "100%",
      padding: "0.75rem 1rem",
      paddingRight: "2.5rem",
      border: "1px solid #cbd5e1",
      borderRadius: "10px",
      fontSize: "1rem",
      background: "#f9fafb",
      transition: "border-color 0.3s, box-shadow 0.3s",
    },
    inputFocus: {
      borderColor: "#3b82f6",
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
    },
    icon: {
      position: "absolute",
      right: "0.75rem",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#94a3b8",
      fontSize: "1.1rem",
      cursor: "pointer",
    },
    forgotPassword: {
      fontSize: "0.85rem",
      textAlign: "right",
      marginTop: "0.4rem",
    },
    forgotLink: {
      color: "#3b82f6",
      textDecoration: "none",
    },
    checkboxGroup: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      fontSize: "0.9rem",
      color: "#64748b",
    },
    loginButton: {
      width: "100%",
      background: "#3b82f6",
      color: "white",
      border: "none",
      padding: "0.875rem",
      borderRadius: "10px",
      fontSize: "1rem",
      fontWeight: 600,
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    loginButtonHover: {
      background: "#2563eb",
    },
    divider: {
      display: "flex",
      alignItems: "center",
      margin: "1.5rem 0",
      color: "#9ca3af",
      fontSize: "0.875rem",
    },
    dividerLine: {
      flex: 1,
      height: "1px",
      background: "#e2e8f0",
    },
    dividerText: {
      margin: "0 1rem",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <RoleToggle role={role} setRole={setRole} />

        <h2 style={styles.title}>Logging in as {role}</h2>

        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              {role === "Faculty" ? "Faculty ID or Email" : "Student ID or Email"}
            </label>
            <div style={styles.inputWrapper}>
              <input
                type="text"
                name="email"
                placeholder={`Enter your ${role} ID or email`}
                value={formData.email}
                onChange={handleInputChange}
                required
                style={styles.input}
              />
              <span style={styles.icon}>
                <FaUser />
              </span>
            </div>
          </div>

          <div style={styles.formGroup}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label style={styles.label}>Password</label>
              <div style={styles.forgotPassword}>
                <a href="#forgot" style={styles.forgotLink}>
                  Forgot password?
                </a>
              </div>
            </div>
            <div style={styles.inputWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
                style={styles.input}
              />
              <span
                style={styles.icon}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div style={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={formData.remember}
              onChange={handleInputChange}
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" style={styles.loginButton}>
            Login
          </button>
        </form>

        <div style={styles.divider}>
          <div style={styles.dividerLine}></div>
          <div style={styles.dividerText}>or continue with</div>
          <div style={styles.dividerLine}></div>
        </div>

        <GoogleLoginButton onClick={handleGoogleLogin} />
      </div>
    </div>
  );
}

export default LoginForm;
