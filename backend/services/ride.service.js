const rideModel = require('../models/ride.model');

const mapService = require('./map.service');

const crypto = require('crypto');


// ================= CALCULATE FARE =================
module.exports.getFare = async (
    pickup,
    destination
) => {

    if (!pickup || !destination) {
        throw new Error(
            'Pickup and destination are required'
        );
    }

    const distanceTime =
        await mapService.getDistanceTime(
            pickup,
            destination
        );

    const distance =
        distanceTime.distance.value / 1000;

    const duration =
        distanceTime.duration.value / 60;

    const fare = {

        auto: Math.round(
            30 + (distance * 10) + (duration * 2)
        ),

        bike: Math.round(
            20 + (distance * 7) + (duration * 1.5)
        ),

        car: Math.round(
            50 + (distance * 15) + (duration * 3)
        )
    };

    return fare;
};




// ================= GENERATE OTP =================
function generateOtp() {

    return crypto
        .randomInt(1000, 10000)
        .toString();
}




// ================= CREATE RIDE =================
module.exports.createRide = async ({
    user,
    pickup,
    destination,
    vehicleType
}) => {

    if (
        !user ||
        !pickup ||
        !destination ||
        !vehicleType
    ) {
        throw new Error(
            'All fields are required'
        );
    }

    const fare =
        await module.exports.getFare(
            pickup,
            destination
        );

    const ride = await rideModel.create({

        user,

        pickup,

        destination,

        otp: generateOtp(),

        vehicleType,

        fare: fare[vehicleType]

    });

    return ride;
};