// models/Billing.js
const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
    billingId: {
        type: String,
        required: true,
        unique: true,
    },
    customerId: {
        type: String,
        required: true,
    },
    billingDate: {
        type: Date,
        required: true,
    },
    product: {
        type: String,
        required: true,
    },
    actualPrice: {
        type: Number,
        required: true,
    },
    tax: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    paymentStatus: {
        type: String,
        enum: ['Paid', 'Pending', 'Overdue'],
        required: true,
    },
});

// Export the model
module.exports = mongoose.model('Billing', billingSchema);
