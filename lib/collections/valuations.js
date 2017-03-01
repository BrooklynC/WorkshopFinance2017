Valuations = new Mongo.Collection('valuations');


MultiplesSchema = new SimpleSchema({
    enterpriseValue: {
        type: [Number],
        label: "enterpriseValue",
        decimal: true,
        optional: true
    },
    pricePerShare: {
        type: [Number],
        label: "pricePerShare",
        decimal: true,
        optional: true
    },
    evRevenueFy0: {
        type: [Number],
        label: "EvRevenueFy0",
        decimal: true,
        optional: true
    },
    evRevenueLtm: {
        type: [Number],
        label: "EvRevenueLtm",
        decimal: true,
        optional: true
    },
    evRevenueFy1: {
        type: [Number],
        label: "EvRevenueFy1",
        decimal: true,
        optional: true
    },
    evRevenueFy2: {
        type: [Number],
        label: "EvRevenueFy2",
        decimal: true,
        optional: true
    },
    evEbitdaLtm: {
        type: [Number],
        label: "EvEbitdaLtm",
        decimal: true,
        optional: true
    },
    evEbitdaFy1: {
        type: [Number],
        label: "EvEbitdaFy1",
        decimal: true,
        optional: true
    },
    evEbitdaFy2: {
        type: [Number],
        label: "EvEbitdaFy2",
        decimal: true,
        optional: true
    },
    priceEarningsLtm: {
        type: [Number],
        label: "PriceEarningsLtm",
        decimal: true,
        optional: true
    },
    priceEarningsFy1: {
        type: [Number],
        label: "PriceEarningsFy1",
        decimal: true,
        optional: true
    },
    priceEarningsFy2: {
        type: [Number],
        label: "PriceEarningsFy2",
        decimal: true,
        optional: true
    },
    evAttendanceFy0: {
        type: [Number],
        label: "EvAttendanceFy0",
        decimal: true,
        optional: true
    },
    customValue: {
        type: [Number],
        label: "customValue",
        decimal: true,
        optional: true
    },
    customPrice: {
        type: [Number],
        label: "customPrice",
        decimal: true,
        optional: true
    },
    customMultiple: {
        type: [Number],
        label: "customMultiple",
        decimal: true,
        optional: true
    }
});

ValuationsSchema = new SimpleSchema({
    ownerId: {
        type: String,
        label: "Owner ID",
        optional: true
    },
    ownerCategory: {
        type: String,
        label: "Owner Category",
        allowedValues:  ["user","workshop"],
        defaultValue: "user",
        optional: true
    },
    valuationName: {
        type: String,
        label: "Valuation Name",
        defaultValue: "New Valuation",
        optional: true
    },
    marketType: {
        type: String,
        label: "Football Field Market Type",
        allowedValues: ["company","team"],
        defaultValue: "company",
        optional: true
    },
    valuationType: {
        type: String,
        label: "Valuation Type",
        allowedValues: ["comps","deals","models","custom"],
        defaultValue: "comps",
        optional: true
    },
    valuationElement: {
        type: String,
        label: "Valuation Type - Detail",
        allowedValues: ["security","index","enterpriseValue","price","evRevenueLtm","evEbitdaLtm", "customValue"],
        defaultValue: "security",
        optional: true
    },
    valuationSelections: {
        type: [String],
        label: "Valuation Selections",
        defaultValue: [],
        optional: true
    },
    valuationDate: {
        type: String,
        label: "Valuation Date",
        defaultValue: "2015-12-31",
        optional: true
    },
    valuationMetric: {
        type: String,
        label: "Valuation Metric",
        allowedValues:  ["Enterprise Value", "Price per Share", "EV/Revenue","EV/EBITDA","EV/Attendance", "Price/Earnings"],
        optional: true
    },
    valuationPeriod: {
        type: String,
        label: "Valuation Period",
        allowedValues: ["LTM","FY0","FY1","FY2"],
        optional: true
    },
    valuationCalc: {
        type: String,
        label: "Valuation Calc",
        allowedValues:  ["average", "median", "high", "low"],
        defaultValue: "average",
        optional: true
    },
    valuationOutput: {
        type: String,
        label: "Valuation Metric",
        allowedValues:  ["EV/Revenue","EV/EBITDA","EV/Attendance","Price/Earnings"],
        optional: true
    },
    valuationOutputPeriod: {
        type: String,
        label: "Valuation Output Period",
        allowedValues:  ["LTM","FY0","FY1","FY2"],
        optional: true
    },
    valuationFavorite: {
        type: Boolean,
        label: "Valuation Favorite",
        defaultValue: false,
        optional: true
    },
    valuationNotes: {
        type: String,
        label: "Valuation Notes",
        defaultValue: "Valuation Notes",
        optional: true
    },
    existingCustom: {
        type: String,
        label: "Existing Custom",
        defaultValue: "customMultiple",
        optional: true
    },
    timeCreated: {
        type: Date,
        label: "Date Added",
        optional: true
    },
    viewers: {
        type: [String],
        label: "Valuation Viewers",
        optional: true
    },
    sentBy: {
        type: String,
        label: "Sent by",
        optional: true
    },
    sharedBy: {
        type: String,
        label: "Shared by",
        optional: true
    },
    multiples: {
        type: MultiplesSchema,
        optional: true
    }
});

Valuations.attachSchema(ValuationsSchema);
