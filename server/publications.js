/**
 * Created by yuvraj.sidhu on 3/7/15.
 */

Meteor.publish('posts', function(options) {
    return Posts.find({}, options);
});

Meteor.publish('singlePost', function(id) {
    check(id, String);
    return Posts.find(id);
});

Meteor.publish('comments', function(postId) {
    check(postId, String);
    return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
    return Notifications.find({userId: this.userId});
});

Meteor.publish('currentUser', function(){
    return Meteor.users.find(this.userId, {fields: {createdAt: 1}});
});