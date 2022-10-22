"use strict";
// operators.js
let randomNumber = Math.random();
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
    if (shipCanFire()) {
        shipAmmo--;
        if (isHit()) {
            targetHealth--;
            console.log("hit - targetHealth:", targetHealth);
        } else {
            console.log("miss");
        }
    } else {
        reloadShip();
        console.log("reloading, shipHealth:", shipHealth);
    }
}

function encounter() {
    console.log("You see a target");
    if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
        fireShip();
        if (isDestroyed(targetHealth)) {
            console.log("Target eliminated");
        }
        if (isDestroyed(shipHealth)) {
            console.log("ship destroyed");
        }
    }
}

function isHit() {
    if (Math.random() > 0.5) {
        return true;
    } else {
        return false;
    }
}

function shipCanFire() {
    if (shipHealth > 0 && shipAmmo > 0) {
        return true;
    } else {
        return false;
    }
}
const isDestroyed = (shipHealth) => (shipHealth < 0 ? true : false);
const reloadShip = function () {
    shipHealth++;
    shipAmmo += 3;
};