function renderLoader(el, display) {
  const loader = document.createElement("div");
  loader.setAttribute("class", "loader");
  const loaderText = document.createElement("small");
  loaderText.innerHTML = "loading...";
  const loaderContainer = document.createElement("div");
  loaderContainer.style.display = "flex";
  loaderContainer.style.justifyContent = "center";
  loaderContainer.style.alignItems = "center";
  loaderContainer.style.marginTop = "300px";
  loaderContainer.style.gap = "1em";
  loaderContainer.append(loader);
  loaderContainer.append(loaderText);

  document.body.append(loaderContainer);
  setTimeout(() => {
    if (document.readyState == 'complete') {
      document.body.removeChild(loaderContainer);
      el.style.display = display;
    }
  }, 2000);
}
