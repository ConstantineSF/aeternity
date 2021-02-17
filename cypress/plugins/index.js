// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// const extensionLoader = require('cypress-browser-extension-plugin/loader');
/**
 * @type {Cypress.PluginConfig}
 */

const path = require('path')
module.exports = (on, config) => {
  on('before:browser:launch', (browser, launchOptions) => {
    console.log('launching browser %o', browser)

    if (browser.name !== 'electron') {
      const extensionFolder = path.resolve(__dirname, '..', '..', 'superhero_extension_folder')
      // const extensionFolder = 'superhero_extension_folder'
      console.log('adding Aeternity Extension from', extensionFolder)
      launchOptions.args.push(`--load-extension=${extensionFolder}`)

      return launchOptions
    }
  })
}