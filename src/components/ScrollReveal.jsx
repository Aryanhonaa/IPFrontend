"use client";

import AnimatedContent from "../styles/AnimatedContent.jsx";

export default function ScrollReveal({
  children,
  className = "",
  distance = 48,
  duration = 0.3,
  delay = 0,
  threshold = 0.12,
}) {
  return (
    <AnimatedContent
      distance={distance}
      direction="vertical"
      reverse={false}
      duration={duration}
      ease="power3.out"
      initialOpacity={1}
      animateOpacity={true}
      threshold={threshold}
      delay={delay}
      className={className}
    >
      {children}
    </AnimatedContent>
  );
}
