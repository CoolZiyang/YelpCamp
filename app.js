var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "John Rock",
//         image: "http://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Outdoors/Galleries/North+Carolina+Hikes/Slide1.jpg",
//         description: "This hike takes you past a small but attractive waterfall, up to the top of John Rock, which is the large mountain you see looming behind the Fish Hatchery parking area in Pisgah National Forest. Views of the valley below, up to the Pisgah Ridge, and across to Looking Glass Rock are this hike's main scenic attraction besides the waterfall. It also passes by tranquil meadows near Picklesimer Fields, and through some nice displays of wildflowers in the spring."
        
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("NEWLY CREATED CAMPGROUND: ");
//             console.log(campground);
//         }
//     });

// var campgrounds = [
//         {name: "Cedar Bluff State Park", image: "http://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Outdoors/Galleries/The+Best+Fishing+Holes/Glen-Elder-580x370.jpg"},
//         {name: "John Rock", image: "http://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Outdoors/Galleries/North+Carolina+Hikes/Slide1.jpg"},
//         {name: "The Ice Age Trail (Wisconsin)", image: "http://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Outdoors/580/Ice+Age+Trail.jpg"},
//         {name: "The Hayduke Trail (Utah to Arizona)", image: "http://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Outdoors/580/The+Hayduke+Trail.jpg"},
//         {name: "Schodack Island State Park", image: "http://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Outdoors/580/NY+State+Parks+for+Fall/Schodack+Island+State+Park.jpg"},
//         {name: "Guajome Regional Park", image: "http://www.sdparks.org/content/dam/sdparks/en/images/park-images/Guajome_3.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"},
//         {name: "Cheney State Park", image: "http://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Outdoors/Galleries/The+Best+Fishing+Holes/Cheney-580x370.jpg"}
//     ];

app.get("/", function(req, res){
    res.render("landing");
});

// Index - show all of campgrounds
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {allCampgrounds:allCampgrounds});
        }
    });
});

// Create - add the new campground to database
app.post("/campgrounds", function(req, res){
    //get data from posts and add it to campgrounds array
    var name=req.body.name;
    var image=req.body.image;
    var desc=req.body.description;
    var newCampground={name : name, image : image, description : desc}; 
    //create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);    
        } else {
            res.redirect("/campgrounds");
        }
    });
});

// New - show form to create a new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new"); 
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("show", {foundCampground: foundCampground});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
}) 