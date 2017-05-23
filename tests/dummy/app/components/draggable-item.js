import Ember from 'ember';
import { Draggable } from 'gsap';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['draggable'],

  didInsertElement() {
    this._super(...arguments);

    Draggable.create(this.element, { type:"rotation", throwProps:true });
    
  }
});
