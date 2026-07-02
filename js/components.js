async function loadComponent(id, file)
{
    const response = await fetch(file);

    const html = await response.text();

    document.getElementById(id).innerHTML = html;
}

window.addEventListener("DOMContentLoaded", async () =>
{

    if(document.getElementById("navbar"))
    {
        await loadComponent(
            "navbar",
            "components/navbar.html"
        );
    }

    if(document.getElementById("sidebar"))
    {
        await loadComponent(
            "sidebar",
            "components/sidebar.html"
        );
    }

    // Change Navbar Title Automatically
    const title = document.body.dataset.title;

    if(title)
    {
        const pageTitle =
        document.getElementById("pageTitle");

        if(pageTitle)
        {
            pageTitle.innerHTML = title;
        }
    }

    if(document.getElementById("dailyQuote"))
    {
        loadDailyQuote();
    }
    loadBookmarkPreview();

});