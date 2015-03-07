/**
 * Created by yuvraj.sidhu on 3/7/15.
 */

var postsData = [
    {
        title: 'ESPN',
        url: 'http://espn.com'
    },
    {
        title: 'Meteor',
        url: 'http://meteor.com'
    },
    {
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    }
];
Template.postsList.helpers({
    posts: postsData
});
