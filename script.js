window.scrollTo(0, 0);

{
document.getElementById("landing").style.opacity = "1";
document.getElementById("about").style.opacity = "0";
document.getElementById("portfolio").style.opacity = "0";
document.getElementById("contact").style.opacity = "0";
}

document.getElementById("land").addEventListener("click", () => {
  document.getElementById("landing").style.opacity = "1";
  document.getElementById("about").style.opacity = "0";
  document.getElementById("portfolio").style.opacity = "0";
  document.getElementById("contact").style.opacity = "0";
  window.scrollTo(0, 0);
});

document.getElementById("aboot").addEventListener("click", () => {
  document.getElementById("landing").style.opacity = "0";
  document.getElementById("about").style.opacity = "1";
  document.getElementById("portfolio").style.opacity = "0";
  document.getElementById("contact").style.opacity = "0";
  window.scrollTo(0, 0);
});

document.getElementById("port").addEventListener("click", () => {
  document.getElementById("landing").style.opacity = "0";
  document.getElementById("about").style.opacity = "0";
  document.getElementById("portfolio").style.opacity = "1";
  document.getElementById("contact").style.opacity = "0";
  window.scrollTo(0, 0);
});

document.getElementById("cont").addEventListener("click", () => {
  document.getElementById("landing").style.opacity = "0";
  document.getElementById("about").style.opacity = "0";
  document.getElementById("portfolio").style.opacity = "0";
  document.getElementById("contact").style.opacity = "1";
  window.scrollTo(0, 0);
});
