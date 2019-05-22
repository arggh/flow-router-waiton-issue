import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import './layout.html';
import './main.html';

FlowRouter.route('/a', {
  name: 'a',
  waitOn() {
    console.log('WAIT ON A');
    return import('./a.js');
  },
  endWaiting() {
    console.log('END WAITING A');
  },
  action() {
    console.log('RENDER A', Template.a);
    this.render('layout', 'a');
  }
});

FlowRouter.route('/b', {
  name: 'b',
  waitOn() {
    console.log('WAIT ON B');
    return import('./b.js');
  },
  endWaiting() {
    console.log('END WAITING B');
  },
  action() {
    console.log('RENDER B', Template.b);
    this.render('layout', 'b');
  }
});