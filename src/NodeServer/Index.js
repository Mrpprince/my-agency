const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8080;

const app = express();

app.use(bodyParser.json());
app.use(cors());


const uri = "mongodb+srv://ouragency:myagency@cluster0.ynnkd.mongodb.net/my-agency?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const ProvideService = client.db("my-agency").collection("agency");

    app.get('/ProvideService', (req, res) => {

        ProvideService.find({})
            .toArray((err, ProvideService) => {
                res.send(ProvideService);
            })


    })

});


app.listen(port, () => {
    console.log("Go gone goneee");
})