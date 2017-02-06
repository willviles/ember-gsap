# Ember GSAP

This Ember addon allows consumption of [GSAP - Greensock Animation Platform](https://github.com/greensock/GreenSock-JS) as ES6 Module imports in ember-cli apps.

## Installation

`ember install ember-gsap`

## Demo

Check out this Ember Twiddle [demo](https://ember-twiddle.com/f61209fc8ad1f1e85613f8f4ef4573e1) to show Ember GSAP in action.

## Usage

Ember GSAP by default includes TweenMax, TweenLite, TimelineLite, TimelineMax, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin, and all of the eases like Power1, Power2, Power3, Power4, Back, Bounce, Circ, Cubic, Elastic, Expo, Linear, Sine, RoughEase, SlowMo, SteppedEase, etc.

Recommended import style is as follows:

```javascript
import { TimelineMax, TweenMax, easing } from 'gsap';

const { Power2, Back, Elastic } = easing;
```

Easing functions can also be directly imported like so:

```javascript
import { Power2, Back, Elastic } from 'gsap/easing';
```

## Additional Plugins

Ember GSAP also includes the popular ScrollToPlugin.
