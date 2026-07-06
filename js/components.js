async function loadComponent(id, file) {
  const response = await fetch(file);

  const html = await response.text();

  document.getElementById(id).innerHTML = html;
}

window.addEventListener("DOMContentLoaded", async () => {
  if (document.getElementById("navbar")) {
    await loadComponent("navbar", "components/navbar.html");
  }

  if (document.getElementById("sidebar")) {
    await loadComponent("sidebar", "components/sidebar.html");

    const adminBtn = document.getElementById("adminBtn");

    if (adminBtn && localStorage.getItem("userRole") === "admin") {
      adminBtn.style.display = "block";
    }

    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
      logoutBtn.onclick = function () {
        window.logoutUser();
      };
    }
  }

  // Change Navbar Title Automatically
  const title = document.body.dataset.title;

  if (title) {
    const pageTitle = document.getElementById("pageTitle");

    if (pageTitle) {
      pageTitle.innerHTML = title;
    }
  }

  if (document.getElementById("dailyQuote")) {
    loadDailyQuote();
  }
  loadBookmarkPreview();
});
