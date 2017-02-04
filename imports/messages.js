import {
    Mongo
}
from 'meteor/mongo';

export const Messages = new Mongo.Collection('messages');

Messages.Schema = new SimpleSchema({
    "message": {
        type: String,
        label: "Message",
        optional: false,
        max: 200
    },
    "createdAt": {
        type: Date,
        label: "Created on",
        autoValue: function() {
            return new Date()
        }
    },
    "userId": {
        type: String,
        label: "User id",
        optional: true,
        autoValue: function() {
            if (this.isInsert) {
                return this.userId;
            }
        }
    }
});
Messages.attachSchema(Messages.Schema);
