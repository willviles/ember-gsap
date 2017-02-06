import Ember from 'ember';
import { TweenLite, easing } from 'gsap';

const { Power2, Elastic } = easing;

export default Ember.Controller.extend({
  appName: 'gsap',

  actions: {
  	gsapTest() {
      const page = document.documentElement;
      const targetElement = document.querySelector('h1');
      const emberLogo = document.querySelector('.ember-logo');

     	const bodyTween = new TweenLite(page, 1, {
        ease: Power2.easeOut,
        backgroundColor: '#1A1E24',
      });
    	const copyTween = new TweenLite(targetElement, 2.0, {
        ease: Elastic.easeOut,
        scale: 1.4,
        color: '#E34C32',
      });
    	const logoTween = new TweenLite(emberLogo, 1.3467, {
        ease: Elastic.easeOut,
        x: 0,
        delay: 2.5
      });
    },
  },
});
