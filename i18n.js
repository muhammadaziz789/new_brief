module.exports = {
  locales: ["uz", "oz"],
  defaultLocale: "uz",
  loadLocaleFrom: (lang, ns) =>
    import(`locales/${lang}/${ns}.json`).then((m) => m.default),
  pages: {
    "*": ["common", "seminars"],
    "/profile": ["profile"],
  },
  localeDetection: false,
};
