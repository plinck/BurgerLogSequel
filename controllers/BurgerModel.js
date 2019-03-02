const path = require('path');

// This *model* contains data and business logic for the app 
// controller calls this after getting correct route

// Requiring our models
var db = require("../models");

class BurgerModel {

    constructor() {
//        console.log(db);
    }

    getBurgers(aCallback) {
        // WHY DOESNT db.Burger work???
        db.burgers.findAll({}).then( burgers => {
            aCallback(burgers);
        });
    }

    // add a burger and send back the inserted burger
    addBurger(newBurger, myCallback) {
        newBurger.isDevoured = false;

        db.burgers.create({
            name: newBurger.name,
            isDevoured: newBurger.isDevoured
        }).then(function (burger) {
            myCallback(burger);
        });
    }

    // Delete a burger
    deleteBurger(burger, myCallback) {
    }

    // Devour a burger and send back the updated burger
    devourBurger(burger, myCallback) {
    }

    // Update a burger and send back the updated burger
    updateBurger(burger, myCallback) {

    }
} // End Class

module.exports = BurgerModel;