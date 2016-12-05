/* global define, self */

(function() {

  function unavailableAttr(attr) {
    var error = attr + " is not available. Either the bower package is missing or your app is in Fastboot Mode.";

    if (attr === 'TweenLite' || attr === 'TweenMax' || attr === 'TimelineLite' || attr === 'TimelineMax') {
      this.to = function() {
        throw Error(error);
      };
    }

    throw Error(error);
  }

  function checkAttrAvailable(attr) {
    return self[attr] || unavailableAttr;
  }

  var availableAttrs = [
    // Timelines
    'TimelineLite', 'TimelineMax',
    // Tweens
    'TweenLite', 'TweenMax',
    // Easing
    'Power1', 'Power2', 'Power3', 'Power4', 'Back', 'Bounce', 'Circ', 'Cubic', 'Elastic', 'Expo', 'Linear', 'Sine', 'RoughEase', 'SlowMo', 'SteppedEase'
  ];

  var attrs = {};

  for (var i = 0; i < availableAttrs.length; i++) {
    var key = availableAttrs[i];
    attrs[key] = checkAttrAvailable(key);
  }

  var easing = {
    'Power1': attrs.Power1,
    'Power2': attrs.Power2,
    'Power3': attrs.Power3,
    'Power4': attrs.Power4,
    'Back': attrs.Back,
    'Bounce': attrs.Bounce,
    'Circ': attrs.Circ,
    'Cubic': attrs.Cubic,
    'Elastic': attrs.Elastic,
    'Expo': attrs.Expo,
    'Linear': attrs.Linear,
    'Sine': attrs.Sine,
    'RoughEase': attrs.RoughEase,
    'SlowMo': attrs.SlowMo,
    'SteppedEase': attrs.SteppedEase
  };

  define('gsap', [], function() {
    'use strict';
    return {
      'TweenLite': attrs.TweenLite,
      'TweenMax': attrs.TweenMax,
      'TimelineLite': attrs.TimelineLite,
      'TimelineMax': attrs.TimelineMax,
      'easing': easing
    };
  });

  /* globals define, GSAP */
  define('TweenLite', [], function() {
    'use strict';
    return { 'default': attrs.TweenLite };
  });

  define('TweenMax', [], function() {
    'use strict';
    return { 'default': attrs.TweenMax };
  });

  define('TimelineLite', [], function() {
    'use strict';
    return { 'default': attrs.TimelineLite };
  });

  define('TimelineMax', [], function() {
    'use strict';
    return { 'default': attrs.TimelineMax } ;
  });

  define('gsap/easing', [], function() {
    'use strict';
    return easing;
  });

})();
