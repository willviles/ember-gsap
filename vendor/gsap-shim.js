(function() {

  var easing = {
    'Power1': Power1,
    'Power2': Power2,
    'Power3': Power3,
    'Power4': Power4,
    'Back': Back,
    'Bounce': Bounce,
    'Circ': Circ,
    'Cubic': Cubic,
    'Elastic': Elastic,
    'Expo': Expo,
    'Linear': Linear,
    'Sine': Sine,
    'RoughEase': RoughEase,
    'SlowMo': SlowMo,
    'SteppedEase': SteppedEase
  };

  define('gsap', [], function() {
    'use strict';
    return {
      'TweenLite': TweenLite,
      'TweenMax': TweenMax,
      'TimelineLite': TimelineLite,
      'TimelineMax': TimelineMax,
      'easing': easing
    };
  });

  /* globals define, GSAP */
  define('TweenLite', [], function() {
    'use strict';
    return { 'default': TweenLite };
  });

  define('TweenMax', [], function() {
    'use strict';
    return { 'default': TweenMax };
  });

  define('TimelineLite', [], function() {
    'use strict';
    return { 'default': TimelineLite };
  });

  define('TimelineMax', [], function() {
    'use strict';
    return { 'default': TimelineMax } ;
  });

  define('gsap/easing', [], function() {
    'use strict';
    return easing;
  });

})();
