import { Messages } from '../imports/messages.js';

Meteor.publish('messages', function() {
    return Messages.find({});
});

Meteor.publish('myMessages', function() {
    return Messages.find({"userId" : this.userId});
});