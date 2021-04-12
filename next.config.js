const { withExpo } = require("@expo/next-adapter");

const withTM = require("next-transpile-modules")([
  "moti",
  "@motify/core",
  "@motify/components",
]);

const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
  withTM,
  [
    withExpo,
    {
      projectRoot: __dirname,
    },
  ],
]);
