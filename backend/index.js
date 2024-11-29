import express from 'express';
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json())
app.use(express.urlencoded());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/peepfeed', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Database Connected')
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema);

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    User.findOne({email:email},(err, user)=>{
        if(user){
                if(password === user.password){
                    res.send({message:"Login successful", user:user});
                }
                else{
                    res.send({message:"Password didnt match"})
                }
        }
        else {
            res.send("user not Registered")
        }
    })
})

app.post("/register", (req, res) => {
    const { name, email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: " User already registered" });
        }
        else {
            res.send("Congrats")
        }
    })
    const user = new User({
        name,
        email,
        password
    })
    user.save(err => {
        if (err) {
            res.send(err)
        }
        else {
            res.send({ message: "Successfully Registered" })
        }

    })
})

app.listen(9002, () => {
    console.log("Server started at port 9002")
})
