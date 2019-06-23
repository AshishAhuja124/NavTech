var mongoose = require('mongoose');
var orderSchema = new mongoose.Schema({
    orderNumber: Number,
    orderdueDate: String,
    custName: String,
    custPhone: Number,
    custAddress: String,
    orderTotal: String
})

var Order = module.exports = mongoose.model('Order', orderSchema);

module.exports.getOrder = function (callback) {
    Order.find(callback);
}
module.exports.addOrder = function (newOrder, callback) {
    Order.create(newOrder, callback);
}
module.exports.updateOrder = function (id, newOrder, callback) {
    Order.findByIdAndUpdate(id, newOrder, callback);
}
module.exports.deleteOrder = function (id, callback) {
    Order.findByIdAndRemove(id, callback);
}
module.exports.getOrders = function (id, callback) {
    Order.findById(id, callback);
}
