import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "https://wpfurniture.mangoitsol.com/wp-json",
  },
  staging: {
    apiUrl: "https://wpfurniture.mangoitsol.com/wp-json",
  },
  prod: {
    apiUrl: "https://wpfurniture.mangoitsol.com/wp-json",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
