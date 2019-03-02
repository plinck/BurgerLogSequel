const path = require('path');

// This *model* contains data and business logic for the app 
// controller calls this after getting correct route

// Requiring our models
var db = require("../models");

class Burger {

    constructor() {
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
        }).catch(err => {
            myCallback(err);
        });
;
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
    updateBurger(burger, myCallback) {
        db.burgers.update({
            name: burger.name,
            isDevoured: burger.isDevoured
        }, {
            where: {
                id: burger.id
            }
        })
        .then(function (burger) {
            myCallback(null, burger);
        })
        // Must catch any error including validation errors and return to client who must deal with it
        .catch(err => {
            myCallback(err, null);
        });
    }
} // End Class

module.exports = Burger;