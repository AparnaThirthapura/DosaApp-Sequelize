
var db = require("../models");

module.exports = function(app){
  
    app.get("/", function(req, res){
        db.dosa.findAll({
    	}).then(function(dbDosa){
            var hbsObject = {
                dosas: dbDosa
            };
            res.render("index", hbsObject);
        });
    });

    app.post("/", function(req, res){
        db.dosa.create({
            dosaName: req.body.dosaName,
            savoured: 0
        }).then(function(dbDosa){
            res.redirect("/");
        });
    });

    app.put("/:id", function(req, res){
        db.dosa.update({
            savoured: req.body.savoured
        },{
            where: {id: req.params.id}
        }).then(function(dbDosa){
            res.redirect("/");
        });
    });

    app.delete("/:id", function(req, res){
        db.dosa.destroy({
            where: {id: req.params.id}
        }).then(function(dbDosa) {
            res.redirect("/");
        });
    });
};

