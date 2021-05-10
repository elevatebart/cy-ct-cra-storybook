import React from "react";

export const decorators = [
  (StoryFn, { globals: { locale = "en" } }) =>
    React.Fragment({
      children: [
        React.createElement("div", { children: [locale] }),
        React.createElement(StoryFn()),
      ],
    }),
];

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", right: "🇺🇸", title: "English" },
        { value: "es", right: "🇪🇸", title: "Español" },
        { value: "zh", right: "🇨🇳", title: "中文" },
        { value: "kr", right: "🇰🇷", title: "한국어" },
      ],
    },
  },
};
