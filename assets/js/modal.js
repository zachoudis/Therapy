/**
 * modal.js — lightweight modal.
 * Usage:
 *  - Inline modal: <a data-modal-target="site-modal" data-modal-title="...">...</a>
 *  - Remote modal: <a href="impressum.html" data-modal-target="site-modal" data-modal-url="impressum.html">...</a>
 *
 * Progressive enhancement:
 *  - If remote loading fails (e.g. file://), falls back to normal navigation via href.
 */
(function () {
  "use strict";

  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }

  function setLoading(modal, title, html) {
    var titleEl = document.getElementById("site-modal-title");
    var contentEl = document.getElementById("site-modal-content");
    if (titleEl && title) titleEl.textContent = title;
    if (contentEl) contentEl.innerHTML = html || "<p>Loading…</p>";
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function extractMainHtml(doc) {
    // Prefer <main id="main">...</main>, fall back to <main>.
    var main = doc.querySelector("main#main") || doc.querySelector("main");
    return main ? main.innerHTML : "";
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
    var contentEl = document.getElementById("site-modal-content");

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
      var url = link.getAttribute("data-modal-url");

      if (titleEl) titleEl.textContent = title.trim();
      if (contentEl && url) contentEl.innerHTML = "<p>Loading…</p>";

      openModal(modal);

      if (!url) return;

      try {
        var res = await fetch(url, { credentials: "same-origin" });
        if (!res.ok) throw new Error("HTTP " + res.status);
        var htmlText = await res.text();
        var parser = new DOMParser();
        var doc = parser.parseFromString(htmlText, "text/html");
        var mainHtml = extractMainHtml(doc);

        if (!mainHtml) {
          if (contentEl) {
            contentEl.innerHTML =
              "<p>Could not load content.</p><p><a class=\"button\" href=\"" +
              escapeHtml(url) +
              "\">Open page</a></p>";
          }
          return;
        }

        if (contentEl) contentEl.innerHTML = mainHtml;
      } catch (err) {
        // Fallback to normal navigation (common on file:// where fetch is blocked)
        var href = link.getAttribute("href");
        if (href) window.location.href = href;
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("is-open")) {
        closeModal(modal);
      }
    });
  });
})();

