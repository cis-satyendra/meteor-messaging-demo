import { Meteor } from 'meteor/meteor';
import { Messages } from '../imports/messages.js';

// meteor methods.

Meteor.methods({
  createMessage: function (message) {
    Messages.insert({ "message": message});
  },
  removeMessage : function (_id){
    Messages.remove({ "_id": _id ,userId : this.userId});
  }
});