const mapsService = require('../services/map.service');
const { validationResult } = require('express-validator');


// GET COORDINATES
module.exports.getCoordinates = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    try {

        const { address } = req.query;

        const coordinates =
            await mapsService.getAddressCoordinates(address);

        res.json(coordinates);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Internal server error"
        });
    }
};


// GET DISTANCE TIME
module.exports.getDistanceTime = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    try {

        const { origin, destination } = req.query;

        const distanceTime =
            await mapsService.getDistanceTime(
                origin,
                destination
            );

        res.json(distanceTime);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Internal server error"
        });
    }
};


// GET SUGGESTIONS
module.exports.getSuggestions = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    try {

        const { query } = req.query;

        const suggestions =
            await mapsService.getSuggestions(query);

        res.json(suggestions);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Internal server error"
        });
    }
};