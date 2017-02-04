import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';
import { Messages } from './../messages.js';
import './template.html';

Template.posts.onCreated(function() {
  var self = this;
  this.autorun(function() {
    self.subscribe("messages");
  });
});

Template.myMessages.onCreated(function() {
  var self = this;
  this.autorun(function() {
    self.subscribe("myMessages");
  });
});

Template.postForm.events({
  'click #createMessage': function(event, template) {
    var message = template.find('#content').value;
    template.find('#content').value = "";
    if ( message ) {
      Meteor.call("createMessage", message, function(error, response) {
        if (!error) {
          toastr.success("Message Created successfully.");
        } else {
          toastr.error("Message not created!");
        }
      });
    } else {
      toastr.warning("Message can't be blank.");
    }
  }
})

Template.application.helpers({
  'isUserActive': function() {
    return Meteor.userId();
  }
})
Template.postForm.helpers({
  'isUserActive': function() {
    return Meteor.userId();
  }
})
Template.myMessages.helpers({
  'messages': function() {
    var message = Messages.find({}, { sort: { "createdAt": -1 } }).fetch();
    return (message && message.length ? message : []);
  }
})

Template.posts.helpers({
  'messages': function() {
    var message = Messages.find({}, { sort: { "createdAt": -1 } }).fetch();
    return (message && message.length ? message : []);
  }
})

Template.myMessages.events({
  'click #delete': function() {
    Meteor.call("removeMessage", this._id, function(error, response) {
      toastr.success("Message Deleted successfully.");
    });
  }
})
Template.post.helpers({
  'isMyPost': function(userId) {
    return Meteor.userId() ? Meteor.userId() == userId : false;
  }
})