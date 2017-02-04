import {Router} from 'meteor/iron:router';

Router.route('/', function () {
  this.render('posts');
});

Router.configure({
  layoutTemplate: 'application'
});

Router.route('/my_post', function () {
  this.render('myMessages');
});