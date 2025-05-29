const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const preferencesController = require('../controllers/preferencesController');
const { verifyToken } = require('../middleware/authMiddleware');


// Auth
router.post('/users/signup', authController.signup);
router.post('/users/login', authController.login);



// Preference & News routes will be added here later
// Preferences
router.get('/users/preferences', verifyToken, preferencesController.getPreferences);
router.put('/users/preferences', verifyToken, preferencesController.updatePreferences);

module.exports = router;
