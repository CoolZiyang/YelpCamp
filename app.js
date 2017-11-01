var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Cedar Bluff State Park", image: "http://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Outdoors/Galleries/The+Best+Fishing+Holes/Glen-Elder-580x370.jpg"},
        {name: "John Rock", image: "http://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Outdoors/Galleries/North+Carolina+Hikes/Slide1.jpg"},
        {name: "The Ice Age Trail (Wisconsin)", image: "http://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Outdoors/580/Ice+Age+Trail.jpg"},
        {name: "The Hayduke Trail (Utah to Arizona)", image: "http://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Outdoors/580/The+Hayduke+Trail.jpg"},
        {name: "Schodack Island State Park", image: "http://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Outdoors/580/NY+State+Parks+for+Fall/Schodack+Island+State+Park.jpg"},
        {name: "Guajome Regional Park", image: "http://www.sdparks.org/content/dam/sdparks/en/images/park-images/Guajome_3.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"},
        {name: "Cheney State Park", image: "http://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Outdoors/Galleries/The+Best+Fishing+Holes/Cheney-580x370.jpg"}
    ];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from posts and add it to campgrounds array
    var name=req.body.name;
    var image=req.body.image;
    var newCampground={name: name, image:image}; 
    campgrounds.push(newCampground);
    //redirect to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
})