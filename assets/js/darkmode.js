if (
  localStorage.getItem("color-mode") === 'light' ||
  (window.matchMedia('(prefers-color-scheme: light').matches &&
    !localStorage.getItem('color-mode'))
) {
  document.documentElement.setAttribute("color-mode", "light")
} else {
  document.documentElement.setAttribute("color-mode", "dark")
}

if (window.CSS && CSS.supports("color", "var(--primary)")) {

  // Switch to correct mode
  // Set custom attribute
  // Set preference in local storage
  var toggleColorMode = function toggleColorMode(e) {
    if (e.currentTarget.classList.contains("light--hidden")) {
      // Switch to Light Mode
      document.documentElement.setAttribute("color-mode", "light");
      localStorage.setItem("color-mode", "light");
    } else {
      // Switch to Dark Mode
      document.documentElement.setAttribute("color-mode", "dark");
      localStorage.setItem("color-mode", "dark");
    }
  };

  // Get the buttons in the DOM and set-up event listeners
  var toggleColorButtons = document.querySelectorAll(".color-mode__btn");
  toggleColorButtons.forEach(function (btn) { btn.addEventListener("click", toggleColorMode); });

} else {

  // If the feature isn't supported, then we hide the toggle buttons
  var btnContainer = document.querySelector(".color-mode__header");
  btnContainer.style.display = "none";

}