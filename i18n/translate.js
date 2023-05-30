import translations from "./translations.js";

let titleElement = document.querySelector("head title");

let arabics = document.querySelectorAll(".about-area p");

let page = titleElement.textContent.toLowerCase();

if (page === "durzade") page = "home";
if (page == "salem gold") page = "salemGold";
if (page == "rustic green") page = "rusticGreen";

console.log(page);

const languageSelectors = document.querySelectorAll(".lang-selector");
// const options = document.querySelectorAll(".lang-selector options");

const options = {
  en: [],
  ar: [],
  tr: [],
};

languageSelectors.forEach((e) => {
  options.en.push(e.childNodes[1]);
  options.ar.push(e.childNodes[3]);
  options.tr.push(e.childNodes[5]);
});

const localStorageLang = localStorage.getItem("lang");

if (localStorageLang === "en") options.en.forEach((e) => (e.selected = true));
if (localStorageLang === "ar") options.ar.forEach((e) => (e.selected = true));
if (localStorageLang === "tr") options.tr.forEach((e) => (e.selected = true));

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

  console.log(language);

  arabics.forEach((arabic) => {
    if (language === "ar") {
      arabic.style.fontSize = "25px";
    } else {
      arabic.style.fontSize = "17px";
    }
  });

  document.dir = language === "ar" ? "rtl" : "ltr";
};
