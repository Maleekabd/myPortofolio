export const scrollToTops = () => {
  const target = document.getElementById("top");
  target.scrollIntoView({ behavior: "smooth" });
};

export const scrollToTarget = () => {
  document.getElementById("target").scrollIntoView({ behavior: "smooth" });
};

export const scrollToLandingPage = (e) => {
  const target = document.getElementById("landing-page");
  target.scrollIntoView({ behavior: "smooth" });
};

export const scrollToMySkills = () => {
  const target = document.getElementById("skills");
  target.scrollIntoView({ behavior: "smooth" });
};
