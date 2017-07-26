// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'index.vue': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.nav')
      .assert.containsText('ul', '人物')
  },

  'recommend.vue': function(browser) {
    const devServer = browser.globals.devServerURL + '/#/recommend'

    browser
      .url(devServer)
      .assert.elementCount('img', 9)
      .end()
  }
  
}
