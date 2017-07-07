/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const BroccoliDebug = require('broccoli-debug');
const path = require('path');
const map = require('broccoli-stew').map;

module.exports = {
  name: 'ember-gsap',

  included(app) {
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }
    this.app = app;

    this.addonConfig = this.app.project.config(app.env)['ember-gsap'] || {};
    this.importDependencies(app);

    return this._super.included.apply(this, arguments);
  },

  importDependencies(app) {
    let plugins = this.addonConfig.plugins || [];
    let vendor = this.treePaths.vendor;

    app.import(vendor + '/gsap/TweenMax.js');

    if (plugins.includes('draggable')) {
      app.import(vendor + '/gsap/Draggable.js');
    }

    if (plugins.includes('scrollTo')) {
      app.import(vendor + '/gsap/ScrollToPlugin.js');
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

  },

  treeForVendor(vendorTree) {
    let debugTree = BroccoliDebug.buildDebugCallback(this.name);
    let trees = [];

    if (vendorTree) {
      trees.push(
        debugTree(vendorTree, 'vendorTree')
      );
    }

    let gsap = moduleToFunnel('gsap');
    trees.push(debugTree(gsap, 'gsap'));

    return debugTree(mergeTrees(trees), 'mergedTrees');
  }

};

function moduleToFunnel(moduleName, destination) {
  let tree = new Funnel(resolveModulePath(moduleName), {
    destDir: destination || moduleName
  });
  return map(tree, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);
}

function resolveModulePath(moduleName) {
  return path.dirname(require.resolve(moduleName));
}
