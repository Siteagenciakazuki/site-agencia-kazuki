(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function revealNow(el) {
    var delay = el.getAttribute("data-reveal-delay") || 0;
    if (reduceMotion) {
      el.classList.add("is-visible");
      return;
    }
    el.style.transitionDelay = delay + "ms";
    // requestAnimationFrame garante que o navegador já pintou o estado
    // inicial (opacity:0) antes de aplicar a classe — sem isso a transição
    // não dispara.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        el.classList.add("is-visible");
      });
    });
  }

  // Elementos do hero (acima da dobra) disparam o fade-in + zoom no load,
  // não no scroll.
  document.querySelectorAll('[data-reveal="mount"]').forEach(revealNow);

  // Demais elementos .reveal disparam ao entrar na viewport.
  var scrollTargets = document.querySelectorAll('.reveal:not([data-reveal="mount"])');
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            revealNow(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    scrollTargets.forEach(function (el) { observer.observe(el); });
  } else {
    scrollTargets.forEach(revealNow);
  }

  // Menu mobile
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
