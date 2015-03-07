/**
 * Created by yuvraj.sidhu on 3/7/15.
 */

if (Posts.find().count() === 0){
    Posts.insert({
        title: 'ESPN',
        url: 'http://espn.com'
    });
    Posts.insert({
        title: 'Meteor',
        url: 'http://meteor.com'
    });
    Posts.insert({
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    });
}
