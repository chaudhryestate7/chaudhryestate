const gallery = document.querySelectorAll(".gallery .image"),
  previewBox = document.querySelector(".preview__box"),
  closeIcon = previewBox.querySelector(".icon"),
  previewImg = previewBox.querySelector("img"),
  currentImg = previewBox.querySelector(".current-img"),
  Totalimg = previewBox.querySelector(".total-img"),
  shadow = document.querySelector(".shadow");

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// Apply the stored theme on page load
const applyStoredTheme = () => {
  if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
      darkTheme
    );
    themeButton.classList[selectedIcon === "ri-sun-line" ? "add" : "remove"](
      iconTheme
    );
  }
};

// Apply the stored theme when the page loads
document.addEventListener("DOMContentLoaded", applyStoredTheme);

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
