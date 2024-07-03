export const scrollToTops = () => {
  const target = document.getElementById("top");
  target.scrollIntoView({ behavior: "smooth" });
};

export const scrollToTarget = () => {
  document.getElementById("target").scrollIntoView({ behavior: "smooth" });
};

const scrollToTimeline = (e) => {
  const target = document.getElementById("timeline");
  target.scrollIntoView({ behavior: "smooth" });
};

const scrollToMySkill = (e) => {
  const target = document.getElementById("myskills");
  target.scrollIntoView({ behavior: "smooth" });
};

const scrollToAbout = (e) => {
  const target = document.getElementById("target");
  target.scrollIntoView({ behavior: "smooth" });
};
