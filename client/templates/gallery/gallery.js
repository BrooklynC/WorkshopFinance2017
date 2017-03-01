Template.Gallery.helpers({
    currentFootballId: function () {
        var currentUserId = Meteor.userId();
        var footballActive = Options.findOne({ownerId:currentUserId}).footballActive;
        return Footballs.findOne({_id:footballActive});
    }
});

Template.Gallery.onCreated (function () {
    var self = this;
    self.autorun(function() {
        self.subscribe('feedCompanies');
        self.subscribe('feedTeams');
    });
});