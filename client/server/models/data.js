const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    'userEvent' : {
        type:String
    },
    'image': {
        type:String
    }
});

module.exports = mongoose.model('datas', dataSchema);
