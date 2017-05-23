/* eslint node: true */
'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var VersionChecker = require('ember-cli-version-checker');
var path = require('path');

module.exports = {
  name: 'ember-gsap',

  included(app) {

    this.addonConfig = this.app.project.config(app.env)['ember-gsap'] || {};

    const plugins = this.addonConfig.plugins || [];
    const vendor = this.treePaths.vendor;

    if (!isFastBoot()) {

      if (arguments.length < 1) {
        throw new Error('Application instance must be passed to import');
      }

      // `using: []` syntax isavailable for Ember 2.9.0 and above only
      new VersionChecker(this).for('ember-cli', 'npm').assertAbove('2.9.0');

      app.import(vendor + '/gsap/TweenMax.js');

      if (plugins.includes('draggable')) {
        app.import(vendor + '/gsap/Draggable.js');
      }

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

    return this._super.included.apply(this, arguments);
  },

  treeForVendor(vendorTree) {
    var trees = [];

    if (vendorTree) {
      trees.push(vendorTree);
    }

    trees.push(moduleToFunnel('gsap'));

    return mergeTrees(trees);
  },

};

function moduleToFunnel(moduleName, destination) {
  destination = destination || moduleName;
  return new Funnel(resolveModulePath(moduleName), {
    destDir: destination
  });
}

function resolveModulePath(moduleName) {
  return path.dirname(require.resolve(moduleName));
}

// Checks to see whether this build is targeting FastBoot. Note that we cannot
// check this at boot time--the environment variable is only set once the build
// has started, which happens after this file is evaluated.
function isFastBoot() {
  return process.env.EMBER_CLI_FASTBOOT === 'true';
}
