Template.SettingsContentList.helpers({
    users: function() {
        var currentUserId = Meteor.userId();
        var currentUsername = Meteor.users.findOne({_id:currentUserId}).username;
        if(currentUsername == "workshop") {
            return Meteor.users.find({});
        }
    }
});