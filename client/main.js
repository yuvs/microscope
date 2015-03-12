/**
 * Created by yuvraj.sidhu on 3/6/15.
 */

Meteor.subscribe('posts');

/*
window.intercomSettings = {
    // The current logged in user's full name
    name: "John Doe",
    // The current logged in user's email address.
    email: "john.doe@example.com",
    // The current logged in user's sign-up date as a Unix timestamp.
    created_at: 1234567890,
    app_id: "kj7g27c0"
};
*/

Tracker.autorun(function(){
    if (Meteor.user() && !Meteor.loggingIn()){
        var intercomSettings = {
            name: Meteor.user().username,
            email: Meteor.user().emails[0].address,
            created_at: Math.round(Meteor.user().createdAt/1000),
            favorite_color: _.sample(['blue','red','green','yellow']),
            app_id: "kj7g27c0"
        };
        Intercom('boot', intercomSettings);
    }
});