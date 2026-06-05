const express = require('express');
const router = express.Router();

const { query } = require('express-validator');

const authMiddleware = require('../middleware/auth.middleware');

const mapController = require('../controllers/map.controller');


// ================= GET COORDINATES =================
router.get(
  '/get-coordinates',

  query('address')
    .isString()
    .isLength({ min: 3 })
    .withMessage('Address must be at least 3 characters long'),

  authMiddleware.authCaptain,

  mapController.getCoordinates
);


// ================= GET DISTANCE & TIME =================
router.get(
  '/get-distance-time',

  query('origin')
    .isString()
    .isLength({ min: 3 })
    .withMessage('Origin must be at least 3 characters long'),

  query('destination')
    .isString()
    .isLength({ min: 3 })
    .withMessage('Destination must be at least 3 characters long'),

  authMiddleware.authUser,

  mapController.getDistanceTime
);


// ================= GET LOCATION SUGGESTIONS =================
router.get(
  '/get-suggestions',

  query('query')
    .isString()
    .isLength({ min: 1 })
    .withMessage('Query must be at least 1 character long'),

  authMiddleware.authUser,

  mapController.getSuggestions
);


module.exports = router;