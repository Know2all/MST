const express = require('express')
var MongoClient = require('mongodb').MongoClient;
const cors=require('cors')
var url = "mongodb://localhost:27017/anjac";

const app = express()

app.use(express.json())
app.use(cors())

let dbb = new MongoClient(url);



app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        await dbb.connect();
        const database = dbb.db('anjac');

        const collection = database.collection('mca');
        const result = await collection.findOne({ username, password })
        if (result != null)
            res.status(200).json({
                status: "success",
                message: "Login successfully"
            })
        else
            res.status(200).json({
                status: "fail",
                message: "Login failed"
            })
    } catch (error) {
        console.log(error)
    }

})

app.listen(3000, () => {
    console.log("app running on 3000")
})