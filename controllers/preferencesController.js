const authController = require('./authController'); // To get in-memory user store

// GET /users/preferences
exports.getPreferences = (req, res) => {
    const users = authController.getUserStore();
    const user = users.find(u => u.email === req.user.email);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ preferences: user.preferences || [] });
};

// PUT /users/preferences
exports.updatePreferences = (req, res) => {
    const { preferences } = req.body;

    if (!Array.isArray(preferences)) {
        return res.status(400).json({ message: 'Preferences should be an array' });
    }

    const users = authController.getUserStore();
    const user = users.find(u => u.email === req.user.email);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    user.preferences = preferences;
    res.status(200).json({ message: 'Preferences updated successfully' });
};
