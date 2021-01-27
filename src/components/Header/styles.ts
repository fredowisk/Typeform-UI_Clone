import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.header)`
  width: 100%;
  height: 150px;
  background: rgb(241, 236, 228);

  position: fixed;
  top: 0;
  z-index: 99999;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 32px 24px;

  a {
    font-size: 24px;
    line-height: 19.2px;
    text-decoration: none;
    color: rgb(38, 38, 39);
    font-family: "Apercu Pro", sans-serif;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .menu-bar {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .links {
    a {
      margin-right: 24px;
      font-size: 16px;
      font-weight: 500;
    }

    #covid-button {
      background: rgb(219, 59, 38);
      color: white;
      font-size: 0.75rem;
      padding: 3px 6px 1px;
      border-radius: 4px;
    }
  }

  .buttons {
    display: flex;
    align-items: center;

    a {
      font-size: 16px;
      font-weight: 500;
    }

    .log-in {
      flex: 0 0 auto;
      padding: 8px 16px;
      border: 1px solid rgb(38, 38, 39);
      background: transparent;
      border-radius: 2px;
      margin-right: 16px;
    }

    .sign-up {
      flex: 0 0 auto;
      padding: 8px 16px;
      background: rgb(38, 38, 39);
      border: 1px solid rgb(38, 38, 38);
      border-radius: 2px;

      a {
        color: rgb(255, 255, 255);
      }
    }
  }
`;
