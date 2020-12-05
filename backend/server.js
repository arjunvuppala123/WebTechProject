const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const connectDB = require('./config/db')

const AuthRoute = require('./routes/auth.route')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//mongoose.connect("mongodb://localhost:27017/commentDB", { useNewUrlParser: true });


//to config .env to ./config/config.env
require('dotenv').config({
    path: './config/config.env'
});

//connect to db
connectDB()

//app.use('/public',express.static('/static'));

app.use(bodyParser.json())


//config for dev
if (process.env.NODE_ENV === 'development') {
    app.use(cors({ //used to deal with react without probs
        origin: process.env.CLIENT_URL
    }))

    app.use(morgan('dev')) //gives info about each request
}


//to load all routes
const authRouter = require('./routes/auth.route')

//using the routes
app.use('/api/', authRouter);
/*
const commentSchema = {
    name: String,
    description: String
}




const comment = mongoose.model("Item", commentSchema);

const c1 = new comment({
    name: "alpha",
    description: "this is my comment"
})

const c2 = new comment({
    name: "beta",
    description: "Great!"
})

const c3 = new comment({
    name: "gamma",
    description: "Awesome"
})

const defaultItems = [c1, c2, c3];

app.get("/review", function(req, res) {
    comment.find({}, function(err, foundcomment) {

        if (foundcomment.length === 0) {
            Item.insertMany(defaultItems, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Successfully savevd default items to DB.");
                }
            });
            res.redirect("/");
        } else {
            res.render("list", { listTitle: "Today", newListItems: foundItems });
        }
    });

});

app.post("/review", function(req, res) {

    const itemName = req.body.Author;
    const Descriptions = req.body.Descriptions;

    const comment = new comment({
        name: itemName,
        author: Descriptions
    });

    comment.save();
    res.redirect("/");

});
*/

app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Page not found"
    })
})





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});