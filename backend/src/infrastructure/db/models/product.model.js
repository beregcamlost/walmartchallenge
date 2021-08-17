const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const scheme = mongoose.Schema({
    id: { type: Number },
    brand: { type: String },
    description: { type: String },
    image: { type: String },
    price: { type: Number }
});


scheme.plugin(mongoosePaginate);

module.exports = mongoose.model('Product', scheme);
