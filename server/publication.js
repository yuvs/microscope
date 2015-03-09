/**
 * Created by yuvraj.sidhu on 3/7/15.
 */

Meteor.publish('posts', function(){
    return Posts.find();
});

Meteor.publish('comments', function(){
    return Comments.find();
})
