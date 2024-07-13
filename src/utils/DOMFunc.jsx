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
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    observer.observe(skillLevelElement);

    return () => {
      observer.disconnect();
    };
  }, [percentage]);
  return (
    <section className="">
      <div className="skill">
        <div className="min-[320px]:w-2/6 min-[320px]:text-sm skill-name">
          {skillName}
        </div>
        <div className="min-[320px]:w-3/6 skill-bar">
          <div className="skill-level" ref={skillBar}></div>
        </div>
        <div className="min-[320px]:text-sm skill-percentage">{percentage}</div>
      </div>
    </section>
  );
};
