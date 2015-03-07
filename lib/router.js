/**
 * Created by yuvraj.sidhu on 3/7/15.
 */

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function(){ return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
    name: 'postPage',
    data: function(){ return Posts.findOne(this.params._id); }
});
