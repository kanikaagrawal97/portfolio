import { myDetails } from "../constants/constants";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "2rem 0",
        textAlign: "center",
        color: "var(--text-secondary)",
        fontSize: "0.9rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <p>Designed & Built by {myDetails.name}</p>
      <p style={{ marginTop: "0.5rem" }}>
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
