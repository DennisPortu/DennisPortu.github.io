document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".Sidebar");
  const toggleBtn = document.getElementById("toggleSidebar");

  if (localStorage.getItem("sidebar") === "hidden") {
    sidebar.style.transform = "translateX(-100%)";
  }

  toggleBtn.addEventListener("click", () => {
    const isHidden = sidebar.style.transform === "translateX(-100%)";

    if (isHidden) {
      sidebar.style.transform = "translateX(0)";
      localStorage.setItem("sidebar", "visible");
    } else {
      sidebar.style.transform = "translateX(-100%)";
      localStorage.setItem("sidebar", "hidden");
    }
  });
});
