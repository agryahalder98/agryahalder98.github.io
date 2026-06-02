document.addEventListener("DOMContentLoaded", function () {

  const button = document.getElementById("theme-toggle");

  const savedTheme =
    localStorage.getItem("theme") || "light";

  document.documentElement.setAttribute(
      "data-theme",
      savedTheme
  );

  updateIcon(savedTheme);

  button.addEventListener("click", function () {

      const current =
        document.documentElement.getAttribute("data-theme");

      const next =
        current === "light" ? "dark" : "light";

      document.documentElement.setAttribute(
          "data-theme",
          next
      );

      localStorage.setItem("theme", next);

      updateIcon(next);
  });

  function updateIcon(theme) {

      const icon =
          button.querySelector("i");

      if(theme === "dark"){
          icon.className = "fas fa-moon";
      }else{
          icon.className = "fas fa-sun";
      }
  }

});