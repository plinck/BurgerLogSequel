const path = require('path');

// This *model* contains data and business logic for the app 
// controller calls this after getting correct route

// Requiring our models
var db = require("../models");

class Burger {

    constructor() {
    }

    getBurgers(aCallback) {
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
            myCallback(null, {id: burger.id, name: newBurger.name});
        }).catch(err => {
            myCallback(err, null);
        });
    }

    // Delete a burger
    deleteBurger(burger, myCallback) {
        db.burgers.destroy({
            where: {
                id: burger.id
            }
        })
        .then(function () {
            myCallback();
        });
    }

    // Devour a burger and send back the updated burger
    updateBurger(updatedBurger, myCallback) {
        db.burgers.update({
            name: updatedBurger.name,
            isDevoured: updatedBurger.isDevoured
        }, {
            where: {
                id: updatedBurger.id
            }
        })
        .then(function (burger) {
            myCallback(null, updatedBurger);
        })
        // Must catch any error including validation errors and return to client who must deal with it
        .catch(err => {
            myCallback(err, null);
        });
    }
} // End Class

module.exports = Burger;