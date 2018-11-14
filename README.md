### ⚠️ Ember GSAP is deprecated in favour of using ember-auto-import

New happy path:

1. Install [Ember Auto Import](https://github.com/ef4/ember-auto-import)
```bash
ember install ember-auto-import
```

2. Install GSAP as a `devDependency`.
```bash
npm install --save-dev gsap 
```

3. Import away, following GSAP [docs](https://greensock.com/docs/NPMUsage).
```js
import TweenMax from 'gsap/TweenMax'
```

---

<img src="https://user-images.githubusercontent.com/2046935/30335303-dd0c1024-97d9-11e7-8e45-40054cd81043.png" width="auto" height="70">

Ember GSAP [![Build Status](https://travis-ci.org/willviles/ember-gsap.svg)](https://travis-ci.org/willviles/ember-gsap) [![Ember Observer Score](http://emberobserver.com/badges/ember-gsap.svg)](http://emberobserver.com/addons/ember-gsap) ![Download count all time](https://img.shields.io/npm/dt/ember-gsap.svg) [![npm](https://img.shields.io/npm/v/ember-gsap.svg)](https://www.npmjs.com/package/ember-gsap)
======

Ember GSAP allows consumption of [GSAP - Greensock Animation Platform](https://github.com/greensock/GreenSock-JS) as ES6 Module imports in Ember applications.

## Installation

`ember install ember-gsap`

## Demo

Check out this Ember Twiddle [demo](https://ember-twiddle.com/f61209fc8ad1f1e85613f8f4ef4573e1) to show Ember GSAP in action.

## Usage

Ember GSAP by default includes `TweenMax`, `TweenLite`, `TimelineLite`, `TimelineMax`, `CSSPlugin`, `RoundPropsPlugin`, `BezierPlugin`, `AttrPlugin`, `DirectionalRotationPlugin`, and all of the easing functions `Power1`, `Power2`, `Power3`, `Power4`, `Back`, `Bounce`, `Circ`, `Cubic`, `Elastic`, `Expo`, `Linear`, `Sine`, `RoughEase`, `SlowMo` and `SteppedEase`.

Recommended import style is as follows:

```javascript
import { TimelineMax, TweenMax, easing } from 'gsap';

const { Power2, Back, Elastic } = easing;
```

Easing functions can also be directly imported like so:

```javascript
import { Power2, Back, Elastic } from 'gsap/easing';
```

## Core Libraries

To prevent Ember GSAP from importing `TweenMax`, which automatically includes all the utilities listed above, you can cherry pick the core libraries and plugins you wish to include.

```js
// config/environment.js
ENV['ember-gsap'] = {
  core: [
    'TweenLite',
    'TimelineLite'
  ]
}
```

## GSAP Plugins

Popular Greensock Plugin libraries can be enabled like so:

```js
// config/environment.js
ENV['ember-gsap'] = {
  plugins: [
    'draggable',
    'scrollTo'
  ]
}
```

| Plugin | Key | Included in TweenMax? | Import |
|-|-|-|-|
| [Attr](https://greensock.com/docs/Plugins/AttrPlugin) | `attr` | ✓ | |
| [Bezier](https://greensock.com/docs/Plugins/BezierPlugin) | `bezier` | ✓ | |
| [ColorProps](https://greensock.com/docs/Plugins/ColorPropsPlugin) | `colorProps` | | |
| [CSS](https://greensock.com/docs/Plugins/CSSPlugin) | `css` | ✓ | |
| [CSSRule](https://greensock.com/docs/Plugins/CSSRulePlugin) | `cssRule` | | |
| [DirectionalRotation](https://greensock.com/docs/Plugins/DirectionalRotationPlugin) | `directionalRotation` | ✓ | |
| [Draggable](https://greensock.com/draggable) | `draggable` | | ```import { Draggable } from 'gsap';``` |
| [Easel](https://greensock.com/docs/Plugins/EaselPlugin) | `easel` | | |
| [Modifiers](https://greensock.com/docs/Plugins/ModifiersPlugin) | `modifiers` | | |
| [Raphael](https://greensock.com/docs/Plugins/RaphaelPlugin) | `raphael` | | |
| [RoundProps](https://greensock.com/docs/Plugins/RoundPropsPlugin) | `roundProps` | ✓ | |
| [ScrollTo](https://greensock.com/docs/Plugins/ScrollToPlugin) | `scrollTo` | | |
| [Text](https://greensock.com/docs/Plugins/TextPlugin) | `text` | | |

## Fastboot

Ember GSAP >=0.3.0 is fully compatible with all versions of [Ember CLI Fastboot](https://github.com/ember-fastboot/ember-cli-fastboot).
