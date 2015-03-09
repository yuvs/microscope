/**
 * Created by yuvraj.sidhu on 3/7/15.
 */

Meteor.publish('posts', function(){
    return Posts.find();
});

Meteor.publish('comments', function(postId){
    check(postId, String);
    return Comments.find({postId: postId});
});
