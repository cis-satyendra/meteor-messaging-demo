var _meteor = require('meteor/meteor');

var _random = require('meteor/random');

var _messages = require('../imports/messages.js');

var _accountsBase = require('meteor/accounts-base');

var _practicalmeteorChai = require('meteor/practicalmeteor:chai');

var _xolvioCleaner = require('meteor/xolvio:cleaner');

describe('Messages', function() {
    describe('#methods', function() {
        describe('#gettingAllMessages', function() {
            it('has got all messages', function() {
                _messages.Messages.find({});
            });
        });
    });
});

describe('Users', function() {
    beforeEach(function() {
        (0, _xolvioCleaner.resetDatabase)();
    });
    describe('#method', function() {
        describe('#createUser', function() {
            it('has new user created', function() {
                var createUser = new Promise(function(resolve, reject) {
                    _accountsBase.Accounts.createUser({
                        username: 'test',
                        email: 'test@test.com',
                        password: 'password'
                    }, function(error) {
                        if (error) {
                            reject(error);
                        } else {
                            var newUser = _meteor.Meteor.users.findOne();
                            resolve(newUser);
                        }
                    });
                });
                return createUser.then(function(newUser) {
                    (0, _practicalmeteorChai.expect)(newUser).to.not.be.undefined;
                    (0, _practicalmeteorChai.expect)(newUser.username).to.equal('test');
                });
            });
        });
    });
});
