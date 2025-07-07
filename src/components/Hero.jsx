import React from "react";
import { FaBook, FaClock, FaChartLine } from "react-icons/fa";

function HeroSection() {
  const styles = {
    heroSection: {
      flex: 1,
      background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 40%, #4facfe 100%)",
      borderRadius: "50px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      maxHeight: "650px",
      maxWidth: "600px",
      padding: "3rem 2rem",
      color: "white",
      boxShadow:
        "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
      textAlign: "center",
    },
    logoText: {
      fontSize: "1.8rem",
      fontWeight: 800,
      color: "#f0f2f6",
      marginTop: "40px",
      marginBottom: "10px",
      lineHeight: 1.1,
      letterSpacing: "-0.025em",
    },
    welcomeContent: {
      marginBottom: "2rem",
    },
    welcomeTitle: {
      fontSize: "20px",
      fontWeight: 600,
      marginBottom: "1rem",
      lineHeight: 1.3,
    },
    welcomeSubtitle: {
      fontSize: "0.9rem",
      opacity: 0.9,
      lineHeight: 1.5,
      marginBottom: "2rem",
    },
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "1.5rem",
      marginBottom: "1rem",
      maxWidth: "400px",
    },
    featureCard: {
      background: "rgba(255,255,255,0.15)",
      borderRadius: "5px",
      padding: "1.25rem 0.5rem",
      textAlign: "center",
      boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
      backdropFilter: "blur(10px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    featureIcon: {
      marginBottom: "0.75rem",
      color: "white",
      fontSize: "20px",
    },
    featureIndicators: {
      display: "flex",
      justifyContent: "center",
      gap: "0.5rem",
      marginBottom: "2rem",
    },
    indicator: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.4)",
    },
    activeIndicator: {
      background: "white",
    },
    testimonialCard: {
      background: "rgba(255,255,255,0.1)",
      padding: "1.25rem",
      borderRadius: "12px",
      backdropFilter: "blur(10px)",
      maxWidth: "400px",
      marginBottom: "2rem",
    },
    testimonialText: {
      fontStyle: "italic",
      fontSize: "0.8rem",
      lineHeight: 1.4,
      marginBottom: "0.75rem",
    },
    testimonialAuthor: {
      fontSize: "0.75rem",
      opacity: 0.8,
      fontWeight: 500,
    },
  };

  return (
    <div style={styles.heroSection}>
      <div style={styles.logoText}>
        CAMPUS
        <br />
        CORE
      </div>

      <div style={styles.welcomeContent}>
        <h2 style={styles.welcomeTitle}>Welcome to Your Academic Journey</h2>
        <p style={styles.welcomeSubtitle}>
          Manage your courses, track your schedule, and stay organized
          throughout your academic term with our comprehensive management
          platform.
        </p>
      </div>

      <div style={styles.featuresGrid}>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>
            <FaBook />
          </div>
          <h3>
            Course
            <br />
            Management
          </h3>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>
            <FaClock />
          </div>
          <h3>
            Schedule
            <br />
            Tracking
          </h3>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>
            <FaChartLine />
          </div>
          <h3>
            Progress
            <br />
            Analytics
          </h3>
        </div>
      </div>

      <div style={styles.featureIndicators}>
        <div style={styles.indicator}></div>
        <div style={{ ...styles.indicator, ...styles.activeIndicator }}></div>
        <div style={styles.indicator}></div>
      </div>

      <div style={styles.testimonialCard}>
        <div style={styles.testimonialText}>
          "As a professor, I appreciate how simple it is to communicate schedule
          changes to my students. The platform is intuitive and saves me hours
          each week."
        </div>
        <div style={styles.testimonialAuthor}>
          - Dr. Michael T., Engineering Faculty
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
