import { useEffect, useRef } from "react";
import "./DOMFunc.css";

export const SkillsBar = ({ skillName, percentage }) => {
  const skillBar = useRef(null);

  useEffect(() => {
    const skillLevelElement = skillBar.current;

    if (!skillLevelElement) {
      return;
    }

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillLevelElement.style.width = percentage;
          observer.disconnect(); // Stop observing once the animation is triggered
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when at least 10% of the element is visible
    });

    observer.observe(skillLevelElement);

    return () => {
      observer.disconnect();
    };
  }, [percentage]);
  return (
    <section className="">
      <div className="skill">
        <div className="skill-name">{skillName}</div>
        <div className="skill-bar">
          <div className="skill-level" ref={skillBar}></div>
        </div>
        <div className="skill-percentage">{percentage}</div>
      </div>
    </section>
  );
};
