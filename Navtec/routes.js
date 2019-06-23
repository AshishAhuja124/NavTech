var express = require('express');
var router = express.Router();
var Media = require('./model');
router.get('/', function (req, res) {
    Media.getOrder(function (err, order) {
        if (err) throw err;
        res.json(order);
    });
})
router.post('/', function (req, res) {
    var newOrder = {
        orderNumber: req.body.orderNumber,
        orderdueDate: req.body.orderdueDate,
        custName: req.body.custName,
        custPhone: req.body.custPhone,
        custAddress: req.body.custAddress,
        orderTotal: req.body.orderTotal

    }
    Media.addOrder(newOrder, function (err, order) {
        if (err) throw err;
        res.json(order);
    });
})
router.put('/:_id', function (req, res) {
    var update = {
        orderNumber: req.body.orderNumber,
        orderdueDate: req.body.orderdueDate,
        custName: req.body.custName,
        custPhone: req.body.custPhone,
        custAddress: req.body.custAddress,
        orderTotal: req.body.orderTotal
    }
    Media.updateOrder(req.params._id, update, function (err, order) {
        if (err) throw err;
        res.json(order);
    });
})
router.delete('/:_id', function (req, res) {

    Media.deleteOrder(req.params._id, function (err, order) {
        if (err) throw err;
        res.json(order);
    });
})
router.get('/:_id', function (req, res) {

    Media.getOrders(req.params._id, function (err, order) {
        if (err) throw err;
        res.json(order);
    });
})
module.exports = router;