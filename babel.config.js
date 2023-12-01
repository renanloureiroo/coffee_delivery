module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./app"],
          alias: {
            "@components": "./app/components",
            "@assets": "./app/assets",
            "@shared": "./app/shared",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
