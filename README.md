<img src="https://dl.dropboxusercontent.com/u/10491474/github/ember-gsap.png" width="auto" height="70">

Ember GSAP ![Download count all time](https://img.shields.io/npm/dt/ember-gsap.svg) [![npm](https://img.shields.io/npm/v/ember-gsap.svg)](https://www.npmjs.com/package/ember-gsap)
======

Ember GSAP allows consumption of [GSAP - Greensock Animation Platform](https://github.com/greensock/GreenSock-JS) as ES6 Module imports in Ember applications.

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

## GSAP Plugins

Popular Greensock Plugin libraries can be included like so:

```js
// config/environment.js
ENV['ember-gsap'] = {
  plugins: [
    'draggable',
    'scrollTo'
  ]
}
```

The following plugins can be included:

- [Draggable](https://greensock.com/draggable)  
```js
import { Draggable } from 'gsap';
```    
- [ScrollToPlugin](https://greensock.com/ScrollToPlugin)

## Fastboot

Ember GSAP >=0.3.0 is fully compatible with all versions of [Ember CLI Fastboot](https://github.com/ember-fastboot/ember-cli-fastboot).
