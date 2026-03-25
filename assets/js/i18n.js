/**
 * i18n.js — Language switching and translations for Meike Behrends therapy website.
 *
 * Supported languages: "en" (English) and "de" (German).
 * The active language is persisted in localStorage under the key "site-language".
 *
 * HTML usage:
 *   data-i18n="key"       → sets element.textContent
 *   data-i18n-html="key"  → sets element.innerHTML (use only for trusted markup, e.g. links)
 */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
     Translations dictionary
     ------------------------------------------------------------------ */
  const translations = {
    en: {
      header_title: "Systemic Counseling and Therapy",
      header_subtitle: "Meike Behrends",

      nav_intro: "Introduction",
      nav_first: "Pairs",
      nav_second: "Family",
      nav_individual: "Individuals",
      nav_prices: "Prices",
      nav_cta: "Contact Me",

      intro_text:
        "Ich unterstütze Sie in herausfordernden Lebensphasen, bei Krisen und Veränderungen. Im Mittelpunkt meiner Arbeit steht die Überzeugung, dass jeder Mensch die Fähigkeit zur Veränderung und Entwicklung bereits in sich trägt. Manchmal braucht es lediglich einen geschützten Raum, neue Perspektiven und eine wertschätzende Begleitung, um diese Ressourcen wieder zugänglich zu machen. Mein Angebot richtet sich an Einzelpersonen, Paare, Familien sowie an Menschen in unterschiedlichsten Lebens- und Beziehungsformen. Ich heiße Sie willkommen – unabhängig von Ihrer Herkunft, Ihrer Religion oder der Art, wie Sie Ihr Leben gestalten. Ich arbeite auf Englisch und auf Deutsch.",

      first_title: "Pairs",
      feature1_text:
        "Ich unterstütze Paare die sich in einer Krise, in einer Umbruch – oder Trennungsphase befinden, oder die ihre Elternrolle reflektieren möchten. In Beziehungen befinden wir uns in immer wiederkehrenden Dynamiken, die alleine schwer zu durchbrechen sind. Ich unterstütze Sie dabei, Ihre eigenen festgefahrenen Muster zu erkennen, die Sichtweisen des*der anderen kennenzulernen und schließlich Ihre Interaktionen Schritt für Schritt zu verändern. Dabei arbeite ich mit dem emotionsfokussierten Ansatz der zum Ziel hat, die Gefühle und Bedürfnisse, die diesen Dynamiken zugrunde liegen, aufzudecken. Wenn diese gesehen und gewertschätzt werden, kann eine neue Art von Sicherheit und Verbindung entstehen. Der Fokus liegt dabei nicht auf Schuld, sondern auf Verständnis und der Entwicklung von gemeinsamen Lösungswegen. Sollten Sie sich für eine Trennung entscheiden, biete ich Ihnen auch im Trennungsprozess Unterstützung und Begleitung.",

      second_title: "Family",
      second_intro:
        "In der systemischen Familienarbeit schaue ich mit Ihnen darauf, wie einzelne Belastungen mit dem Miteinander in der Familie verbunden sind. Symptome eines Familienmitglieds sind oft Hinweise auf gemeinsame Muster oder Spannungen – nicht auf ein individuelles Problem. Auch Veränderungen, wie beispielsweise die Geburt eines Kindes oder Krisen, sorgen dafür, dass sich die Familie als System neu ordnet und unter Druck geraten kann. Gemeinsam entdecken wir diese Zusammenhänge, entwickeln neue Perspektiven und stärken so das Miteinander und die Ressourcen der ganzen Familie.",

      individual_title: "Individuals",
      individual_text:
        "Ich arbeite selbstständig als Systemische Therapeutin und Beraterin und bin anerkannt durch die Systemische Gesellschaft (SG), dem Dachverband Systemischer Therapeuten. Neben meiner freiberuflichen Tätigkeit arbeite ich seit vielen Jahren in einer Beratungsstelle für geflüchtete Menschen in Berlin und habe in der Vergangenheit mit Familien im Rahmen der Familienhilfe zusammengearbeitet. Aktuell bilde ich mich weiter zur traumazentrierten Fachberaterin. Ich bin Politik- und Sozialwissenschaftlerin.",

      prices_title: "Prices",
      price_title_couples: "Couple Therapy",
      price_value_couples: "145 € · 90 min.",
      price_desc_couples:
        "Space for a short explanation of how sessions work, what themes can be addressed, and what clients can expect from the process.",
      price_title_individual: "Individual Therapy",
      price_value_individual: "100 € · 60 min.",
      price_desc_individual:
        "Space for a short explanation about one-to-one support, personal topics, and the therapeutic focus of the sessions.",
      price_title_coaching: "Individual Coaching",
      price_value_coaching: "100 € · 60 min.",
      price_desc_coaching:
        "Space for a short explanation about coaching topics such as professional development, decision-making, or life transitions.",
      price_note_vat:
        'As a small-scale entrepreneur, my fees are exempt from VAT ("Kleinunternehmerregel" according to § 19 UStG).',
      price_note_insurance:
        "Please note that couple therapy, individual therapy, and individual coaching are not covered by German statutory health insurance.",

      cta_title: "Contact Me",
      cta_text:
        "I would be happy to hear from you. You can reach me by phone, email, or at my practice in Berlin.",
      contact_location_title: "Location",
      contact_location_text: "Skalitzer Straße 100<br />10997 Berlin",
      contact_phone_title: "Phone",
      contact_phone_text: '<a href="tel:+491632721699">0163 2721699</a>',
      contact_email_title: "E-mail",
      contact_email_text:
        '<a href="mailto:info@example.com">info@example.com</a>',
      footer_imprint: "Impressum",
      footer_privacy: "Privacy Policy",
    },

    de: {
      header_title: "Systemische Beratung und Therapie",
      header_subtitle: "Meike Behrends",

      nav_intro: "Einführung",
      nav_first: "Paare",
      nav_second: "Familien",
      nav_individual: "Einzelpersonen",
      nav_prices: "Preise",
      nav_cta: "Über mich",

      intro_text:
        "Ich unterstütze Sie in herausfordernden Lebensphasen, bei Krisen und Veränderungen. Im Mittelpunkt meiner Arbeit steht die Überzeugung, dass jeder Mensch die Fähigkeit zur Veränderung und Entwicklung bereits in sich trägt. Manchmal braucht es lediglich einen geschützten Raum, neue Perspektiven und eine wertschätzende Begleitung, um diese Ressourcen wieder zugänglich zu machen. Mein Angebot richtet sich an Einzelpersonen, Paare, Familien sowie an Menschen in unterschiedlichsten Lebens- und Beziehungsformen. Ich heiße Sie willkommen – unabhängig von Ihrer Herkunft, Ihrer Religion oder der Art, wie Sie Ihr Leben gestalten. Ich arbeite auf Englisch und auf Deutsch.",

      first_title: "Paare",
      feature1_text:
        "Ich unterstütze Paare die sich in einer Krise, in einer Umbruch – oder Trennungsphase befinden, oder die ihre Elternrolle reflektieren möchten. In Beziehungen befinden wir uns in immer wiederkehrenden Dynamiken, die alleine schwer zu durchbrechen sind. Ich unterstütze Sie dabei, Ihre eigenen festgefahrenen Muster zu erkennen, die Sichtweisen des*der anderen kennenzulernen und schließlich Ihre Interaktionen Schritt für Schritt zu verändern. Dabei arbeite ich mit dem emotionsfokussierten Ansatz der zum Ziel hat, die Gefühle und Bedürfnisse, die diesen Dynamiken zugrunde liegen, aufzudecken. Wenn diese gesehen und gewertschätzt werden, kann eine neue Art von Sicherheit und Verbindung entstehen. Der Fokus liegt dabei nicht auf Schuld, sondern auf Verständnis und der Entwicklung von gemeinsamen Lösungswegen. Sollten Sie sich für eine Trennung entscheiden, biete ich Ihnen auch im Trennungsprozess Unterstützung und Begleitung.",

      second_title: "Familien",
      second_intro:
        "In der systemischen Familienarbeit schaue ich mit Ihnen darauf, wie einzelne Belastungen mit dem Miteinander in der Familie verbunden sind. Symptome eines Familienmitglieds sind oft Hinweise auf gemeinsame Muster oder Spannungen – nicht auf ein individuelles Problem. Auch Veränderungen, wie beispielsweise die Geburt eines Kindes oder Krisen, sorgen dafür, dass sich die Familie als System neu ordnet und unter Druck geraten kann. Gemeinsam entdecken wir diese Zusammenhänge, entwickeln neue Perspektiven und stärken so das Miteinander und die Ressourcen der ganzen Familie.",

      individual_title: "Einzelpersonen",
      individual_text:
        "Ich arbeite selbstständig als Systemische Therapeutin und Beraterin und bin anerkannt durch die Systemische Gesellschaft (SG), dem Dachverband Systemischer Therapeuten. Neben meiner freiberuflichen Tätigkeit arbeite ich seit vielen Jahren in einer Beratungsstelle für geflüchtete Menschen in Berlin und habe in der Vergangenheit mit Familien im Rahmen der Familienhilfe zusammengearbeitet. Aktuell bilde ich mich weiter zur traumazentrierten Fachberaterin. Ich bin Politik- und Sozialwissenschaftlerin.",

      prices_title: "Preise",
      price_title_couples: "Paartherapie",
      price_value_couples: "145 € · 90 Min.",
      price_desc_couples:
        "Hier ist Platz für einen kurzen Erklärungstext dazu, wie die Sitzungen ablaufen, welche Themen Raum haben und was Klient*innen erwarten können.",
      price_title_individual: "Einzeltherapie",
      price_value_individual: "100 € · 60 Min.",
      price_desc_individual:
        "Hier ist Platz für einen kurzen Erklärungstext zu persönlicher Begleitung, individuellen Themen und dem therapeutischen Fokus der Sitzungen.",
      price_title_coaching: "Einzelcoaching",
      price_value_coaching: "100 € · 60 Min.",
      price_desc_coaching:
        "Hier ist Platz für einen kurzen Erklärungstext zu Coaching-Themen wie beruflicher Entwicklung, Entscheidungsfindung oder Übergangsphasen im Leben.",
      price_note_vat:
        "Als Kleinunternehmerin sind meine Honorare von der Umsatzsteuer befreit (Kleinunternehmerregelung gemäß § 19 UStG).",
      price_note_insurance:
        "Bitte beachten Sie, dass Paartherapie, Einzeltherapie und Einzelcoaching nicht von den gesetzlichen Krankenkassen übernommen werden.",

      cta_title: "Kontakt",
      cta_text:
        "Ich freue mich, von Ihnen zu hören. Sie erreichen mich telefonisch, per E-Mail oder in meiner Praxis in Berlin.",
      contact_location_title: "Standort",
      contact_location_text: "Skalitzer Straße 100<br />10997 Berlin",
      contact_phone_title: "Telefon",
      contact_phone_text: '<a href="tel:+491632721699">0163 2721699</a>',
      contact_email_title: "E-Mail",
      contact_email_text:
        '<a href="mailto:info@example.com">info@example.com</a>',
      footer_imprint: "Impressum",
      footer_privacy: "Datenschutzerklärung",
    },
  };

  /* ------------------------------------------------------------------
     Flag SVG assets (inline — no extra network requests)
     Clicking the button switches to the OTHER language:
       German UI  → show UK flag  → click → switch to English
       English UI → show DE flag  → click → switch to German
     ------------------------------------------------------------------ */
  const FLAG_SVG = {
    de: '<svg fill="none" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid" style="overflow:hidden"><g><g id="mc_36_flag_Germany"><path d="m1.12 24.26c2.543 6.855 9.14 11.74 16.88 11.74s14.337-4.885 16.88-11.74l-16.88-1.564z" fill="#ffda44"></path><path d="m18 0c-7.74 0-14.337 4.885-16.88 11.74l16.88 1.564 16.88-1.565c-2.543-6.854-9.14-11.739-16.88-11.739z" fill="#3d3d3d"></path><path d="m1.12001 11.74c-.742734 2.0034-1.12201193 4.1233-1.12000108 6.26-.00212985 2.137.37715008 4.2573 1.12000108 6.261h33.75999c.7429-2.0037 1.1221-4.124 1.12-6.261.0021-2.137-.3771-4.2572-1.12-6.261h-33.75999z" fill="#d80027"></path></g></g></svg>',
    en: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" role="img" preserveAspectRatio="xMidYMid" style="overflow:hidden"><g><rect width="36" height="36" fill="#012169"/><path stroke="#fff" stroke-width="7" d="M0 0L36 36M36 0L0 36"/><path stroke="#C8102E" stroke-width="4" d="M0 0L36 36M36 0L0 36"/><path stroke="#fff" stroke-width="10" d="M18 0v36M0 18h36"/><path stroke="#C8102E" stroke-width="6" d="M18 0v36M0 18h36"/></g></svg>',
  };

  /* ------------------------------------------------------------------
     Internal helpers
     ------------------------------------------------------------------ */
  function updateLangSwitchUi(lang) {
    const btn = document.getElementById("lang-switch-btn");
    const wrap = document.getElementById("lang-switch-flag");
    if (!btn || !wrap) return;

    const isGerman = lang === "de";
    // Show the flag of the language we will switch *to*
    wrap.innerHTML = isGerman ? FLAG_SVG.en : FLAG_SVG.de;
    btn.setAttribute(
      "aria-label",
      isGerman ? "Switch to English" : "Switch to German",
    );
    btn.setAttribute("title", isGerman ? "English" : "Deutsch");
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    updateLangSwitchUi(lang);
  }

  /* ------------------------------------------------------------------
     Public API
     ------------------------------------------------------------------ */
  function setLanguage(lang) {
    localStorage.setItem("site-language", lang);
    applyTranslations(lang);
  }

  function toggleLanguage() {
    const current = document.documentElement.lang || "en";
    setLanguage(current === "en" ? "de" : "en");
  }

  // Expose toggleLanguage globally so the inline onclick handler works
  window.toggleLanguage = toggleLanguage;

  /* ------------------------------------------------------------------
     Initialise on load
     ------------------------------------------------------------------ */
  var saved = localStorage.getItem("site-language");
  var browserLang = (navigator.language || "en").startsWith("de") ? "de" : "en";
  applyTranslations(saved || browserLang);
})();
