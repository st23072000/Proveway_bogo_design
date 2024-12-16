document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".option");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      // Remove 'selected' class from all options
      options.forEach((opt) => opt.classList.remove("selected"));

      // Add 'selected' class to the clicked option
      option.classList.add("selected");

      // Check the radio button inside the selected option
      const radio = option.querySelector("input[type='radio']");
      if (radio) {
        radio.checked = true;
      }
    });
  });
});
