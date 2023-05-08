import translations from "./translations.js";

let titleElement = document.querySelector("head title");

titleElement.textContent = titleElement.textContent.toLowerCase();

if (titleElement.textContent === "durzade") titleElement.textContent = "home";

let page = titleElement.textContent;

console.log(page);

const languageSelectors = document.querySelectorAll(".lang-selector");

languageSelectors.forEach((languageSelector) => {
  languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[page][language][translationKey];
  });

  document.dir = language === "ar" ? "rtl" : "ltr";
};
