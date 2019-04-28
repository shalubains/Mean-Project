var express = require("express")
var Mongoose = require('mongoose')
const dbURL = "mongodb://localhost:27017/cncproject"
var UserModel = require('./user.Model')
var StoryModel = require('./story.Model')
var ProductModel = require('./product.Model')
var CartModel = require('./cart.Model')
var BodyParser = require('body-parser')
var uniqid = require('uniqid')
var cors  =  require('cors')


const Port = 5000
var app = express()

app.use(cors())

Mongoose.connect(dbURL).then(function (client) {
    console.log("Connected to database")
}, function (error) {
    console.log("Error connecting to database")
})

app.use(BodyParser.json());

app.post('/login', function (req, res) {
    var data = req.body;
    UserModel.findOne({ email: data.email, password: data.password }, { email: 1, _id: 0, name: 1, createdDate: 1, wallet: 1, image: 1 }).then(function (result) {
        console.log("result Data is :", result);
        if (result != null) {
            res.send({
                data: result,
                message: "User Logged In."
            })
        }
        else {
            res.send({
                message: "Invalid Credentials."
            })
        }
    }, (error) => {
        res.send({
            message: "Error occured"
        })
    })
});

app.post('/signup', function (req, res) {
    var data = req.body;
    var userData = new UserModel(data);
    userData.save().then(function (newUser) {
        console.log("New user created : ", newUser);
        res.send({
            data:newUser,
            message: "User registered"
        })
    }, (error) => {
        console.log("Error occured while saving data. : ", error)
        if (error["code"] == 11000) {
            res.send({
                message: "User exists"
            })
        }
        else {
            res.send({
                message: "Error in user creation"
            })
        }
    })
});

app.post('/createStory', function (req, res) {
    var data = req.body;
    data.storyId = uniqid();
    var storyData = new StoryModel(data);
    storyData.save().then(function (newStory) {
        console.log("New story created : ", newStory);
        res.send({
            message: "Story Created"
        })
    }, (error) => {
        console.log("Error occured while saving data. : ", error)
        if (error["code"] == 11000) {
            res.send({
                message: "Story exists"
            })
        }
        else {
            res.send({
                message: "Error in story creation"
            })
        }
    })
});

app.get('/getAllStory', function (req, res) {
    StoryModel.find().then(function (result) {
        console.log(result)
        res.send({
            data: result,
            message: "List of story."
        });
    }, (error) => {
        res.send({
            message: "Error occured while retrieving story data."
        })
    })
})

app.listen(Port, function () {
    console.log("Server is listening on : ", Port)
});

// Product

app.post('/createProduct', function (req, res) {
    var data = req.body;
    data.productId = uniqid();
    var productData = new ProductModel(data);
    productData.save().then(function (newProduct) {
        res.send({
            data: newProduct,
            message: "Product Created"
        })
    }, (error) => {
        console.log("Error occured while saving data. : ", error)
        if (error["code"] == 11000) {
            res.send({
                message: "Product exists"
            })
        }
        else {
            res.send({
                message: "Error in Product creation"
            })
        }
    })
});

app.post('/getProductById', function (req, res) {
    var data = req.body.productId;
    ProductModel.find({ productId: data }).then(function (result) {
        if (result.length != 0) {
            res.send({
                data: result,
                message: "Product details"
            });
        }
        else {
            res.send({
                message: "Product not found"
            });
        }

    }, (error) => {
        res.send({
            message: "Error occured while retrieving product data."
        })
    })
})

app.get('/getAllProduct', function (req, res) {
    ProductModel.find().then(function (result) {
        if (result.length != 0) {
            res.send({
                data: result,
                message: "Product List"
            });
        }
        else {
            res.send({
                message: "Products not found"
            });
        }

    }, (error) => {
        res.send({
            message: "Error occured while retrieving products list."
        })
    })
})

//Cart

app.post('/addToCart', function (req, res) {
    var data = req.body;
    data.cartId = uniqid();
    var cartData = new CartModel(data);
    cartData.save().then(function (cartProduct) {
        res.send({
            data: cartProduct,
            message: "Product added to cart."
        })
    }, (error) => {
        console.log("Error occured while saving data. : ", error)
        if (error["code"] == 11000) {
            res.send({
                message: "Product exists in cart"
            })
        }
        else {
            res.send({
                message: "Error in adding Product in cart"
            })
        }
    })
});

app.post('/getProductAddedInCart', function (req, res) {
    var data = req.body;
    CartModel.find({email:data.email}).then(function(result){
        if(result.length!= 0){
            res.send({
                data:result,
                message:"User Product List."
            })
        }
        else
        {
            res.send({
                message:"Cart is empty."
            })
        }
    },(error)=> {
        res.send({
            message:"An error occured while fetching product list."
        })
    })
});

app.post('/removeProductFromCart', function (req, res) {
    var data = req.body;
    CartModel.findOneAndRemove({email:data.email,cartId:data.cartId}).then(function(result){
        if(result.length!= 0){
            res.send({
                data:result,
                message:"Product deleted successfully"
            })
        }
        else
        {
            res.send({
                message:"No product found."
            })
        }
    },(error)=> {
        res.send({
            message:"An error occured while deleting product."
        })
    })
});

// get method
// app.get('/getRequest', function (req, res) {
//     //console.log(req.query);
//     // res.send({
//     //     message: "Hi"
//     // })
//     if (req.query.userName == "Shubham" && req.query.password == "verma") {
//         res.send({
//             message: "Valid User"
//         })
//     } 
//     else {
//         res.send({
//             message: "Invalid User"
//         })
//     }
// });

// // to download files
// app.get('/download',function(req,res){
//     var fileName = req.query.video;
//     res.download(fileName)
// })

// app.post('/postRequest', function (req, res) {
//     if (req.query.name == "Shubham") {
//         res.send({
//             message: "Valid User"
//         })
//     } 
//     else {
//         res.send({
//             message: "Invalid User"
//         })
//     }
// });



// app.listen(Port, function () {
//     console.log("Server is listening on : ", Port)
// });