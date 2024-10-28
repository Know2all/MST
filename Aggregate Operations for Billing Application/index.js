const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Billing =require('./Billing')
const {data}=require('./data')
  

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/task19', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

//feed bill data
app.get('/feed', async (req, res) => {
    try {
        const savedBill = await Billing.insertMany(data);
        res.status(201).json(savedBill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all billing records
app.get('/billing', async (req, res) => {
    try {
        const billings = await Billing.find();
        res.json(billings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Total sales
app.get('/billing/total-sales', async (req, res) => {
    try {
        const result = await Billing.aggregate([
            {
                $group: {
                    _id: null,
                    totalSales: { $sum: "$total" }
                }
            }
        ]);
        res.json(result[0] ? result[0] : { totalSales: 0 });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Average price
app.get('/billing/average-price', async (req, res) => {
    try {
        const result = await Billing.aggregate([
            {
                $group: {
                    _id: null,
                    averagePrice: { $avg: "$actualPrice" }
                }
            }
        ]);
        res.json(result[0] ? result[0] : { averagePrice: 0 });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Count of invoices
app.get('/billing/invoice-count', async (req, res) => {
    try {
        const result = await Billing.countDocuments();
        res.json({ invoiceCount: result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//delete all invoice
app.delete('/billing', async (req, res) => {
    try {
        const billings = await Billing.deleteMany({});
        res.json(billings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});