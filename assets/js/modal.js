/**
 * modal.js — lightweight modal for inline content.
 * Usage: <a data-modal-target="site-modal" data-modal-title="Impressum">...</a>
 */
(function () {
  "use strict";

  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }

  function openModal(modal) {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    var dialog = qs(".modal__dialog", modal);
    if (dialog) dialog.focus();
  }

  function closeModal(modal) {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("site-modal");
    if (!modal) return;

    var titleEl = document.getElementById("site-modal-title");

    document.addEventListener("click", async function (e) {
      var target = e.target;
      if (!(target instanceof Element)) return;

      // Close actions
      if (target.closest("[data-modal-close='true']") && modal.classList.contains("is-open")) {
        e.preventDefault();
        closeModal(modal);
        return;
      }

      // Open actions
      var link = target.closest("[data-modal-target]");
      if (!link) return;

      e.preventDefault();

      var title = link.getAttribute("data-modal-title") || link.textContent || "";

      if (titleEl) titleEl.textContent = title.trim();

      openModal(modal);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("is-open")) {
        closeModal(modal);
      }
    });
  });
})();

