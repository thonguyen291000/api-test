const admin = require('firebase-admin');

const serviceAccount = require('../path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "mobile-2ef47.appspot.com"
});

const db = admin.firestore();

module.exports = { db, admin };