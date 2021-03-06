var mongoose = require('mongoose');
var findOneOrCreate = require('mongoose-find-one-or-create');

var campaignSchema = mongoose.Schema({


    firstname     : String,
    lastname      : String,
    title         : String,
    money         : Number,
    city          : String,
    state         : String,
    unique_link   : String,
    link          : String,
    last_updated  : Date

});

campaignSchema.plugin(findOneOrCreate);
module.exports = mongoose.model('fundraisers', campaignSchema);
