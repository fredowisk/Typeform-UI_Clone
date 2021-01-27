import React from "react";
import { useTransform, useViewportScroll } from "framer-motion";

import {Sticky} from '../../styles/index';

import { ContentOffset, LeftSideContent, RightSideContent, Content, RightSideImage } from './styles';

const FirstAndSecond: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1]);
  const frameScale = useTransform(
    scrollYProgress,
    [0.558, 0.627],
    [0.511, 0.8]
  );

  return (
    <Sticky className="second">
      <First />

      <Content
        style={{
          opacity: frameOpacity,
          scale: frameScale,
        }}
      >
      </Content>
    </Sticky>
  );
};

const First: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const firstScale = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [1, 0.511, 0.511, 1]
  );

  const firstRadius = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [0, 4, 4, 0]
  );

  const leftSideHeight = useTransform(
    scrollYProgress,
    [0, 0.058],
    ["20vh", "100vh"]
  );

  const rightSideScale = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    [0, 0.511]
  );

  const rightSideY = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    ["58vh", "0vh"]
  );

  const offsetY = useTransform(
    scrollYProgress,
    [0.328, 0.397, 0.461, 0.53],
    ["0%", "-100%", '-100%', '-200%']
  );

  return (
    <Sticky
      className="first"
      style={{
        scale: firstScale,
        borderRadius: firstRadius,
      }}
    >
      <ContentOffset
        style={{
          y: offsetY,
        }}
      >
        <div className="a">
          <LeftSideContent
            style={{
              height: leftSideHeight,
            }}
          />
          <RightSideContent>
            <RightSideImage
              style={{
                y: rightSideY,
                scale: rightSideScale,
              }}
            />
          </RightSideContent>
        </div>
        <div className="b"></div>
        <div className="c"></div>
      </ContentOffset>
    </Sticky>
  );
};

export default FirstAndSecond;
