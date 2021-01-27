import React from "react";
import { useTransform, useViewportScroll } from "framer-motion";

import { Container } from "./styles";

const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const headerY = useTransform(
    scrollYProgress,
    [0.188, 0.198],
    ["0%", "-100%"]
  );
  return (
    <Container style={{ y: headerY }}>
      <a href="https://www.typeform.com">Typeform</a>
      <div className="menu-bar">
        <div className="links">
          <a href="/products">Products</a>
          <a href="/templates">Templates</a>
          <a href="/integrations">Connect</a>
          <a href="/pricing">Pricing</a>
          <a href="/help">Help</a>
          <a href="/blog">Blog</a>
          <a href="/careers">Careers</a>
          <a href="covid-19" id="covid-button">
            COVID-19
          </a>
        </div>
        <div className="buttons">
          <div className="log-in">
            <a href="log in">Log In</a>
          </div>
          <div className="sign-up">
            <a href="sign up">Sign Up</a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
