/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-gsap',

  included: function(app) {
    this._super.included(app);

    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import(app.bowerDirectory + '/gsap/src/uncompressed/TweenMax.js');
      app.import(app.bowerDirectory + '/gsap/src/uncompressed/plugins/ScrollToPlugin.js');

    }

    app.import('vendor/gsap-shim.js', {
      exports: {
        'gsap': ['TweenMax', 'TweenLite', 'TimelineMax', 'TimelineLite', 'easing'],
        'TweenMax': ['default'],
        'TweenLite': ['default'],
        'TimelineMax': ['default'],
        'TimelineLite': ['default']
      }
    });

  }
};
