import { test, module } from 'qunit';

import { A } from '@ember/array';

import {
  default as gsap,
  TweenMax,
  TweenLite,
  TimelineMax,
  TimelineLite,
  easing,
  plugins,
  Draggable
} from 'gsap';

import _easing from 'gsap/easing';
import _plugins from 'gsap/plugins';

module('Unit | gsap exports');

test('gsap exports an object', (assert) => {
  assert.equal(typeof gsap, 'object');
});

test('TweenMax exports a function', (assert) => {
  assert.equal(typeof TweenMax, 'function');
});

test('TweenLite exports a function', (assert) => {
  assert.equal(typeof TweenLite, 'function');
});

test('TimelineMax exports a function', (assert) => {
  assert.equal(typeof TimelineMax, 'function');
});

test('TimelineLite exports a function', (assert) => {
  assert.equal(typeof TimelineLite, 'function');
});

test('easing exports an object', (assert) => {
  assert.equal(typeof easing, 'object');
});

test('gsap/easing exports an object', (assert) => {
  assert.equal(typeof _easing, 'object');
});

const easingTypes = A([
  'Power1', 'Power2', 'Power3', 'Power4',
  'Back', 'Bounce', 'Circ', 'Cubic', 'Elastic',
  'Expo', 'Linear', 'Sine', 'RoughEase',
  'SlowMo', 'SteppedEase'
]);

test('easing exports all easing types', (assert) => {
  let keys = A(Object.keys(easing)).filter(s => s !== 'default');
  assert.deepEqual(keys, easingTypes);
});

test('gsap/easing exports all easing types', (assert) => {
  let keys = A(Object.keys(_easing)).filter(s => s !== 'default');
  assert.deepEqual(keys, easingTypes);
});

test('plugins exports an object', (assert) => {
  assert.equal(typeof plugins, 'object');
});

test('gsap/plugins exports an object', (assert) => {
  assert.equal(typeof _plugins, 'object');
});

test('Draggable exports a function', (assert) => {
  assert.equal(typeof Draggable, 'function');
});
