const { getDatabase } = require('firebase-admin/database');

// Get a database reference to our blog
const db = getDatabase();
const ref = db.ref('server/saving-data/fireblog');