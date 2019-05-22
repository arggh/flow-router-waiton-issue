import { Template } from 'meteor/templating';
import './b.html';

Template.b.onCreated(function () {
  console.log('B was creaated.');
});
