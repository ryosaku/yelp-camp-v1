var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Camp1", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTqg5PsPF91O_Cc_NQWI_r7j7a80eQYHgXOXH9JG8vsSwv5gGY6"},
        {name: "Camp2", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSEKLEv6uusxQ1FBPIkm51K0uahHCE9ehOQfguXh41QgkosTDrfg"},
        {name: "Camp3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYhJVbHfTExkqvMzudFdX52JR0E6XxbEQaHkX5guo_aqWHCmg8A"}
    ]
    res.render("campgrounds",{campgrounds:campgrounds});
}); 

app.listen(3000, function() {
    console.log("the yelpcamp server has started");
});


