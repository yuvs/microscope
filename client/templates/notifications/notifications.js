/**
 * Created by yuvraj.sidhu on 3/10/15.
 */

Template.notifications.helpers({
    notifications: function(){
        return Notifications.find({userId: Meteor.userid(), read: false});
    },
    notificationCount: function(){
        return Notifications.find({userId: Meteor.userId(), read: false}).count();
    }
});

Template.notificationItem.helpers({
    notificationPostPath: function(){
        return Router.routes.postPath.path({_id: this.postId});
    }
});

Template.notificationItem.events({
    'click a': function(){
        Notifications.update(this._id, {$set: {read: true}});
    }
});


