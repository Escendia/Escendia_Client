module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      [
        "module-resolver",
        {
          alias: {
            "@components": "./src/components",
            "@pages": "./src/pages",
            "@services": "./src/services",
            "@config": "./src/config",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
