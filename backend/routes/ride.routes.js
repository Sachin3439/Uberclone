const espresso = require('express');
const router = espresso.Router();
const {body} = require('express-validator');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/create', (req, res) => {
    authMiddleware.authUser,
    body('pickup').isString().withMessage('Origin must be a string');
    body('destination').isString().withMessage('Destination must be a string');
    body('vehicleType').isIn(['car', 'bike', 'scooter']).withMessage('Invalid vehicle type');
    rideController.createRide(req, res);

    res.send('Create a new ride');
});

router.get('/list', (req, res) => {
    res.send('List all rides');
});

module.exports = router;