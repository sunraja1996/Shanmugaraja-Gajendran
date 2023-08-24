var newPath = window.location.pathname;

switch (newPath) {
  case "/index.html":
    newPath = "/";
    break;
  case "/projects.html":
    newPath = "/myworks";
    break;
  case "/contact.html":
    newPath = "/contactme";
    break;
  default:
    break;
}

if (newPath !== window.location.pathname) {
  window.history.replaceState({}, document.title, newPath);
}


if (window.location.pathname.endsWith("/index.html")) {
  var newPath = window.location.pathname.replace("/index.html", "");
  window.history.replaceState({}, document.title, newPath);
}

if (window.location.pathname.endsWith("/projects.html")) {
  var newPath = window.location.pathname.replace("/projects.html", "/myworks");
  window.history.replaceState({}, document.title, newPath);
}

if (window.location.pathname.endsWith("/contact.html")) {
  var newPath = window.location.pathname.replace("/contact.html", "/contactme");
  window.history.replaceState({}, document.title, newPath);
}
