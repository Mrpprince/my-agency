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
    const makeAdmin = client.db("my-agency").collection("makeAdmin");
    const userEmail = client.db("my-agency").collection("user");

    app.get('/ProvideService', (req, res) => {

        ProvideService.find({})
            .toArray((err, ProvideService) => {
                res.send(ProvideService);
            })
    })


    app.post('/ProvideService',(req,res)=>{
        const file = req.files.file;
        const description=req.body.description;
        const title=req.body.title;
        const newImg = file.data;
        const encImg = newImg.toString('base64');
        var image = {
            contentType: file.mimetype,
            size: file.size,
            img: Buffer.from(encImg, 'base64')
        };
        ProvideService.insertOne({title,image,description})
        .then(result => {
            
            res.send(result.insertedCount > 0);
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

    app.get('/showOrder',(req,res)=>{
        const email=req.body.loggedInUser.email;
        clientOrder.find({email})
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

    app.post('/makeAdmin',(req,res)=>{
        const email=req.body.email;
        console.log(email);
        makeAdmin.insertOne({email})
        .then(result=>{
            res.send(result.insertedCount>0)
        })
    })
    app.post("/isAdmin",(req,res)=>{
        const email=req.body.email;
        console.log(email);
        makeAdmin.find({email:email})
        .toArray((err, admin) => {
            res.send(admin.length>0);
        })
    })
});


app.listen(port, () => {
    console.log("Go gone goneee");
})