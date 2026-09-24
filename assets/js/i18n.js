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
      header_title: "Systemic Therapy in Berlin",
      header_subtitle: "Meike Behrends & Jan Drunkenmölle-Nazeri",

      nav_home: "Home",
      nav_intro: "What I offer",
      nav_first: "Couples & Friends",
      nav_second: "Families",
      nav_individual: "Individuals",
      nav_supervision: "Supervision",
      nav_prices: "Prices",
      nav_cta: "About Us",

      intro_bio:
        "<p>I’m <strong>Meike Behrends</strong>, a systemic therapist in Berlin-Kreuzberg, and I support you through crises and change processes. Together we look at what is currently weighing on you—whether as a couple, as a family, in friendships, or individually. As a systemic therapist, I assume that you already carry the resources for change within you. My role is to support you on equal footing in opening up new perspectives and reviewing old beliefs. This can help you gain more clarity about inner patterns and roles, and regain room for action.</p><p>I aim for a counseling space where diversity is seen and valued as a strength—regardless of sexual orientation, origin, gender, or lifestyle. I work in Berlin-Kreuzberg or online, in English and German.</p>",
      intro_work:
        '<p class="intro-section-title"><strong>My work is</strong></p><div class="work-pillars"><div class="pillar"><div class="pillar-icon"><span class="icon solid fa-link"></span></div><strong>Systemic</strong><p>We look at your concerns in the context of your relationships and life circumstances. Which roles and patterns do you find yourself returning to? What feels difficult right now? It’s important to me to also focus on your strengths so you can reconnect with your inner resources.</p></div><div class="pillar"><div class="pillar-icon"><span class="icon solid fa-heart"></span></div><strong>Emotion-focused (EFT)</strong><p>Conflicts in relationships often arise not only from what is said, but from deeper emotional needs such as closeness, safety, and recognition. In conflict these needs can be covered over, and it can feel hard to sense and express them. When you regain access to these needs, new connection can become possible.</p></div><div class="pillar"><div class="pillar-icon"><span class="icon solid fa-leaf"></span></div><strong>Trauma-sensitive</strong><p>I am attentive and sensitive to the effects of distressing experiences. Your personal boundaries, your experiences, and your pace are central. It matters to me that you can experience stability and safety again.</p></div></div>',

      first_title: "Couples & Friends",
      feature1_text:
        '<p>In relationships we often find ourselves in recurring—and sometimes distressing—dynamics that are difficult to change alone. I support you in recognizing stuck patterns, understanding each other’s inner experience, and changing interactions step by step.</p><p>I work with the Emotionally Focused Therapy approach (EFT). The aim is to uncover the feelings and needs that underlie these dynamics. When they are seen and appreciated, a new sense of safety and connection can emerge. The focus is not on blame, but on understanding and developing shared solutions.</p><p>If you decide to separate, I also offer support and guidance through the separation process.</p><div class="price-info"><strong>Session length & fee</strong>90 min – 145 €</div><p><strong>Topics</strong></p><ul><li>Desire for more closeness and understanding in the relationship</li><li>Understanding and changing recurring conflicts and roles</li><li>Having a baby and changes in the partnership</li><li>Sexuality</li><li>Thoughts of separation and separation support</li></ul>',

      second_title: "Families",
      second_intro:
        '<p>Concerns or symptoms of one family member are often not an individual problem, but signals of shared patterns or tension in the family system. Changes such as the birth of a child, illness, or loss can require the family to reorganize and can create pressure.</p><p>Together we explore these connections and previously unspoken needs, develop new perspectives, and strengthen cooperation within the family. I work in a multi-partial way, meaning I take each involved person’s perspective seriously and with appreciation.</p><p>I enjoy working with different systems, for example adult siblings, parent–child constellations, chosen family, and co-parenting.</p><div class="price-info"><strong>Session length & fee</strong>90 min – 145 €</div><p><strong>Topics</strong></p><ul><li>Conflicts in parenting</li><li>Family crises such as loss, abuse, or illness</li><li>Coping with medical conditions and psychological stress in the family</li><li>Adolescence and separation/individuation</li></ul>',

      individual_title: "Individuals",
      individual_text:
        '<p>My services are for people who feel stuck, overwhelmed, or are going through a personal crisis.</p><p>How we perceive ourselves and relate to ourselves is often shaped by beliefs and experiences from our family of origin. What used to be helpful or necessary in the past can limit us today and make change harder. That’s why we look together at your relationships with other people as well as your relationship with yourself.</p><div class="price-info"><strong>Session length & fee</strong>60 min – 90 €</div><p><strong>Possible topics</strong></p><ul><li>Understanding your roles in relationships and recurring patterns</li><li>Regaining access to your inner strength and experiencing more self-efficacy</li><li>Noticing and setting boundaries more clearly</li><li>Processing distressing experiences</li></ul>',

      supervision_title: "Supervision",
      supervision_text:
        "<p>I'm <strong class=\"inline-name\">Jan Drunkenmölle-Nazeri</strong>, systemic counselor* and supervisor* in Berlin-Kreuzberg. For professional and social contexts, I offer supervision for teams, groups, and individuals. This includes, in particular, regular case supervision—happy to meet in person or online, in English or German. For smaller groups and collectives, I offer a limited number of discounted solidarity spots.</p><p>I understand my counseling work as a contribution to personal and collective growth. My role is to hold a space and set a frame on equal footing that supports your own processes and strengthens your ability to act in the long term. Your concerns and goals are at the center of supervision. The aim is personal and collective relief through structured supervision.</p><p>I work from a systemic, trauma- and power-sensitive stance. In a free initial conversation, we can clarify content and framework before you decide to work with me.</p><div class=\"price-info\"><strong>Session length & fee</strong>60 min – 90 €</div>",

      prices_title: "Prices",
      price_title_couples: "Couples & Friends",
      price_value_couples: "145 € · 90 min.",
      price_desc_couples:
        "Emotion-focused, systemic support for couples and close relationships.",
      price_title_individual: "Individual Therapy",
      price_value_individual: "90 € · 60 min.",
      price_desc_individual:
        "Systemic individual sessions for clarity, resources, and change.",
      price_title_coaching: "Families",
      price_value_coaching: "145 € · 90 min.",
      price_desc_coaching: "Systemic family sessions and parenting support.",
      price_title_supervision: "Supervision",
      price_value_supervision: "90 € · 60 min.",
      price_desc_supervision: "Systemic Supervision",
      price_note_vat:
        'As a small-scale entrepreneur, my fees are exempt from VAT ("Kleinunternehmerregel" according to § 19 UStG).',
      price_note_access:
        "<p>It matters to me that people with a limited budget can also access therapy. If your financial situation is currently restricted, please talk to me—we’ll look for a solution together.<br />If you’d like, we can start with a free 15‑minute introductory call to clarify whether my offer is a good fit for you.</p>",

      cta_title: "About Us",
      cta_text:
        '<p class="cta-name">Meike Behrends</p><p>I work independently as a systemic therapist and counselor and am recognized by the Systemische Gesellschaft (SG), the umbrella organization for systemic therapists in Germany. I have also completed a foundational training in Emotionally Focused Couple Therapy (EFT).</p><p>Alongside my private practice, I have worked for many years in a counseling center for refugees in Berlin. Further formative experience comes from supporting families in crisis through social-pedagogical family assistance. Ongoing supervision and intervision are important to me in order to reflect on and continuously develop my work.</p><p>I am currently training further in trauma education. I hold a Bachelor’s and Master’s degree in political and social sciences.</p>',
      cta_text_jan:
        '<p class="cta-name">Jan Drunkenmölle-Nazeri</p><p>I work independently as a systemic counselor* and am recognized by the Systemische Gesellschaft (SG), the umbrella organization for systemic therapists in Germany. Since 2007, I have worked on anti-racism in education policy, including in schools, social work, and social movements. In 2026, I am completing advanced training as a systemic supervisor* at SIA (Systemisches Institut für Achtsamkeit). I hold a Bachelor’s degree in Politics and Philosophy.</p><p>Alongside my freelance work, I have been working since 2018 as a specialist counselor* at a psychosocial center for refugees in Berlin. Collective and power-critical processes in various groups and projects shape my life and flow into my work. Ongoing intervision, teaching supervision, and further training are important to me in order to reflect on and continuously develop my work.</p><p>I am queer. I am white and was socialized male. I engage extensively with racism and hegemonic masculinity, as well as care work as a parent.</p>',
      contact_location_title: "Location",
      contact_location_text: "Kottbusser Damm 94<br />10967 Berlin",
      contact_map_link: "Open in Google Maps",
      contact_phone_title: "Phone",
      contact_phone_text: '<a href="tel:+4917672160724">0176 72160724</a>',
      contact_email_title: "E-mail",
      contact_email_text:
        '<a href="mailto:therapie-behrends@posteo.de">therapie-behrends@posteo.de</a>',
      footer_imprint: "Impressum",
      // Backwards-compat key: some pages may still use data-i18n="footer_impressum"
      footer_impressum: "Impressum",
      footer_privacy: "Privacy Policy",
    },

    de: {
      header_title: "Systemische Beratung, Therapie und Supervision",
      header_subtitle: "Meike Behrends & Jan Drunkenmölle-Nazeri",

      nav_home: "Start",
      nav_intro: "Was wir anbieten",
      nav_first: "Paare und Freund*innen",
      nav_second: "Familien",
      nav_individual: "Einzelpersonen",
      nav_supervision: "Supervision",
      nav_prices: "Preise",
      nav_cta: "Über uns",

      intro_bio:
        "<p>Ich bin <strong>Meike Behrends</strong>, systemische Therapeutin in Berlin-Kreuzberg. Ich begleite Sie in Krisen und Veränderungsprozessen. Gemeinsam schauen wir, was Sie aktuell belastet – ob als Paar, Familie, in Freundschaften oder individuell. Als systemische Therapeutin gehe ich davon aus, dass Sie die Ressourcen für Veränderung bereits in sich tragen. Meine Rolle dabei ist, Sie auf Augenhöhe dabei zu unterstützen, neue Perspektiven einzunehmen und alte Glaubenssätze zu überprüfen. Dadurch können Sie mehr Klarheit über innere Muster und Rollen gewinnen und wieder mehr Handlungsspielraum erlangen. <p>Ich strebe eine Beratung an, in der Vielfalt als Stärke gesehen und geschätzt wird – unabhängig von sexueller Orientierung, Herkunft, Geschlecht oder Lebensmodell. Ich arbeite in Berlin-Kreuzberg oder online, auf Englisch und auf Deutsch.</p></p>",
      intro_work:
        '<p class="intro-section-title"><strong>Meine Arbeit ist</strong></p><div class="work-pillars"><div class="pillar"><div class="pillar-icon"><span class="icon solid fa-link"></span></div><strong>Systemisch</strong><p>Ihr Anliegen betrachten wir gemeinsam im Kontext Ihrer Beziehungen und Lebensumstände. In welchen Rollen und Mustern finden Sie sich häufig wieder? Was fällt Ihnen / ist gerade schwer? Dabei ist es mir wichtig, auch Ihre Stärken in den Blick zu nehmen, damit Sie wieder Zugang zu Ihrer inneren Kraft finden.</p></div><div class="pillar"><div class="pillar-icon"><span class="icon solid fa-heart"></span></div><strong>Emotionsfokussiert</strong><p>Konflikte in Beziehungen entstehen oft nicht nur durch das, was gesagt wird, sondern durch tieferliegende emotionale Bedürfnisse wie der Wunsch nach Nähe, Sicherheit und Anerkennung. Häufig werden diese Bedürfnisse in Konflikten überlagert und es fällt schwer, sie zu spüren und zu formulieren. Wenn Sie wieder Zugang zu diesen Bedürfnissen bekommen, kann neue Verbindung in der Beziehung entstehen.</p></div><div class="pillar"><div class="pillar-icon"><span class="icon solid fa-leaf"></span></div><strong>Traumasensibel</strong><p>Ich bin achtsam und sensibel für die Auswirkungen belastender Erlebnisse. Dabei stehen Ihre persönlichen Grenzen, Ihre Erfahrungen und Ihr Tempo im Mittelpunkt. Mir ist es wichtig, dass Sie wieder Stabilität und Sicherheit erleben.</p></div></div>',

      first_title: "Paare und Freund*innen",
      feature1_text:
        '<p>In Beziehungen befinden wir uns in immer wiederkehrenden und häufig belastenden Dynamiken, die alleine schwer zu durchbrechen sind. Ich unterstütze Sie dabei, festgefahrene Muster zu erkennen, das innere Erleben des*der anderen kennenzulernen und schließlich Ihre Interaktionen Schritt für Schritt zu verändern.</p><p>Dabei arbeite ich mit dem emotionsfokussierten Ansatz (EFT), der zum Ziel hat, die Gefühle und Bedürfnisse aufzudecken, die diesen Dynamiken zugrunde liegen. Wenn diese gesehen und gewertschätzt werden, kann eine neue Art von Sicherheit und Verbindung entstehen. Der Fokus liegt dabei nicht auf Schuld, sondern auf Verständnis und der Entwicklung von gemeinsamen Lösungswegen.</p><p>Sollten Sie sich für eine Trennung entscheiden, biete ich auch im Trennungsprozess Unterstützung und Begleitung an.</p><div class="price-info"><strong>Dauer & Honorar</strong>90 Min – 145 Euro</div><p><strong>Themen</strong></p><ul><li>Wunsch nach mehr Nähe und Verständnis in der Beziehung</li><li>Wiederkehrende Konflikte und Rollen verstehen und verändern</li><li>Geburt eines Kindes und Veränderungen in der Partnerschaft</li><li>Sexualität</li><li>Trennungsgedanken und Trennungsbegleitung</li></ul>',

      second_title: "Familien",
      second_intro:
        '<p>Beschwerden oder Symptome eines Familienmitglieds sind oft kein individuelles Problem, sondern Hinweise auf gemeinsame Muster oder Spannungen im Familiensystem. Auch Veränderungen wie beispielsweise die Geburt eines Kindes, eine Krankheit oder ein Verlust sorgen dafür, dass sich die Familie als System neu ordnet und unter Druck geraten kann.</p><p>Gemeinsam entdecken wir diese Zusammenhänge und bisher unausgesprochene Bedürfnisse, entwickeln neue Perspektiven und stärken so das Miteinander in der Familie. Dabei arbeite ich allparteilich – das bedeutet, dass ich jede beteiligte Person in ihrer Sichtweise ernst nehme und wertschätze.</p><p>Ich arbeite gern mit unterschiedlichen Systemen wie z. B. erwachsenen Geschwistern, Eltern-Kind-Konstellationen, Wahlfamilie oder Co-Eltern...</p><div class="price-info"><strong>Dauer & Honorar</strong>90 Min – 145 Euro</div><p><strong>Themen</strong></p><ul><li>Konflikte in der Elternschaft</li><li>Familiäre Krisen wie z. B. Verlust, Missbrauch, Krankheit</li><li>Umgang mit Erkrankungen und psychischen Belastungen in der Familie</li><li>Adoleszenz und Ablösung</li></ul>',

      individual_title: "Einzelpersonen",
      individual_text:
        '<p>Mein Angebot richtet sich an Menschen, die sich festgefahren, überfordert fühlen oder sich in einer persönlichen Krise befinden.</p><p>Unsere Selbstwahrnehmung und unser Umgang mit uns selbst werden häufig von Überzeugungen und Erfahrungen beeinflusst, die wir in unserer Herkunftsfamilie entwickelt haben. Was früher hilfreich oder notwendig war, kann uns heute einschränken und Veränderungen behindern. Deshalb schauen wir gemeinsam auf Ihre Beziehungen zu anderen Menschen als auch zu sich selbst.</p><div class="price-info"><strong>Dauer & Honorar</strong>60 Min – 90 Euro</div><p><strong>Themen</strong></p><ul><li>Eigene Rollen in Beziehungen und festgefahrene Muster besser verstehen</li><li>Zugang zu eigener Kraft zurückgewinnen und mehr Selbstwirksamkeit erfahren</li><li>Eigene Grenzen bewusster wahrnehmen und setzen</li><li>Belastende Erlebnisse verarbeiten</li></ul>',

      supervision_title: "Supervision",
      supervision_text:
        "<p>Ich bin <strong class=\"inline-name\">Jan Drunkenmölle-Nazeri</strong>, systemischer Berater* und Supervisor* in Berlin-Kreuzberg. Für berufliche und soziale Kontexte biete ich Supervision für Teams, Gruppen und Einzelpersonen an. Das umfasst insbesondere auch regelmäßige Fallsupervision. Gerne gemeinsam vor Ort oder online, auf Englisch und auf Deutsch. Für kleinere Gruppe und Kollektive stelle ich eine begrenzte Anzahl an vergünstigten Soli-Plätzen zur Verfügung.</p><p>Ich verstehe meine Beratungsarbeit als Beitrag für persönliche und kollektive Weiterentwicklung. Meine Rolle dabei ist, auf Augenhöhe einen Raum zu halten und einen Rahmen zu setzen, der Ihre eigenen Prozesse unterstützt und Ihre Handlungsfähigkeit langfristig stärkt. Ihre Anliegen und Ziele stehen im Mittelpunkt der Supervision. Ziel ist die persönliche und kollektive Entlastung durch eine strukturierte Supervision.</p><p>Ich arbeite aus einer systemischen, trauma- und machtsensiblen Grundhaltung heraus. In einem kostenlosen Vorgespräch können wir Inhalte und Rahmenbedingungen klären bevor Sie sich für die Zusammenarbeit mit mir entscheiden.</p><div class=\"price-info\"><strong>Dauer & Honorar</strong>60 Min – 90 Euro</div>",

      prices_title: "Preise",
      price_title_couples: "Paare und Freund*innen",
      price_value_couples: "145 € · 90 Min.",
      price_desc_couples:
        "Emotionsfokussierte, systemische Begleitung für Paare und enge Beziehungen.",
      price_title_individual: "Einzeltherapie",
      price_value_individual: "90 € · 60 Min.",
      price_desc_individual:
        "Systemische Einzeltermine für Klarheit, Ressourcen und Veränderung.",
      price_title_coaching: "Familien",
      price_value_coaching: "145 € · 90 Min.",
      price_desc_coaching:
        "Systemische Familiensitzungen und Unterstützung in der Elternschaft.",
      price_title_supervision: "Supervision",
      price_value_supervision: "90 € · 60 Min.",
      price_desc_supervision: "Systemische Supervision",
      price_note_vat:
        "Als Kleinunternehmerin sind meine Honorare von der Umsatzsteuer befreit (Kleinunternehmerregelung gemäß § 19 UStG).",
      price_note_access:
        "<p>Mir ist es wichtig, dass auch Personen mit begrenztem Budget Therapie bekommen können. Sollten Ihre finanziellen Möglichkeiten gerade eingeschränkt sein, sprechen Sie mich bitte an. Wir finden gemeinsam eine Lösung.<br />Gerne können wir vorab ein kostenloses, 15‑minütiges Vorgespräch führen, um zu klären, ob mein Angebot das Richtige für Sie ist.</p>",

      cta_title: "Über uns",
      cta_text:
        '<p class="cta-name">Meike Behrends</p><p>Ich arbeite selbstständig als Systemische Therapeutin und Beraterin und bin anerkannt durch die Systemische Gesellschaft (SG), dem Dachverband Systemischer Therapeut*innen. Außerdem habe ich ein Basistraining in emotionsfokussierter Paartherapie (EFT) abgeschlossen.</p><p>Neben meiner freiberuflichen Tätigkeit arbeite ich seit vielen Jahren in einer Beratungsstelle für geflüchtete Menschen in Berlin. Prägende Erfahrungen habe ich außerdem bei der Arbeit mit Familien in Krisen im Rahmen der Sozialpädagogischen Familienhilfe gesammelt. Fortlaufende Supervision und Intervision sind mir wichtig, um meine Arbeit zu reflektieren und weiterzuentwickeln.</p><p>Aktuell bilde ich mich zur Traumapädagogin weiter. Ich habe einen Bachelor- und Masterabschluss in Politik- und Sozialwissenschaften.</p>',
      cta_text_jan:
        '<p class="cta-name">Jan Drunkenmölle-Nazeri</p><p>Ich arbeite selbstständig als Systemischer Berater* und bin anerkannt durch die Systemische Gesellschaft (SG), dem Dachverband Systemischer Therapeut*innen. Seit 2007 arbeite ich bildungspolitisch zu Anti-Rassismus u.a. an Schulen, in der Sozialen Arbeit und sozialen Bewegungen. 2026 schließe ich die Aufbauweiterbildung zur Systemischen Supervisor*in am SIA (Systemisches Institut für Achtsamkeit) ab. Ich habe einen Bachelorabschluss in Politik und Philosophie.</p><p>Neben meiner freiberuflichen Tätigkeit arbeite ich seit 2018 Jahren als Fachberater* in einem Psychosozialen Zentrum für geflüchtete Menschen in Berlin. Kollektive und machtkritische Prozesse in verschiedenen Gruppen und Projekten prägen mein Leben und fließen in meine Arbeit ein. Fortlaufende Intervision, Lehrsupervision und Fortbildungen sind mir wichtig, um meine Arbeit zu reflektieren und weiterzuentwickeln.</p><p>Ich bin queer. Ich bin weiß und männlich sozialisiert. Ich setze mich viel mit Rassismus und hegemonialer Männlichkeit, sowie Sorgearbeit als Elternperson auseinander.</p>',
      contact_location_title: "Standort",
      contact_location_text: "Kottbusser Damm 94<br />10967 Berlin",
      contact_map_link: "In Google Maps öffnen",
      contact_phone_title: "Telefon",
      contact_phone_text: '<a href="tel:+4917672160724">0176 72160724</a>',
      contact_email_title: "E-Mail",
      contact_email_text:
        '<a href="mailto:therapie-behrends@posteo.de">therapie-behrends@posteo.de</a>',
      footer_imprint: "Impressum",
      footer_impressum: "Impressum",
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
    de: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffce00" d="M0 341.333h512V512H0z"/><path d="M0 0h512v170.667H0z"/><path fill="#d00" d="M0 170.667h512v170.666H0z"/></svg>',
    en: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#00247d" d="M0 0h512v512H0z"/><path fill="#fff" d="M512 0v64L320 256l192 192v64h-64L256 320 64 512H0v-64l192-192L0 64V0h64l192 192L448 0z"/><path fill="#cf142b" d="M512 0v16L336 192h-32l192 192v16h-16L288 224v-32L512 0zM0 0l224 224v32L0 32V0zm0 512l224-224v-32L0 480v32zm512 0L288 288v-32l224 224v32z"/><path fill="#fff" d="M208 0h96v512h-96zM0 208h512v96H0z"/><path fill="#cf142b" d="M224 0h64v512h-64zM0 224h512v64H0z"/></svg>',
  };

  /* ------------------------------------------------------------------
     Internal helpers
     ------------------------------------------------------------------ */
  function updateLangSwitchUi(lang) {
    const btns = document.querySelectorAll(".lang-switcher__btn");
    const wraps = document.querySelectorAll(".lang-switcher__icon");
    const labels = document.querySelectorAll(".lang-switcher__label");

    const isGerman = lang === "de";

    wraps.forEach((wrap) => {
      wrap.innerHTML = isGerman ? FLAG_SVG.en : FLAG_SVG.de;
    });

    labels.forEach((label) => {
      label.textContent = isGerman ? "EN" : "DE";
    });

    btns.forEach((btn) => {
      btn.setAttribute(
        "aria-label",
        isGerman ? "Switch to English" : "Switch to German",
      );
      btn.setAttribute("title", isGerman ? "English" : "Deutsch");
    });
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
    const $main = document.getElementById("main");
    const $header = document.getElementById("header");

    // Start fade out
    if ($main) $main.style.opacity = "0";
    if ($header) $header.style.opacity = "0";

    setTimeout(() => {
      localStorage.setItem("site-language", lang);
      applyTranslations(lang);

      // Fade back in
      if ($main) $main.style.opacity = "1";
      if ($header) $header.style.opacity = "1";
    }, 250); // Matches transition duration in site.css
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
