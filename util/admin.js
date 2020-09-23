const admin = require('firebase-admin');

const serviceAccount = require('../path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "irate-c55d4.appspot.com"
});

const db = admin.firestore();
const storage = admin.storage();

module.exports = { db, admin, storage };