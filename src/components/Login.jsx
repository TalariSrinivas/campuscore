import React from "react";
import HeroSection from './Hero';
import LoginForm from './Form';
import PageFooter from './Footer';

function LoginSection() {
  return (
    <div style={styles.loginSection}>
      <div style={styles.mainLoginContent}>
        <HeroSection />
        <LoginForm />
      </div>
      <PageFooter />
    </div>
  );
}

const styles = {
  loginSection: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    background: "#e8f0fe",
  },
  mainLoginContent: {
    display: "flex",
    flex: 1,
    padding: "2rem",
    gap: "2rem",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
};

export default LoginSection;
