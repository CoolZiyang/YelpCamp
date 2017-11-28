var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cedar Bluff State Park",
        image: "http://ksoutdoors.com/var/news/storage/images/state-parks/locations/cedar-bluff/cedar-bluff-gallery/cedar-bluff-cliff-view/453013-4-eng-US/Cedar-Bluff-Cliff-View_gallery.png",
        description: "Cedar Bluff State Park is divided into two, unique areas along the shorelines of Cedar Bluff Reservoir. The Bluffton Area, on the north shore, provides nearly 350 acres for visitors."
    },
    {
        name: "Cheney State Park",
        image: "http://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Outdoors/Galleries/The+Best+Fishing+Holes/Cheney-580x370.jpg",
        description: "Cheney State Park is a state park of Kansas in the United States. Completed in 1964, the park is located in Kingman and Reno counties in Kansas, 5 miles north of Cheney and 20 miles west of Wichita."
    },
    {
        name: "The Hayduke Trail (Utah to Arizona)",
        image: "https://andrewskurka.korndev-cdn.com/wp-content/uploads/featured_hayduke.jpg",
        description: "The Hayduke Trail is an 812-mile (1,307 km) backpacking route across southern Utah and northern Arizona.It begins in Arches National Park near Moab, Utah, before heading through the Needles district of Canyonlands National Park, Capitol Reef National Park, Bryce Canyon National Park, the Grand Canyon National Park and ending in Zion National Park.",
    }
];

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        // //add seeded campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err);
        //         } else {
        //             console.log("added a campground");
        //             //add seeded comments
        //             Comment.create(
        //                 {
        //                     text: "This place is great, but I wish there was Internet",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new commet");
        //                     }
        //             });
        //         }
        //     });
        // });
    });
}

module.exports = seedDB;