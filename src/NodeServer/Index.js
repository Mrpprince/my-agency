const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const port = 8080;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());

const uri = "mongodb+srv://ouragency:myagency@cluster0.ynnkd.mongodb.net/my-agency?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const ProvideService = client.db("my-agency").collection("agency");
    const clientReview = client.db("my-agency").collection("review");
    const clientOrder = client.db("my-agency").collection("clientOrder");

    app.get('/ProvideService', (req, res) => {

        ProvideService.find({})
            .toArray((err, ProvideService) => {
                res.send(ProvideService);
            })


    })

    app.get('/feedback',(req,res)=>{

        clientReview.find({})
        .toArray((err, clientReview) => {
            res.send(clientReview);
        })
    })

    app.post('/clientOrder',(req,res)=>{
        const file = req.files.file;
        const name = req.body.name;
        const email = req.body.email;
        const projectName = req.body.projectName;
        const projectDetails = req.body.projectDetails;
        const price = req.body.price;
        const newImg = file.data;
        const encImg = newImg.toString('base64');
        var image = {
            contentType: file.mimetype,
            size: file.size,
            img: Buffer.from(encImg, 'base64')
        };
        console.log(name,email,projectName ,projectDetails,price)
        clientOrder.insertOne({ name, email, projectName, projectDetails, price, image })
            .then(result => {
                
                res.send(result.insertedCount > 0);
            })
    })

    app.get('/clientOrder',(req,res)=>{
        clientOrder.find({})
        
        .toArray((err, clientReview) => {
            res.send(clientReview);
            
        })
    })

    app.post('/feedback',(req,res)=>{
        const name = req.body.name;
        const designation=req.body.Designation;
        const description=req.body.description;
        console.log(name,designation,description);
        clientReview.insertOne({name,designation,description})

            .then(result => {
                res.send(result.insertedCount > 0)
            })
    })
});


app.listen(port, () => {
    console.log("Go gone goneee");
})