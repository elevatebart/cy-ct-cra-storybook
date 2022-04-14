const injectCraDevServer = require("@cypress/react/plugins/react-scripts");

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  return injectCraDevServer(on, { ...config, addTranspiledFolders: [".storybook"] });
};
