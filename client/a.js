import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import './a.html';

Template.a.onCreated(function () {
  FlowRouter.setQueryParams({ foobar: 1 });
});

Template.a.events({
  'click section'() {
    FlowRouter.setQueryParams({ foobar: null });
  }
})