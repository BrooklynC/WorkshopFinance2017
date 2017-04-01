//Creates new Valuation in Gallery using selected Comps or Deals
Template.GalleryValuationAdd.events({
    'click #valuation-new': function(e) {
        e.preventDefault();

        var marketType = this.marketType;

        var type = getValuationSelect().type;
        console.log("Type: ", type);
        var element = getValuationSelect().element;

        var metric = getValuationInfo(marketType).metric;
        var period = getValuationInfo(marketType).period;

        var output = getValuationInfo(marketType).output;
        var outputPeriod = getValuationInfo(marketType).outputPeriod;

        var activated = true;

        var selections = [];
        var compsSelect = localSelections.find({});
        //Push ids of selections in new array
        compsSelect.forEach(function (c) {
            var compId = c._id;
            selections.push(compId);
        });
        var length = selections.length;
        var ownerId = this.ownerId;
        var currentUserId = Meteor.userId();
        var currentFootballId = Options.findOne({ownerId:currentUserId}).footballActive;


        if(ownerId == currentUserId) {
            if(length > 0) {
                Meteor.call('valuationAdd', marketType, type, element, metric, period, output, outputPeriod, selections, currentFootballId, activated, function(error, result) {
                });
                localSelections.remove({});
            }
        }
    }
});

Template.GalleryValuationAdd.helpers({
    disableNoSelections: function() {
        var selections = localSelections.find().fetch();
        var length = selections.length;
        if(length == 0) {
            return "disabled"
        }
    }
});
