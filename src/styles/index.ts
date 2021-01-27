import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled.main`
  .first {
    background: red;
    overflow: hidden;

    .a {
      background: #f5f1ea;
      height: 100%;
      display: flex;
      align-items: flex-end;
    }

    .b {
      background: #582534;
      width: 100%;
      height: 100%;
    }

    .c {
      background: #0a7397;
      width: 100%;
      height: 100%;
    }
  }
  .second {
    background: green;
  }

  .third {
    background: yellow;
  }

  .fourth {
    background: blue;
  }
`;

export const Section = styled.div`
  position: relative;
`;

export const Sticky = styled(motion.div)`
  position: sticky;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
`;