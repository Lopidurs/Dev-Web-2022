const Users = require("../models/modelUsers");
const seq = require("../config/config");
const sequelize = seq.sequelize;

exports.successConnection = function(req, res) {
    //res.json('connection successful');
    //res.render('successConnection');
    Users.findAll({
        attributes: [
            "id",
        ],
        where: {
            id: req.user.id
        }
    })
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error));
};

exports.succesCreation = function(req, res){
    res.json("successCreation");
};

exports.takenPhone = function(req, res){
    res.status(400).json("takenPhone");
};

exports.errorConnection = function(req, res){
    res.status(400).json("phone/password incorrect");
};

exports.notConnected = function(req, res){
    res.status(401).json("notConnected");
};

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.json("endConnection");
    });

};


exports.deleteOne = function(req, res) {
    Users.destroy({
        where:{
            phone: req.body.phone
        },
        force: true
    })
        .then(results => res.send("account deleted."))
        .catch(error => res.status(400).send("Error while deleting an account : ", error));
};

exports.signup = function(req, res) {

    res.json('signup');

}

exports.signin = function(req, res) {

    res.json('signin');

}
