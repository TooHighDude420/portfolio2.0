const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  let scrollY = window.scrollY;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;

    const sectionTop = (current.getBoundingClientRect().top + window.scrollY) - 50;
    sectionId = current.getAttribute("id");

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector("header a[href*=" + sectionId + "] button").classList.add("active");
    } else {
      document.querySelector("header a[href*=" + sectionId + "] button").classList.remove("active");
    }
  });
}