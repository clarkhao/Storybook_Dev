const path = require('path');
module.exports = {
  "stories": [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    "storybook-addon-next-router",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  babel: (config) => {
    config.presets.push(require.resolve("@emotion/babel-preset-css-prop"));
    return config;
  },
  features: {
    interactionDebugger: true,
  }
}