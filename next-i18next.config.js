const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "de", "es", "ar", "he", "zh"],
    react: { useSuspense: false },
    defaultLocale: "en",
    // localeDetection: false,
  },
  localePath: path.resolve("./public/locales/chawkbazar"),
};
