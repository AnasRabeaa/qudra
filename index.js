const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
const main = document.querySelector(".main");


sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
    sidebar.classList.add("close", "hoverable");
    main.classList.add("main-open");
});
sidebarExpand.addEventListener("click", () => {
    sidebar.classList.remove("close", "hoverable");
    
});

sidebarClose.addEventListener("click", () => {
    sidebarClose.classList.add("none");
    sidebarExpand.classList.add("block");
});

sidebarExpand.addEventListener("click", () => {
    sidebarClose.classList.remove("none");
    sidebarExpand.classList.remove("block");
    main.classList.remove("main-open");
});

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
      sidebar.classList.remove("close");
      main.classList.remove("main-open");
  }
});



sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("hoverable")) {
      sidebar.classList.add("close");
      main.classList.add("main-open");
  }
});



submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}