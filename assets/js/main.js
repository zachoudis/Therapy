/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $main = $("#main");

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: ["361px", "480px"],
    xxsmall: [null, "360px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Nav.
  var $nav = $("#nav");

  if ($nav.length > 0) {
    // Shrink effect.
    $main.scrollex({
      mode: "top",
      enter: function () {
        $nav.addClass("alt");
      },
      leave: function () {
        $nav.removeClass("alt");
      },
    });

    // Links.
    var $nav_a = $nav.find("a");

    $nav_a
      .scrolly({
        speed: 1000,
        offset: function () {
          return $nav.height();
        },
      })
      .on("click", function () {
        var $this = $(this);

        // External link? Bail.
        if ($this.attr("href").charAt(0) != "#") return;

        // Deactivate all links.
        $nav_a.removeClass("active").removeClass("active-locked");

        // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
        $this.addClass("active").addClass("active-locked");
      })
      .each(function () {
        var $this = $(this),
          id = $this.attr("href"),
          $section = $(id);

        // No section for this link? Bail.
        if ($section.length < 1) return;

        // Scrollex.
        $section.scrollex({
          mode: "middle",
          initialize: function () {
            // Deactivate section.
            if (browser.canUse("transition")) $section.addClass("inactive");
          },
          enter: function () {
            // Activate section.
            $section.removeClass("inactive");

            // No locked links? Deactivate all links and activate this section's one.
            if ($nav_a.filter(".active-locked").length == 0) {
              $nav_a.removeClass("active");
              $this.addClass("active");
            }

            // Otherwise, if this section's link is the one that's locked, unlock it.
            else if ($this.hasClass("active-locked"))
              $this.removeClass("active-locked");
          },
        });
      });
  }

  // Set current year in footer
  document.addEventListener("DOMContentLoaded", function () {
    var yearSpan = document.getElementById("footer-year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  });

  // Scrolly.
  $(".scrolly").scrolly({
    speed: 500,
    offset: function () {
      return $("#nav").height() - 70;
    },
  });

  // Mobile Menu (Panel)
  // This creates a side-scrolling menu of the existing #nav links
  $(
    '<div id="titleBar">' +
      '<a href="#navPanel" class="toggle"></a>' +
      '<span class="title" data-i18n="header_title">' +
      $("#header h1").text() +
      "</span>" +
      "</div>",
  ).appendTo($body);

  $(
    '<div id="navPanel">' +
      "<nav>" +
      $("#nav").navList() + // Grab existing links
      '<div class="nav-lang">' + // Mirror language switcher
      $(".nav-lang").html() +
      "</div>" +
      "</nav>" +
      "</div>",
  )
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnEscape: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: "left",
      target: $body,
      visibleClass: "navPanel-visible",
    });
})(jQuery);

/* Collapsible "My work is" section on mobile. It hides the three topics and
   the Couples & Friends, Families and Individuals sections until opened.
   The click listener sits on the .intro-work container, which is never replaced.
   The CSS reads the state from aria-expanded on the button. i18n.js replaces the
   button (on page load and on every language switch), so the state is also kept
   in `isOpen` and re-applied whenever that happens. */
(function () {
  var introWork = document.querySelector("#intro .intro-work");
  if (!introWork) return;

  var mobile = window.matchMedia("(max-width: 980px)");
  var hiddenSections = ["#first", "#second", "#individual"];
  var isOpen = false;

  function applyState() {
    var button = introWork.querySelector(".intro-section-title");
    if (button) button.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  function setOpen(open) {
    isOpen = open;
    applyState();
  }

  // Re-apply the state after i18n.js swaps the inner HTML
  new MutationObserver(applyState).observe(introWork, { childList: true });

  introWork.addEventListener("click", function (event) {
    var button = event.target.closest(".intro-section-title");
    if (!button || !mobile.matches) return; // on desktop everything is always visible

    setOpen(!isOpen);
  });

  // A menu link (or a shared URL) pointing to a hidden section must open the
  // collapsible first, otherwise the browser has nothing to scroll to.
  function openIfHiddenTarget(hash) {
    if (mobile.matches && hiddenSections.indexOf(hash) !== -1) setOpen(true);
  }

  document.addEventListener(
    "click",
    function (event) {
      var link = event.target.closest('a[href^="#"]');
      if (link) openIfHiddenTarget(link.getAttribute("href"));
    },
    true, // capture phase: runs before the mobile menu panel handles the click
  );

  window.addEventListener("hashchange", function () {
    openIfHiddenTarget(window.location.hash);
  });

  // Page opened with e.g. #first in the URL: the browser tried to scroll
  // before the section was visible, so open it and scroll again.
  // Waits for DOMContentLoaded so i18n.js (loaded after this file) has run.
  document.addEventListener("DOMContentLoaded", function () {
    var initialHash = window.location.hash;
    if (mobile.matches && hiddenSections.indexOf(initialHash) !== -1) {
      setOpen(true);
      document.querySelector(initialHash).scrollIntoView();
    }
  });
})();
