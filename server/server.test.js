var _meteor = require('meteor/meteor');

var _random = require('meteor/random');

var _messages = require('../imports/messages.js');

var _accountsBase = require('meteor/accounts-base');

var _practicalmeteorChai = require('meteor/practicalmeteor:chai');

var _xolvioCleaner = require('meteor/xolvio:cleaner');

describe('Messages', function() {

    describe('#methods', function() {

        var userId = _random.Random.id();
        var taskId = void 0;
        beforeEach(function() {
            console.log("prateek beforeEach", userId);
            _messages.Messages.remove({});
            taskId = _messages.Messages.insert({
                message: 'test messages',
                createdAt: new Date(),
                "userId": userId
            });
        });
        describe('#removeMessage()', function() {
            it('is Message.removed called', function() {
                _meteor.Meteor.server.method_handlers['/messages/remove'];
            });
        });
        describe('#createMessage()', function() {
            it('is Message.inserted called', function() {
                _meteor.Meteor.server.method_handlers['/messages/insert'];
            });
            it('has message inserted', function() {
                taskId = _messages.Messages.insert({
                    message: 'This is test message',
                    createdAt: new Date(),
                    "userId": userId
                });
                _messages.Messages.remove(taskId);
            });
        });
    });
});
